import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: User;
  constructor() {
    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.designation = 'Software Engineer';
    this.user.address = '1000 Street City State';
    this.user.phone = [
      '123 456 7890',
      '123 456 7890'
    ];
  }

  inputText: string = "initial value";
  title = 'angular-sample-app';
}
