import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { RouterModule } from '@angular/router'

import { ArticleComponent } from '@/article/components/article.component'
import { GetArticleEffect } from '@/article/store/effects/getArticle.effect'
import { reducers } from '@/article/store/reducers'
import { ErrorMessageModule } from '@shared/modules/errorMessage/errorMessage.module'
import { LoadingModule } from '@shared/modules/loading/loading.module'
import { TagListModule } from '@shared/modules/tagList/tagList.module'
import { ArticleService as SharedArticleService } from '@shared/services/article.service'
import { ArticleService } from '@/article/services/article.service'
import { DeleteArticleEffect } from '@/article/store/effects/deleteArticle.effect'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    RouterModule.forChild(routes),
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
