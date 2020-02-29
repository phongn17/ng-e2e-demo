import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
import { Base } from './base.po';

export class Pastebin extends Base {
  navigateToHome(): promise.Promise<any> {
    return super.navigateToHome();
  }

  getPastebin(): ElementFinder {
    return super.getPastebin();
  }

  getPastebinHeading(): promise.Promise<string> {
    return this.getPastebin().element(by.css('h2')).getText();
  }

  getTable(): ElementFinder {
    return this.getPastebin().element(by.css('table'));
  }

  getTableRows(): ElementArrayFinder {
    return this.getPastebin().all(by.tagName('tr'));
  }

  getTableHeader(): promise.Promise<string> {
    return this.getTableRows().get(0).getText();
  }
  
  getFirstRowData(): promise.Promise<string> {
    return this.getTableRows().get(1).getText();
  }

  getLastRowData(): promise.Promise<string> {
    return this.getTableRows().last().getText();
  }
}