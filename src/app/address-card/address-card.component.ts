import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  @Input('name') userName: string | undefined;

  constructor() {
  }

  ngOnInit(): void {

    this.user = {
      name: this.userName,
      title: "Software Developer",
      address: "123 Main St, City, State, 100000",
      phone: [
        '123 456 7890',
        '456 789 0123',
        '456 789 0123'
      ]
    };
  }
}
