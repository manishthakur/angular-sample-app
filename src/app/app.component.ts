import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  user: User;

  constructor(private svc: TestService) {

    svc.printToConsole('Got the Test Service.');

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
