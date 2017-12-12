import { Injectable } from '@angular/core';
import { Page } from './page.model';
import { PAGES } from './mock-pages';
import { PAGES2 } from './mock-pages';
import { PAGES3 } from './mock-pages';

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

export class Page2Service {

  constructor() { }

  getPage() {
    return PAGES2;
  }

  getPageById(pageId: number) {
    for (var i = 0; i <= PAGES2.length - 1; i++) {
      if (PAGES2[i].id === pageId) {
        return PAGES2[i];
      }
    }
  }

}

export class Page3Service {

  constructor() { }

  getPage() {
    return PAGES3;
  }

  getPageById(pageId: number) {
    for (var i = 0; i <= PAGES3.length - 1; i++) {
      if (PAGES3[i].id === pageId) {
        return PAGES3[i];
      }
    }
  }

}
