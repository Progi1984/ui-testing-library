import {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {ViewOrderBasePage as ViewOrderBasePageVersion} from '@versions/develop/pages/BO/orders/view/viewOrderBasePage';
import type {Page} from 'playwright';

/**
 * View order base page, contains functions that can be used on view/edit order page
 * @class
 * @extends BOBasePage
 */
class ViewOrderBasePage extends ViewOrderBasePageVersion implements BOViewOrderBasePageInterface {
  /**
     * Modify the order status
     * @param page {Page} Browser tab
     * @param status {string} Status to edit
     * @returns {Promise<string>}
     */
  async modifyOrderStatus(page: Page, status: string): Promise<string> {
    const actualStatus = await this.getOrderStatus(page);

    if (status !== actualStatus) {
      await this.selectByVisibleText(page, this.orderStatusesSelect, status);
      await this.waitForSelectorAndClick(page, this.updateStatusButton);
      return this.getOrderStatus(page);
    }

    return actualStatus;
  }
}

module.exports = new ViewOrderBasePage();