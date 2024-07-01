import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchComponent } from '../../components/search/search.component'
import { IUserData } from '../../../../common/interfaces'
import { HttpService } from '../../../../core/services/http.service'
import { ToastService } from '../../../../core/services/toast.service'

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrl: './data-page.component.scss'
})
export class DataPageComponent implements OnInit{
  @ViewChild(SearchComponent)
  public searchComponent!: SearchComponent;

  public users: IUserData[] = []

  public activePath: 'table' | 'blocks' = 'blocks'

  constructor(private _httpService: HttpService, private _toastService: ToastService) {}

  public ngOnInit(): void {
    this.activePath = window.location.href.includes('blocks') ? 'blocks' : 'table'
  }

  public get isBlocksPage() {
    return this.activePath === 'blocks'
  }

  public onUsersEmit(gotUsers: IUserData[] | null) {
    if (gotUsers) {
      this.users = this.users.concat(gotUsers)

      if (!this.users.length) {
        this._toastService.error('Users not found, change your request!')
      }
    } else {
      this.users = []
    }
  }

  public onScroll() {
    this._httpService.searchPage.next(this._httpService.searchPage.value + 1)
    this.searchComponent.onSubmit()
  }
}
