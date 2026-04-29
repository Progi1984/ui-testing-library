import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOWallOfFamePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  getContributionPercentage(page: Page, contributor: 'PrestaShop' | 'Community'): Promise<number>;
}
