import { NewsService } from './service/news.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  title = 'NewsApp';
  opened = false;
  public sources: any = []
  public articles: any = []

  constructor(private observer: BreakpointObserver, private newsApi: NewsService) {}

  ngOnInit(): void {
    // this.newsApi.initArticles().subscribe((res:any)=>{
    //   console.log(res);
    //   this.articles = res.articles;
    // })
    this.newsApi.initSources().subscribe((res:any)=>{
      console.log(res);
      this.sources = res.sources;
    })

  }

  getSources() {}
}
