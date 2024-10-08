import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { VehicleTypePipe } from '../../pipes/vehicle-type.pipe';
import { Vehicle } from './../../interfaces/vehicle';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    VehicleTypePipe
  ],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleCardComponent {
  @Input({ required: true }) vehicle!: Vehicle;
}
