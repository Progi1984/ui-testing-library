import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleBlockwishlistStatisticsPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    getNumProducts(page: Page): Promise<number>;
    getTextForEmptyTable(page: Page): Promise<string>;
    refreshStatistics(page: Page): Promise<void>;
}
