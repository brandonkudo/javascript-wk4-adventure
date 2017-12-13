import { Component, OnInit } from '@angular/core';
import { Page } from '../page.model';
import { Router } from '@angular/router';
import { PageService} from '../page.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [PageService]
})
export class MainComponent implements OnInit {
  pages: Page[];

  constructor(private router: Router, private pageService: PageService){}

  ngOnInit() {
    this.pages = this.pageService.getPage();
  }

  goToDetailPage(clickedPage: Page) {
    this.router.navigate(['pages', clickedPage.id]);
    console.log(this.pages[clickedPage.id]);
  };
}
