import type FakerSearchTag from '@data/faker/searchTag';
import {type BOTagsCreatePageInterface} from '@interfaces/BO/shopParameters/search/tags/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add tag page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOTagsCreatePage extends BOBasePage implements BOTagsCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly nameInput: string;

  private readonly languageInput: string;

  private readonly productSelect: string;

  private readonly moveToLeftButton: string;

  private readonly moveToRightButton: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add tag page
   */
  constructor() {
    super();

    this.pageTitleCreate = 'Tags > Add new •';
    this.pageTitleEdit = 'Tags > Edit:';

    // selectors
    this.nameInput = '#name';
    this.languageInput = '#id_lang';
    this.productSelect = '#select_left';
    this.moveToLeftButton = '#move_to_left';
    this.moveToRightButton = '#move_to_right';
    this.saveButton = '#tag_form_submit_btn';
  }

  /* Methods */
  /**
   * Create/Edit tag
   * @param page {Page} Browser tab
   * @param tagData {FakerSearchTag} Data to set to tag form
   * @returns {Promise<string>}
   */
  async setTag(page: Page, tagData: FakerSearchTag): Promise<string> {
    await this.setValue(page, this.nameInput, tagData.name);
    await this.selectByVisibleText(page, this.languageInput, tagData.language);
    // Choose product
    await this.waitForSelectorAndClick(page, this.moveToLeftButton);
    await this.selectByVisibleText(page, this.productSelect, tagData.products);
    await this.waitForSelectorAndClick(page, this.moveToRightButton);

    await this.clickAndWaitForURL(page, this.saveButton);
    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new BOTagsCreatePage();
