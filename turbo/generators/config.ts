import { PlopTypes } from '@turbo/gen'
import webSpaGenerators from './web-spa/generators'
import webSsrGenerators from './web-ssr/generators'
import serverApiGenerators from './server-api/generators'
import serverlessApiGenerators from './serverless-api/generators'
import serverlessServiceGenerators from './serverless-service/generators'
import mobileAppGenerators from './mobile-app/generators'
import storybookGenerators from './storybook/generators'
import helpers from './hbsHelpers'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  webSpaGenerators(plop)
  webSsrGenerators(plop)
  serverlessApiGenerators(plop)
  serverApiGenerators(plop)
  serverlessServiceGenerators(plop)
  mobileAppGenerators(plop)
  storybookGenerators(plop)
  helpers(plop)
}
