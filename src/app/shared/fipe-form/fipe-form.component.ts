import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { vehicleTypes } from '../constants/vehicle-types';
import { SelectOption } from '../interfaces/select-option';

@Component({
  selector: 'app-fipe-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './fipe-form.component.html',
  styleUrl: './fipe-form.component.scss'
})
export class FipeFormComponent {
  public vehicleTypes: SelectOption[] = vehicleTypes;
}
