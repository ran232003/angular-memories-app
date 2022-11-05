import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  pageState: String = '';
  authObject: any = {};
  constructor(
    private router: ActivatedRoute,
    private authService: SocialAuthService
  ) {}
  user!: SocialUser;

  signInWithGoogle(): void {
    // try {
    //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    //   console.log('tesrt');
    // } catch (error) {
    //   console.log(error, 'error');
    // }
  }
  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      console.log(param, 'tessss');
      this.pageState = param['status'].toUpperCase();
      console.log(param['status']);
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('this.user', this.user);
    });
  }
  change(event: any) {
    let key = event.name;
    this.authObject[key] = event.value;
    console.log(this.authObject, 'this.authObject', event);
  }
  signOut(): void {}
}
