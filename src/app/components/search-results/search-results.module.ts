import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchResultsComponent } from './search-results.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [SearchResultsComponent],
})
export class SearchResultsModule { }
