import { element, ElementFinder, by, promise } from "protractor";
import { Base } from "./base.po";
import { resolveDefinition } from "@angular/core/src/view/util";

export class AddPaste extends Base {
  getAddPaste(): ElementFinder {
    return element(by.tagName('app-add-paste'));
  }

  getCreateButton(): ElementFinder {
    return this.getAddPaste().element(by.buttonText('create Paste'));
  }

  isCreateButtonPresent(): promise.Promise<boolean> {
    return this.getCreateButton().isPresent();
  }

  clickCreateButton(): promise.Promise<void> {
    return this.getCreateButton().click();
  }

  // create paste modal
  getCreatePasteModal(): ElementFinder {
    return this.getAddPaste().element(by.id('source-modal'));
  }

  isCreatePasteModalPresent(): promise.Promise<boolean> {
    return this.getCreatePasteModal().isPresent();
  }

  // save button
  getSaveButton(): ElementFinder {
    return this.getAddPaste().element(by.buttonText('Save'));
  }

  clickSaveButton(): promise.Promise<void> {
    return this.getSaveButton().click();
  }

  // close button
  getCloseButton(): ElementFinder {
    return this.getAddPaste().element(by.buttonText('Close'));
  }

  clickCloseButton(): promise.Promise<void> {
    return this.getCloseButton().click();
  }

  // get input paste values from the modal window
  getInputPasteValues(): Promise<string[]> {
    let inputTitle, inputLanguage, inputPaste;

    // return the input values after the promise is resolveDefinition. Note that this.getInputTitle().getText doesn't work, so use getAttribute('value') instead
    return Promise.all([]).then(values => {
      return values;
    });
  }
}