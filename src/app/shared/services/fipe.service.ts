import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, finalize, take } from 'rxjs';
import { FipeFormValue } from './../interfaces/fipe-form-value';
import { SelectOption } from './../interfaces/select-option';
import { Vehicle } from './../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  private _brands$ = new BehaviorSubject<SelectOption[]>([]);
  private _brandsLoading = signal(false);
  public brands$ = this._brands$.asObservable();
  public brandsLoading = this._brandsLoading.asReadonly();

  private _models$ = new BehaviorSubject<SelectOption[]>([]);
  private _modelsLoading = signal(false);
  public models$ = this._models$.asObservable();
  public modelsLoading = this._modelsLoading.asReadonly();

  private _years$ = new BehaviorSubject<SelectOption[]>([]);
  private _yearsLoading = signal(false);
  public years$ = this._years$.asObservable();
  public yearsLoading = this._yearsLoading.asReadonly();

  private _vehicle$ = new BehaviorSubject<Vehicle | null>(null);
  private _vehicleLoading = signal(false);
  public vehicle$ = this._vehicle$.asObservable();
  public vehicleLoading = this._vehicleLoading.asReadonly();

  constructor(
    protected readonly http: HttpClient,
  ) { }

  getBrands(vehicleType: string): void {
    this._brandsLoading.set(true);
    this.http
      .get<SelectOption[]>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands`)
      .pipe(
        take(1),
        finalize(() => this._brandsLoading.set(false)),
      )
      .subscribe(data => this._brands$.next(data));
  }

  getModels(vehicleType: string, brandId: string): void {
    this._modelsLoading.set(true);
    this.http
      .get<SelectOption[]>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands/${ brandId }/models`)
      .pipe(
        take(1),
        finalize(() => this._modelsLoading.set(false)),
      ).subscribe(data => this._models$.next(data));
  }

  getYears(vehicleType: string, brandId: any, modelId: string): void {
    this._yearsLoading.set(true);
    this.http
      .get<SelectOption[]>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands/${ brandId }/models/${ modelId }/years`)
      .pipe(
        take(1),
        finalize(() => this._yearsLoading.set(false)),
      ).subscribe(data => this._years$.next(data));
  }

  getVehicle(data: FipeFormValue): void {
    const { vehicleType, brandId, modelId, yearId } = data;

    this._vehicleLoading.set(true);
    this.http
      .get<Vehicle>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands/${ brandId }/models/${ modelId }/years/${ yearId }`)
      .pipe(
        take(1),
        finalize(() => this._vehicleLoading.set(false)),
      ).subscribe(data => this._vehicle$.next(data));
  }

  resetVehicle() {
    this._vehicle$.next(null);
  }
}
