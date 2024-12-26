import type {ModuleCatalogPageInterface} from '@interfaces/BO/modules/moduleCatalog';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): ModuleCatalogPageInterface {
  return require('@versions/1.7.6/pages/BO/modules/moduleCatalog');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();