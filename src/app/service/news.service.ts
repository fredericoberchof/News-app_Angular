import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  api_key = 'c152dcbf92d54f92b792fbbe200ae7aa';
  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key
    );
  }
  getArticlesBuid(source: string) {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
  initArticles(source: string) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
