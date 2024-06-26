import { type PlopTypes } from '@turbo/gen'

export const generateRN = (answers: Parameters<PlopTypes.DynamicActionsFunction>[0]) => {
  if (!answers) return []

  const appName = answers.name
  const { storybook } = answers
  const appNameInLowerCase = answers.name.toLowerCase()
  const templateProps = { appNameInLowerCase, appName, storybook }

  const actions = [
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/.eslintrc.json`,
      templateFile: 'mobile-app/templates/eslint-config.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/app.json`,
      templateFile: 'mobile-app/templates/app-json.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/firebase.json`,
      templateFile: 'mobile-app/templates/firebase-json.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/babel.config.cjs`,
      templateFile: 'mobile-app/templates/babel-config.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/Gemfile`,
      templateFile: 'mobile-app/templates/Gemfile.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/index.js`,
      templateFile: 'mobile-app/templates/index.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/jest.config.ts`,
      templateFile: 'mobile-app/templates/jest-config.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/metro.config.cjs`,
      templateFile: 'mobile-app/templates/metro-config.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/package.json`,
      templateFile: 'mobile-app/templates/package-json.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/tsconfig.app.json`,
      templateFile: 'mobile-app/templates/tsconfig-app-json.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/tsconfig.json`,
      templateFile: 'mobile-app/templates/tsconfig-json.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/tsconfig.spec.json`,
      templateFile: 'mobile-app/templates/tsconfig-spec-json.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/src/app/index.tsx`,
      templateFile: 'mobile-app/templates/src/app/index.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/src/app/navigators/app-navigator.tsx`,
      templateFile: 'mobile-app/templates/src/app/navigators/app-navigator.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/src/screens/home.screen.tsx`,
      templateFile: 'mobile-app/templates/src/screens/home.screen.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/__tests__/app/App.test.tsx`,
      templateFile: 'mobile-app/templates/__tests__/app/App.test.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/__tests__/screens/home.spec.tsx`,
      templateFile: 'mobile-app/templates/__tests__/screens/home.spec.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/__tests__/testUtils/setupTests.ts`,
      templateFile: 'mobile-app/templates/__tests__/testUtils/setupTests.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/__tests__/__mocks__/react-native-config.ts`,
      templateFile: 'mobile-app/templates/__tests__/__mocks__/react-native-config.hbs'
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/.detoxrc.cjs`,
      templateFile: 'mobile-app/templates/detoxrc.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/detox.config.ts`,
      templateFile: 'mobile-app/templates/detox.config.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/e2e/tsconfig.json`,
      templateFile: 'mobile-app/templates/e2e/tsconfig-json.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/e2e/testUtils/setupTests.ts`,
      templateFile: 'mobile-app/templates/e2e/testUtils/setupTests.hbs',
      data: templateProps
    },
    {
      type: 'add',
      path: `{{ turbo.paths.root }}/apps/${appName}/e2e/start-up/starter.e2e.ts`,
      templateFile: 'mobile-app/templates/e2e/start-up/starter.e2e.hbs',
      data: templateProps
    }
  ]

  if (storybook) {
    actions.push(
      ...([
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/.ondevice/index.tsx`,
          templateFile: 'mobile-app/templates/.ondevice/index.hbs'
        },
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/.ondevice/main.ts`,
          templateFile: 'mobile-app/templates/.ondevice/main.hbs'
        },
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/.ondevice/preview.tsx`,
          templateFile: 'mobile-app/templates/.ondevice/preview.hbs'
        },
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/.storybook/main.tsx`,
          templateFile: 'mobile-app/templates/.ondevice/main.hbs'
        },
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/.storybook/preview.tsx`,
          templateFile: 'mobile-app/templates/.ondevice/preview.hbs'
        },
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/AppEntryPoint.tsx`,
          templateFile: 'mobile-app/templates/AppEntryPoint.hbs'
        },
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/src/components/button.tsx`,
          templateFile: 'mobile-app/templates/src/components/button.hbs'
        },
        {
          type: 'add',
          path: `{{ turbo.paths.root }}/apps/${appName}/src/stories/button.stories.tsx`,
          templateFile: 'mobile-app/templates/src/stories/button.stories.hbs'
        }
      ] satisfies PlopTypes.ActionType[])
    )
  }

  return actions
}
