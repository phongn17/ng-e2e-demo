import 'jasmine';
import { element, by } from 'protractor';
import { Pastebin } from './page-objects/pastebin.po';

describe('Pastebin Page', () => {
  const mainPage: Pastebin = new Pastebin();

  beforeEach(() => {
    mainPage.navigateToHome();
  });

  it('should display the name of the application', () => {
    expect(mainPage.getPastebinHeading()).toContain('Pastebin Application');
  });

  it('should have a table header', () => {
    expect(mainPage.getTableHeader()).toContain("id Title Language Code");
  });

  it('table should have at least one row', () => {
    expect(mainPage.getFirstRowData()).toContain("Hello world");
  });
 
  it('should click the create Paste button', () => {
    expect(element(by.id('source-modal')).isPresent()).toBeFalsy('The modal window shouldn\'t appear right now');
    element(by.buttonText('create Paste')).click();
    expect(element(by.id('source-modal')).isPresent()).toBeTruthy('The modal window should appear right now');
  });

  it('should accept and save input values', () => {
    element(by.buttonText('create Paste')).click();

    // send input values to the form using sendKeys
    element(by.name('title')).sendKeys('Hello world in Ruby');
    element(by.name('language')).element(by.cssContainingText('option', 'Ruby')).click();
    element(by.name('paste')).sendKeys("puts 'Hello world';");

    element(by.buttonText('Save')).click();

    // expect the table to contain the new paste
    const lastRow = element.all(by.tagName('tr')).last();
    expect(lastRow.getText()).toContain('Hello world in Ruby');
  });
});