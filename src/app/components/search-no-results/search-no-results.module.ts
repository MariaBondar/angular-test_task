import { NgModule } from '@angular/core';

import { SearchNoResultsComponent } from './search-no-results.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    SearchNoResultsComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [SearchNoResultsComponent],
})
export class SearchNoResultsModule { }
