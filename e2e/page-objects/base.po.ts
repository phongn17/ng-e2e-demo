import { browser, by, element, promise, ElementFinder } from 'protractor';

export class Base {
  navigateToHome(): promise.Promise<any> {
    return browser.get('/');
  }

  navigateToAbout(): promise.Promise<any> {
    return browser.get('/about');
  }

  navigateToContact(): promise.Promise<any> {
    return browser.get('/contact');
  }

  getPastebin(): ElementFinder {
    return element(by.css('.pastebin'));
  }
  
  // Mock data for creating a new Paste and editing existing paste
  getMockPaste(): any {
    let paste: any = { title: 'Something here', language: 'Ruby', paste: 'Test' }
    return paste;
  }

  getEditedMockPaster(): any {
    let paste: any = { title: 'Paste 2', language: 'Javascript', paste: "Test2" };
  }

  // Methods shared by addPaste and viewPaste
  getInputTitle(): ElementFinder {
    return element(by.name('title'));
  }

  getInputLanguage(): ElementFinder {
    return element(by.name('language'));
  }

  getInputPaste(): ElementFinder {
    return element(by.name('paste'));
  }
}