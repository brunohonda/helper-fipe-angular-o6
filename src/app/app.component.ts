import { Component } from '@angular/core';
import { FipeFormComponent } from "./shared/fipe-form/fipe-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FipeFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'helper-fipe-angular-o6';
}
