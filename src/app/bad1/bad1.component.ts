import { Component, OnInit } from '@angular/core';
import { Page } from '../page.model';
import { Router } from '@angular/router';
import { Page3Service} from '../page.service';

@Component({
  selector: 'app-bad1',
  templateUrl: './bad1.component.html',
  styleUrls: ['./bad1.component.css'],
  providers: [Page3Service]
})
export class Bad1Component implements OnInit {
  pages: Page[];

  constructor(private router: Router, private page3Service: Page3Service){}

  ngOnInit() {
    this.pages = this.page3Service.getPage();
  }

  goToDetailPage(clickedPage: Page) {
    this.router.navigate(['pages', clickedPage.id]);
  };
}
