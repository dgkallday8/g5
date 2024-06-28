import { Injectable } from '@angular/core';
import { Auth, UserCredential, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth'
import { IUserCredentials } from '../../common/interfaces'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private auth: Auth) { }

  readonly authState$ = authState(this.auth);

  signUpWithEmailAndPassword(credential: IUserCredentials): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this.auth,
      credential.email,
      credential.password
    );
  }

  loginWithEmailAndPassword(credential: IUserCredentials) {
    return signInWithEmailAndPassword(
      this.auth,
      credential.email,
      credential.password
    );
  }

  logOut(): Promise<void> {
    return this.auth.signOut();
  }
}
