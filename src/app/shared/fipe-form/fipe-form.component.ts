import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FipeFormModel } from './../models/fipe-form.model';

import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { vehicleTypes } from '../constants/vehicle-types';
import { SelectOption } from '../interfaces/select-option';

@Component({
  selector: 'app-fipe-form',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './fipe-form.component.html',
  styleUrl: './fipe-form.component.scss'
})
export class FipeFormComponent {
  public form = this.formBuilder.group(new FipeFormModel())
  public vehicleTypes: SelectOption[] = vehicleTypes;

  constructor(
    protected readonly formBuilder: FormBuilder,
  ) {}
}
