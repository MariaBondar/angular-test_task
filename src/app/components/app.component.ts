import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CatImage } from './../model/cat-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;
  allCatImages: CatImage[] = [];
  defaultResultsCount: number = 10;
  breeds: string[] = ['all', 'abyssinian', 'bengal', 'sphynx', 'siamese'];

  @Output() filteredCatImages: CatImage[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.searchForm = this.fb.group({
      breed: ['all', Validators.required],
      resultsCount: [this.defaultResultsCount, Validators.required]
    });
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    const breed = this.searchForm.value.breed.substr(0, 4).toLowerCase();
    const resultsCount = this.searchForm.value.resultsCount;

    let apiUrl = 'https://api.thecatapi.com/v1/images/search';
    let params = new HttpParams();

    if (breed !== 'all') {
      params = params.append('breed_id', breed);
    }

    params = params.append('limit', resultsCount.toString());

    this.http.get<CatImage[]>(apiUrl, { params }).subscribe((catImages) => {
      this.allCatImages = catImages;
      this.applyFilters(resultsCount);
    });
  }

  applyFilters(resultsCount: number) {
    let filteredImages = [...this.allCatImages];

    this.filteredCatImages = filteredImages.slice(0, resultsCount);
  }
}
