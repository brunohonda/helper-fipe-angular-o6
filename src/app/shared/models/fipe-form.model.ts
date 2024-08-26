import { Validators } from "@angular/forms";

export class FipeFormModel {
  vehicleType = [ '', [ Validators.required ]];
  brandId = [ '', [ Validators.required ]];
  modelId = [ '', [ Validators.required ]];
  yearId = [ '', [ Validators.required ]];
}
