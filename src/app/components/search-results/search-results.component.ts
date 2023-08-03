import { Component, Input } from '@angular/core';
import { CatImage } from '../../model/cat-image';

@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  @Input() filteredCatImages: CatImage[] = [];
}
