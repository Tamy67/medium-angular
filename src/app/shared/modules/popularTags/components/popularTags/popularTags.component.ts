import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from 'src/app/shared/modules/popularTags/store/selectors'
import { PopularTagType } from 'src/app/shared/types/popularTag.type'
import { getPopularTagsAction } from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html',
})
export class PopularTagsComponent implements OnInit {
  constructor(private store: Store) {}

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  popularTags$: Observable<PopularTagType[] | null>

  // initializeListeners(): void {}

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchPopularTags()
  }

  fetchPopularTags(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
