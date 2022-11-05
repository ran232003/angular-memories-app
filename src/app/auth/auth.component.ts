import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  pageState: String = '';
  authObject: any = {};
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      console.log(param);
      this.pageState = param['status'].toUpperCase();
      console.log(param['status']);
    });
  }
  change(event: any) {
    let key = event.name;
    this.authObject[key] = event.value;
    console.log(this.authObject, 'this.authObject', event);
  }
}
