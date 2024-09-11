import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FipeFormComponent } from "./shared/components/fipe-form/fipe-form.component";
import { VehicleCardComponent } from "./shared/components/vehicle-card/vehicle-card.component";
import { FipeService } from './shared/services/fipe.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    MatProgressSpinnerModule,
    FipeFormComponent,
    VehicleCardComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  vehicle$ = this.fipeService.vehicle$;
  vehicleLoading = this.fipeService.vehicleLoading;

  constructor(
    protected readonly fipeService: FipeService
  ) {}
}
