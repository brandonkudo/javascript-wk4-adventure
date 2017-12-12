import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { PAGES } from './mock-pages';

@Injectable()
export class PageService {

  constructor() { }

  getPage() {
    return PAGES;
  }

  getPageById(pageId: number) {
    for (var i = 0; i <= PAGES.length - 1; i++) {
      if (PAGES[i].id === pageId) {
        return PAGES[i];
      }
    }
  }
}
