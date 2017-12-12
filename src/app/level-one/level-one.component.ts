import { Component, OnInit } from '@angular/core';
import { Page } from '../page.model';
import { Router } from '@angular/router';
import { PageService} from '../page.service';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.css'],
  providers: [PageService]
})
export class LevelOneComponent implements OnInit {
  pages: Page[];

  constructor(private router: Router, private pageService: PageService){}

  ngOnInit() {
    this.pages = this.pageService.getPage();
  }

  goToDetailPage(clickedPage: Page) {
    this.router.navigate(['pages', clickedPage.id]);
  };
}
