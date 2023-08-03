import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { SearchNoResultsComponent } from './search-no-results/search-no-results.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { CatPictureSearchComponent } from './cat-picture-search/cat-picture-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchNoResultsComponent,
    SearchResultsComponent,
    CatPictureSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
