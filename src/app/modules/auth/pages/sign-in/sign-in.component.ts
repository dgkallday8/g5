import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'
import { IUserCredentials } from '../../../../common/interfaces'
import { ToastService } from '../../../../core/services/toast.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  constructor (private _fb: FormBuilder, private _authService: AuthService, private _router: Router, private _toastService: ToastService) {}

  public credintialsForm = this._fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  })

  public async login() {
    if (!this.credintialsForm.valid) return;

    const credentials: any = {
      email: this.credintialsForm.value.email,
      password: this.credintialsForm.value.password,
    }

    try {
      await this._authService.loginWithEmailAndPassword(credentials)
      this.successfullLogin();
    } catch (e) {
      this._toastService.error('Failed to sign in. Please try again.');
    }
  }

  public async signUpWithGoogle(): Promise<void> {
    try {
      await this._authService.signInWithGoogleProvider();
      this.successfullLogin();
    } catch (e) {
      this._toastService.error('Failed to sign in. Please try again.');
    }
  }

  public async signUpWithGithub(): Promise<void> {
    try {
      await this._authService.signInWithGithubProvider();
      this.successfullLogin();
    } catch (e) {
      this._toastService.error('Failed to sign in. Please try again.');
    }
  }

  public successfullLogin() {
    this._toastService.success('Successfully signed in!');
    this._router.navigateByUrl('/home');
  }
}
