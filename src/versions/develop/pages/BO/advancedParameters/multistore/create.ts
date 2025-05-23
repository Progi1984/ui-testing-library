import type FakerShopGroup from '@data/faker/shopGroup';
import {type BOMultistoreGroupCreatePageInterface} from '@interfaces/BO/advancedParameters/multistore/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add shop group page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOMultistoreGroupCreatePage extends BOBasePage implements BOMultistoreGroupCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly shopGroupForm: string;

  private readonly nameInput: string;

  private readonly shareCustomersToggleInput: (toggle: string) => string;

  private readonly shareAvailableQuantitiesToggleLabel: (toggle: string) => string;

  private readonly statusToggleLabel: (toggle: string) => string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add shop page page
   */
  constructor() {
    super();

    this.pageTitleCreate = 'Multistore > Add new •';
    this.pageTitleEdit = 'Multistore > Edit:';

    // Selectors
    this.shopGroupForm = '#shop_group_form';
    this.nameInput = '#name';
    this.shareCustomersToggleInput = (toggle: string) => `${this.shopGroupForm} #share_customer_${toggle}`;
    this.shareAvailableQuantitiesToggleLabel = (toggle: string) => `${this.shopGroupForm} #share_customer_${toggle}`;
    this.statusToggleLabel = (toggle: string) => `${this.shopGroupForm} #share_customer_${toggle}`;
    this.saveButton = '#shop_group_form_submit_btn';
  }

  /*
  Methods
   */

  /**
   * Fill form for add/edit shop group
   * @param page {Page} Browser tab
   * @param shopGroupData {FakerShopGroup} Data to set on add/edit shop group form
   * @returns {Promise<string>}
   */
  async setShopGroup(page: Page, shopGroupData: FakerShopGroup): Promise<string> {
    await this.setValue(page, this.nameInput, shopGroupData.name);

    await this.setChecked(page, this.shareCustomersToggleInput(shopGroupData.shareCustomer ? 'on' : 'off'));
    await this.setChecked(
      page,
      this.shareAvailableQuantitiesToggleLabel(shopGroupData.shareAvailableQuantities ? 'on' : 'off'),
    );
    await this.setChecked(page, this.statusToggleLabel(shopGroupData.status ? 'on' : 'off'));

    await this.clickAndWaitForURL(page, this.saveButton, 'load', 60000);
    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new BOMultistoreGroupCreatePage();
