import { Component } from '@angular/core'
import { Observable, Subscribable } from 'rxjs'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  styleUrls: ['./globalFeed.component.scss'],
})
export class GlobalFeedComponent {
  apiUrl = '/articles'
}
