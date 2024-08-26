import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FipeFormValue } from './../interfaces/fipe-form-value';
import { SelectOption } from './../interfaces/select-option';
import { Vehicle } from './../interfaces/vehicle';

@Injectable({
  providedIn: 'root'
})
export class FipeService {
  private _brands$ = new BehaviorSubject<SelectOption[]>([]);
  public brands$ = this._brands$.asObservable();

  private _models$ = new BehaviorSubject<SelectOption[]>([]);
  public models$ = this._models$.asObservable();

  private _years$ = new BehaviorSubject<SelectOption[]>([]);
  public years$ = this._years$.asObservable();

  private _vehicle$ = new BehaviorSubject<Vehicle | null>(null);
  public vehicle$ = this._vehicle$.asObservable();

  constructor(
    protected readonly http: HttpClient,
  ) { }

  getBrands(vehicleType: string): void {
    this.http
      .get<SelectOption[]>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands`)
      .subscribe(data => this._brands$.next(data));
  }

  getModels(vehicleType: string, brandId: string): void {
    this.http
      .get<SelectOption[]>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands/${ brandId }/models`)
      .subscribe(data => this._models$.next(data));
  }

  getYears(vehicleType: string, brandId: any, modelId: string): void {
    this.http
      .get<SelectOption[]>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands/${ brandId }/models/${ modelId }/years`)
      .subscribe(data => this._years$.next(data));
  }

  getVehicle(data: FipeFormValue): void {
    const { vehicleType, brandId, modelId, yearId } = data;

    this.http
      .get<Vehicle>(`https://fipe.parallelum.com.br/api/v2/${ vehicleType }/brands/${ brandId }/models/${ modelId }/years/${ yearId }`)
      .subscribe(data => this._vehicle$.next(data));
  }

  resetVehicle() {
    this._vehicle$.next(null);
  }
}
