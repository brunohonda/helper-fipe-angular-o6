import { Pipe, PipeTransform } from '@angular/core';
import { vehicleTypes } from '../constants/vehicle-types';

@Pipe({
  name: 'vehicleType',
  standalone: true
})
export class VehicleTypePipe implements PipeTransform {

  transform(value: number): string {
    return vehicleTypes.find(item => item.id === value)?.name ?? value.toString();
  }

}
