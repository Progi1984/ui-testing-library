import {type FoEmailSubscriptionPageInterface} from '@interfaces/FO/emailSubscription';
import FOBasePage from '@pages/FO/FOBasePage';
import {type Page} from '@playwright/test';

/**
 * Email subscription page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class EmailSubscriptionPage extends FOBasePage implements FoEmailSubscriptionPageInterface {
  public readonly emailRegistrationSuccessMessage: string;

  private readonly cardBlock: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on email subscription page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    this.emailRegistrationSuccessMessage = 'Thank you for subscribing to our newsletter.';

    // Selectors
    this.cardBlock = '#content';
  }

  /**
   *
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getSuccessMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.cardBlock);
  }
}

module.exports = new EmailSubscriptionPage();
