import BOBasePage from '@pages/BO/BOBasePage';

import type {BODesignLinkListCreatePageInterface} from '@interfaces/BO/design/linkList/create';

import {type Page} from '@playwright/test';
import FakerLinkWidget from '@data/faker/linkWidget';
import {LinkWidgetPage} from '@data/types/linkWidget';

/**
 * New link block page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class CreateLinkBlockPage extends BOBasePage implements BODesignLinkListCreatePageInterface {
  public readonly pageTitle: string;

  private readonly changeNameLangButton: string;

  private readonly changeNameLangSpan: (lang: string) => string;

  private readonly nameInput: (id: number) => string;

  private readonly hookSelect: string;

  private readonly cmsPagesCheckbox: (id: number) => string;

  private readonly productsPagesCheckbox: (id: number) => string;

  private readonly categoriesPagesCheckbox: (id: number) => string;

  private readonly staticContentCheckbox: (id: number) => string;

  private readonly customTitleInput: (position: number, id: number) => string;

  private readonly customUrlInput: (position: number, id: number) => string;

  private readonly addCustomBlockButton: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on new link block page
   */
  constructor() {
    super();

    this.pageTitle = 'Link List •';

    // Selectors
    this.changeNameLangButton = '#form_link_block_block_name_dropdown';
    this.changeNameLangSpan = (lang: string) => `div.dropdown-menu.show span[data-locale='${lang}']`;
    this.nameInput = (id: number) => `#form_link_block_block_name_${id}`;
    this.hookSelect = '#form_link_block_id_hook';
    this.cmsPagesCheckbox = (id: number) => `#form_link_block_cms_${id} + i`;
    this.productsPagesCheckbox = (id: number) => `#form_link_block_product_${id} + i`;
    this.categoriesPagesCheckbox = (id: number) => `#form_link_block_category_${id} + i`;
    this.staticContentCheckbox = (id: number) => `#form_link_block_static_${id} + i`;
    this.customTitleInput = (position: number, id: number) => `#form_link_block_custom_${position}_${id}_title`;
    this.customUrlInput = (position: number, id: number) => `#form_link_block_custom_${position}_${id}_url`;
    this.addCustomBlockButton = 'button[data-collection-id=\'form_link_block_custom\']';
    this.saveButton = '.card-footer button';
  }

  /* Methods */
  /**
   * Change input name language
   * @param page {Page} Browser tab
   * @param lang {string} Value of language to select
   * @return {Promise<void>}
   */
  async changeLanguage(page: Page, lang: string): Promise<void> {
    await Promise.all([
      page.locator(this.changeNameLangButton).click(),
      this.waitForVisibleSelector(page, `${this.changeNameLangButton}[aria-expanded='false']`),
    ]);
    await Promise.all([
      page.locator(this.changeNameLangSpan(lang)).click(),
      this.waitForVisibleSelector(page, `${this.changeNameLangButton}[aria-expanded='true']`),
    ]);
  }

  /**
   * Select content pages
   * @param page {Page} Browser tab
   * @param contentPages {Array<string>} List of content pages
   * @return {Promise<void>}
   */
  async selectContentPages(page: Page, contentPages: string[]): Promise<void> {
    /* eslint-disable no-restricted-syntax */
    for (const contentPage of contentPages) {
      let selector: string = '';

      switch (contentPage) {
        case 'Delivery':
          selector = this.cmsPagesCheckbox(0);
          break;
        case 'Legal Notice':
          selector = this.cmsPagesCheckbox(1);
          break;
        case 'Terms and conditions of use':
          selector = this.cmsPagesCheckbox(2);
          break;
        case 'About us':
          selector = this.cmsPagesCheckbox(3);
          break;
        case 'Secure payment':
          selector = this.cmsPagesCheckbox(4);
          break;
        default:
        // Do nothing
      }
      if (selector !== '') {
        await page.setChecked(selector, true, {force: true});
      }
    }
  }

  /**
   * Select product pages
   * @param page {Page} Browser tab
   * @param productPages {Array<string>} List of product pages
   * @return {Promise<void>}
   */
  async selectProductPages(page: Page, productPages: string[]): Promise<void> {
    /* eslint-disable no-restricted-syntax */
    for (const productPage of productPages) {
      let selector: string = '';

      switch (productPage) {
        case 'Prices drop':
          selector = this.productsPagesCheckbox(0);
          break;
        case 'New products':
          selector = this.productsPagesCheckbox(1);
          break;
        case 'Best sales':
          selector = this.productsPagesCheckbox(2);
          break;
        default:
        // Do nothing
      }
      if (selector !== '') {
        await page.setChecked(selector, true, {force: true});
      }
    }
  }

  /**
   * Select category pages
   * @param page {Page} Browser tab
   * @param productPages {Array<string>} List of product pages
   * @return {Promise<void>}
   */
  async selectCategoryPages(page: Page, categoryPages: string[]): Promise<void> {
    /* eslint-disable no-restricted-syntax */
    for (const categoryPage of categoryPages) {
      let selector: string = '';

      switch (categoryPage) {
        case 'Accessories':
          selector = this.categoriesPagesCheckbox(0);
          break;
        case 'Art':
          selector = this.categoriesPagesCheckbox(1);
          break;
        case 'Clothes':
          selector = this.categoriesPagesCheckbox(2);
          break;
        case 'Home':
          selector = this.categoriesPagesCheckbox(3);
          break;
        case 'Home Accessories':
          selector = this.categoriesPagesCheckbox(4);
          break;
        case 'Men':
          selector = this.categoriesPagesCheckbox(5);
          break;
        case 'Root':
          selector = this.categoriesPagesCheckbox(6);
          break;
        case 'Stationnery':
          selector = this.categoriesPagesCheckbox(7);
          break;
        case 'Women':
          selector = this.categoriesPagesCheckbox(8);
          break;
        default:
        // Do nothing
      }
      if (selector !== '') {
        await page.setChecked(selector, true, {force: true});
      }
    }
  }

  /**
   * Select static pages
   * @param page {Page} Browser tab
   * @param staticPages {Array<string>} List of statistic pages
   * @return {Promise<void>}
   */
  async selectStaticPages(page: Page, staticPages: string[]): Promise<void> {
    /* eslint-disable no-restricted-syntax */
    for (const staticPage of staticPages) {
      let selector: string = '';

      switch (staticPage) {
        case 'Contact us':
          selector = this.staticContentCheckbox(0);
          break;
        case 'Sitemap':
          selector = this.staticContentCheckbox(1);
          break;
        case 'Stores':
          selector = this.staticContentCheckbox(2);
          break;
        case 'Login':
          selector = this.staticContentCheckbox(3);
          break;
        case 'Registration':
          selector = this.staticContentCheckbox(4);
          break;
        case 'My account':
          selector = this.staticContentCheckbox(5);
          break;
        default:
        // Do nothing
      }
      if (selector !== '') {
        await page.setChecked(selector, true, {force: true});
      }
    }
  }

  /**
   * Add custom pages
   * @param page {Page} Browser tab
   * @param customPages {LinkWidgetPage[]} List of custom pages
   * @return {Promise<void>}
   */
  async addCustomPages(page: Page, customPages: LinkWidgetPage[], id: number): Promise<void> {
    let j = 1;

    for (let i = id; i <= customPages.length; i++) {
      // Set english title and url
      await this.changeLanguage(page, 'en');
      await this.setValue(page, this.customTitleInput(i, 1), customPages[j - 1].name);
      await this.setValue(page, this.customUrlInput(i, 1), customPages[j - 1].url);
      // Set french title and url
      await this.changeLanguage(page, 'fr');
      await this.setValue(page, this.customTitleInput(i, 2), customPages[j - 1].name);
      await this.setValue(page, this.customUrlInput(i, 2), customPages[j - 1].url);
      // Add another custom page block
      await page.locator(this.addCustomBlockButton).click();
      /* eslint-disable no-plusplus */
      j++;
      /* eslint-disable-next-line no-plusplus */
    }
  }

  /**
   * Add linkWidget
   * @param page {Page} Browser tab
   * @param linkWidgetData {FakerLinkWidget}}
   * Data of link widget to set on link widget form
   * @return {Promise<string>}
   */
  async addLinkWidget(page: Page, linkWidgetData: FakerLinkWidget, idCustomPage: number = 1): Promise<string> {
    // Set name in languages
    await this.changeLanguage(page, 'en');
    await this.setValue(page, this.nameInput(1), linkWidgetData.name);
    await this.changeLanguage(page, 'fr');
    await this.setValue(page, this.nameInput(2), linkWidgetData.frName);
    // Choose hook
    await this.selectByVisibleText(page, this.hookSelect, linkWidgetData.hook.name);
    // select content pages
    await this.selectContentPages(page, linkWidgetData.contentPages);
    // select product pages
    await this.selectProductPages(page, linkWidgetData.productsPages);
    // select categories pages
    await this.selectCategoryPages(page, linkWidgetData.categoriesPages);
    // select static pages
    await this.selectStaticPages(page, linkWidgetData.staticPages);
    // Add custom pages
    await this.addCustomPages(page, linkWidgetData.customPages, idCustomPage);
    // Save
    return this.saveForm(page);
  }

  /**
   * Save form
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async saveForm(page: Page): Promise<string> {
    // Save
    await this.clickAndWaitForURL(page, this.saveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new CreateLinkBlockPage();
