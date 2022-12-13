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
  state!: string;
  authObject: any = {};
  validateArray = ['email', 'required'];
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
      this.pageState = param['status'].toUpperCase();
      this.state = param['status'];
      console.log(param['status']);
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }
  change(event: any) {
    let key = event.name;
    let valid = key + 'Valid';
    this.authObject[valid] = event.valid;
    this.authObject[key] = event.value;
  }
  signOut(): void {}
}
