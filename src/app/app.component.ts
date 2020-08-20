import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PatientForm';
  Roles: any = ['Admin', 'Author', 'Reader'];
  selected = 0;

  register(form) {
    console.log(form.value);
  }
}
