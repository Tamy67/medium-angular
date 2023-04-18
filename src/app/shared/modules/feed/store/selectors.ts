import { createSelector } from '@ngrx/store'
import { FeedStateInterface } from '../types/feedState.interface'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'

export const feedFeatureSelector = (
  state: AppStateInterface
): FeedStateInterface => state.feed

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
)

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
)

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
)
