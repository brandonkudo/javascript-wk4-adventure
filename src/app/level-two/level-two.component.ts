import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Page } from '../page.model';
import { PageService } from '../page.service';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.css'],
  providers: [PageService]
})
export class LevelTwoComponent implements OnInit {
  pageId: number = null;
  pageToDisplay: Page;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pageService: PageService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.pageId = parseInt(urlParameters['id'])
    });
    this.pageToDisplay = this.pageService.getPageById(this.pageId);
  }

}
