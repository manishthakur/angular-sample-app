import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private svc: TestService, private Http: HttpClient) {
    svc.printToConsole('Got the Test Service.');
  }

  ngOnInit() {
    let obs = this.Http.get('https://api.github.com/users/manishthakur');
    obs.subscribe((response) => console.log(response));
  }

}
