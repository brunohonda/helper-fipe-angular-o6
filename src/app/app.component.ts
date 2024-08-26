import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FipeFormComponent } from "./shared/fipe-form/fipe-form.component";
import { FipeService } from './shared/services/fipe.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    FipeFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  vehicle$ = this.fipeService.vehicle$;

  constructor(
    protected readonly fipeService: FipeService
  ) {}
}
