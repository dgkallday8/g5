import { Injectable } from '@angular/core';
import { Auth, AuthProvider, GithubAuthProvider, GoogleAuthProvider, UserCredential, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth'
import { IUserCredentials } from '../../common/interfaces'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private auth: Auth) { }

  readonly authState$ = authState(this.auth);

  public signUpWithEmailAndPassword(credential: IUserCredentials): Promise<UserCredential> {
    return createUserWithEmailAndPassword(
      this.auth,
      credential.email,
      credential.password
    );
  }

  public loginWithEmailAndPassword(credential: IUserCredentials) {
    return signInWithEmailAndPassword(
      this.auth,
      credential.email,
      credential.password
    );
  }

  public logOut(): Promise<void> {
    return this.auth.signOut();
  }

  signInWithGoogleProvider(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();

    return this.callPopUp(provider);
  }

  signInWithGithubProvider(): Promise<UserCredential> {
    const provider = new GithubAuthProvider();

    return this.callPopUp(provider);
  }

  async callPopUp(provider: AuthProvider): Promise<UserCredential> {
    try {
      const result = await signInWithPopup(this.auth, provider);

      return result;
    } catch (error: any) {
      return error;
    }
  }
}
