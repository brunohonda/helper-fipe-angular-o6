import { Validators } from "@angular/forms";

export class FipeFormModel {
  vehicleType = [ '', [ Validators.required ]];
  brandId = [ 0, [ Validators.required ]];
  modelId = [ 0, [ Validators.required ]];
  yearId = [ '', [ Validators.required ]];
}
