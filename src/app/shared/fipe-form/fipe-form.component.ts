import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import { vehicleTypes } from '../constants/vehicle-types';
import { SelectOption } from '../interfaces/select-option';
import { FipeFormValue } from './../interfaces/fipe-form-value';
import { FipeFormModel } from './../models/fipe-form.model';
import { FipeService } from './../services/fipe.service';

@Component({
  selector: 'app-fipe-form',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './fipe-form.component.html',
  styleUrl: './fipe-form.component.scss'
})
export class FipeFormComponent implements OnInit {
  @Output() submit = new EventEmitter<FipeFormValue>();


  public formModel = new FipeFormModel();
  public form = this.formBuilder.group(this.formModel);
  public vehicleTypes: SelectOption[] = vehicleTypes;
  public brands$: Observable<SelectOption[]> = this.fipeService.brands$;
  public brandsLoading = this.fipeService.brandsLoading;
  public models$: Observable<SelectOption[]> = this.fipeService.models$;
  public modelsLoading = this.fipeService.modelsLoading;
  public years$: Observable<SelectOption[]> = this.fipeService.years$;
  public yearsLoading = this.fipeService.yearsLoading;

  constructor(
    protected readonly formBuilder: FormBuilder,
    protected readonly fipeService: FipeService,
  ) {}

  ngOnInit(): void {
    this.form.get('vehicleType')?.valueChanges.subscribe(vehicleType => this._vehicleTypeChangeHandler(vehicleType as string));
    this.form.get('brandId')?.valueChanges.subscribe(brandId => this._brandIdChangeHandler(brandId as string));
    this.form.get('modelId')?.valueChanges.subscribe(modelId => this._modelIdChangeHandler(modelId as string));
    this.form.valueChanges.subscribe(data => this._formChangeHandler(data as FipeFormValue));
  }

  private _vehicleTypeChangeHandler(vehicleType: string): void {
    this._resetForm({ vehicleType });

    this.fipeService.getBrands(vehicleType as string);
  }

  private _brandIdChangeHandler(brandId: string): void {
    const vehicleType = this.form.getRawValue().vehicleType as string;

    this._resetForm({
      vehicleType,
      brandId,
    });

    this.fipeService.getModels(vehicleType, brandId);
  }

  private _modelIdChangeHandler(modelId: string): void {
    const vehicleType = this.form.getRawValue().vehicleType as string;
    const brandId = this.form.getRawValue().brandId as string;

    this._resetForm({
      vehicleType,
      brandId,
      modelId,
    });

    this.fipeService.getYears(vehicleType, brandId, modelId);
  }

  private _formChangeHandler(data: FipeFormValue): void {
    if (this.form.valid) {
      this.fipeService.getVehicle(data);
    }
  }

  private _resetForm(data: Partial<FipeFormValue>) {
    this.form.reset({
      vehicleType: this.formModel.vehicleType[0] as string,
      brandId: this.formModel.brandId[0] as string,
      modelId: this.formModel.modelId[0] as string,
      yearId: this.formModel.yearId[0] as string,
      ...data,
    }, {
      emitEvent: false,
    });
    this.fipeService.resetVehicle();
  }
}
