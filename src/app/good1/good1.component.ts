import { Component, OnInit } from '@angular/core';
import { Page } from '../page.model';
import { Router } from '@angular/router';
import { Page2Service} from '../page.service';

@Component({
  selector: 'app-good1',
  templateUrl: './good1.component.html',
  styleUrls: ['./good1.component.scss'],
  providers: [Page2Service]
})
export class Good1Component implements OnInit {
  pages: Page[];

  constructor(private router: Router, private page2Service: Page2Service){}

  ngOnInit() {
    this.pages = this.page2Service.getPage();
  }

  goToDetailPage(clickedPage: Page) {
    this.router.navigate(['pages', clickedPage.id]);
  };
}
