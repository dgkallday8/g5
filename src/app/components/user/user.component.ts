import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HttpService } from '../../services/http.service'
import { IUserFullData } from '../../common/interfaces'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  public userLogin: string | null = null  

  public user$: Observable<IUserFullData> | null = null;

  constructor (private _route: ActivatedRoute, private _httpService: HttpService) {}

  public ngOnInit(): void {
    this.userLogin = this._route.snapshot.params['login'];

    if (this.userLogin) {
      this.user$ = this._httpService.getUser(this.userLogin)
    }

  }
}
