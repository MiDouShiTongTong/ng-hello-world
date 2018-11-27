import { CanActivate } from '@angular/router';
export class SignInCanActivate implements CanActivate {
  canActivate(): boolean {
    const isSignIn = Math.random() > 0.5;
    if (!isSignIn) {
      console.log('未登录');
    }
    return isSignIn;
  }
}
