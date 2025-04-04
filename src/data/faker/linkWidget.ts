import dataHooks from '@data/demo/hooks';
import type FakerHook from '@data/faker/hook';
import {LinkWidgetCreator, LinkWidgetPage} from '@data/types/linkWidget';
import {faker} from '@faker-js/faker';

/**
 * @class
 */
export default class FakerLinkWidget {
  public readonly name: string;

  public readonly frName: string;

  public readonly hook: FakerHook;

  public readonly contentPages: string[];

  public readonly productsPages: string[];

  public readonly categoriesPages: string[];

  public readonly staticPages: string[];

  public readonly customPages: LinkWidgetPage[];

  /**
   * Constructor for class HookData
   * @param valueToCreate {LinkWidgetCreator} Could be used to force the value of some members
   */
  constructor(valueToCreate: LinkWidgetCreator = {}) {
    /** @type {string} */
    this.name = valueToCreate.name || faker.word.noun();

    /** @type {string} */
    this.frName = valueToCreate.frName || this.name;

    /** @type {FakerHook} */
    this.hook = valueToCreate.hook || faker.helpers.arrayElement([dataHooks.displayFooter]);

    /** @type {string[]} */
    this.contentPages = valueToCreate.contentPages || [];

    /** @type {string[]} */
    this.productsPages = valueToCreate.productsPages || [];

    /** @type {string[]} */
    this.categoriesPages = valueToCreate.categoriesPages || [];

    /** @type {string[]} */
    this.staticPages = valueToCreate.staticPages || [];

    /** @type {LinkWidgetPage[]} */
    this.customPages = valueToCreate.customPages || [];
  }
}
