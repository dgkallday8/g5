import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { HttpService } from '../../../../core/services/http.service'
import { ToastService } from '../../../../core/services/toast.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnDestroy {
  @Output() public usersEmitter = new EventEmitter();

  private _sub$!: Subscription

  public valueControl = this._fb.control('');

  constructor(private _httpService: HttpService, private _fb: FormBuilder, private _toastService: ToastService) {}

  public onSubmit(resetPage = false) {
    if (!this.valueControl.value) return;

    if (resetPage) {
      this._httpService.searchPage.next(0)
      this.usersEmitter.emit(null)
    }

    const filters = {
      q: this.valueControl.value,
      page: this._httpService.searchPage.value,
      per_page: this._httpService.perPageValue,
    }

    this._sub$ = this._httpService.getUsers(filters).subscribe({
      next: (res) => {
        if (res) {
          this.usersEmitter.emit(res.items)
        }
      },
      error: () => {
        this._toastService.error('API rate limit exceeded')
      },
    })
  }

  public ngOnDestroy(): void {
    if (this._sub$) {
      this._sub$.unsubscribe()
    }
  }
}
