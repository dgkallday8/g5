import { Component, ViewChild } from '@angular/core';
import { SearchComponent } from '../search/search.component'
import { HttpService } from '../../services/http.service'
import { IUserData } from '../../common/interfaces'

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss'
})
export class BlocksComponent {
  @ViewChild(SearchComponent)
  public searchComponent!: SearchComponent;

  public users: IUserData[] = []

  public showToast = false;

  constructor(private _httpService: HttpService) {}

  public onUsersEmit(gotUsers: IUserData[] | null) {
    if (gotUsers) {
      this.users = this.users.concat(gotUsers)

      if (!gotUsers.length && !this.users.length) {
        this.showToast = true
      }
    } else {
      this.users = []
    }
  }

  public toUser(user: IUserData) {
    console.log('toUser', user);
  }

  public onScroll() {
    this._httpService.searchPage.next(this._httpService.searchPage.value + 1)
    this.searchComponent.onSubmit()
  }
}
