import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../../../../core/services/auth.service'
import { Router } from '@angular/router'
import { ToastService } from '../../../../core/services/toast.service'
import { IUserCredentials, ProviderValue } from '../../../../common/interfaces'

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.scss'
})
export class EnterComponent implements OnInit {
  public activePath: 'sign-up' | 'sign-in' = 'sign-in'

  constructor (
    private _fb: FormBuilder, 
    private _authService: AuthService, 
    private _router: Router, 
    private _toastService: ToastService,
  ) {}

  public credintialsForm = this._fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  })

  public ngOnInit(): void {
    this.activePath = window.location.href.includes('sign-in') ? 'sign-in' : 'sign-up'
  }

  public get isSignInPage() {
    return this.activePath === 'sign-in'
  }

  public get routerLinkPath() {
    return this.activePath === 'sign-in' ? 'sign-up' : 'sign-in'
  }

  public async login() {
    if (this.credintialsForm.invalid) return;
    
    const { email, password } = this.credintialsForm.value;

    if (!email || !password) return;

    const credentials: IUserCredentials = {
      email,
      password,
    }

    try {
      if (this.isSignInPage) {
        await this._authService.loginWithEmailAndPassword(credentials)
        this.successfullLogin();
      } else {
        await this._authService.signUpWithEmailAndPassword(credentials);
        this.successfullLogin('Successfully signed up!');
      }
    } catch (e) {
      this._toastService.error('Failed to sign in. Please try again.');
    }
  }

  public async signWithGoogle(): Promise<void> {
    try {
      await this._authService.signInWithGoogleProvider();
      this.successfullLogin();
    } catch (e) {
      this._toastService.error('Failed to sign in. Please try again.');
    }
  }

  public async signWithGithub(): Promise<void> {
    try {
      await this._authService.signInWithGithubProvider();
      this.successfullLogin();
    } catch (e) {
      this._toastService.error('Failed to sign in. Please try again.');
    }
  }

  public successfullLogin(text: string = 'Successfully signed in!') {
    this._toastService.success(text);
    this._router.navigateByUrl('/home');
  }

  public loginWith(type: ProviderValue) {
    if (type === ProviderValue.Github) {
      this.signWithGithub()
    } else {
      this.signWithGoogle()
    }
  } 

  public splitStrByDash(str: string) {
    return str.split('-').join(' ')
  }
}
