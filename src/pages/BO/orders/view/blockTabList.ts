import type {BOOrdersViewBlockTabListPageInterface} from '@interfaces/BO/orders/view/blockTabList';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrdersViewBlockTabListPageInterface {
  return require('@versions/develop/pages/BO/orders/view/blockTabList');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
