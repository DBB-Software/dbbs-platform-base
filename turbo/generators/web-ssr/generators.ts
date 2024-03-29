import { PlopTypes } from '@turbo/gen'

const generateApp = (answers: Parameters<PlopTypes.DynamicActionsFunction>[0]): PlopTypes.ActionType[] => {
  const appName = answers?.name
  const templateProps = { appName }

  const actions: PlopTypes.ActionType[] = [
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/tsconfig.json',
      templateFile: 'web-ssr/templates/tsconfig.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/tsconfig.spec.json',
      templateFile: 'web-ssr/templates/tsconfig.spec.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/tsconfig.app.json',
      templateFile: 'web-ssr/templates/tsconfig.app.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/jest.config.ts',
      templateFile: 'web-ssr/templates/jest-config.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/.eslintrc.json',
      templateFile: 'web-ssr/templates/eslint-config.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/next.config.js',
      templateFile: 'web-ssr/templates/next.config.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/next-env.d.ts',
      templateFile: 'web-ssr/templates/next-env.d.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/cypress.config.ts',
      templateFile: 'web-ssr/templates/cypress.config.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/src/app/layout.tsx',
      templateFile: 'web-ssr/templates/src/app/layout.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/src/app/page.tsx',
      templateFile: 'web-ssr/templates/src/app/page.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/src/app/ThemeRegistry.tsx',
      templateFile: 'web-ssr/templates/src/app/ThemeRegistry.hbs',
      transform(template) {
        return template.replace('STYLE_PLACEHOLDER', 'dangerouslySetInnerHTML={{\n\t\t\t\t\t__html: styles\n\t\t\t\t}}')
      }
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/cypress/tsconfig.json',
      templateFile: 'web-ssr/templates/cypress/tsconfig.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/cypress/e2e/home.cy.ts',
      templateFile: 'web-ssr/templates/cypress/e2e/home.cy.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/__tests__/index.spec.tsx',
      templateFile: 'web-ssr/templates/__tests__/index.spec.hbs'
    },
    {
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/__tests__/testUtils/setupTests.ts',
      templateFile: 'web-ssr/templates/__tests__/testUtils/setupTests.hbs'
    }
  ]

  if (answers.useSST) {
    actions.push(
      ...([
        {
          type: 'add',
          path: '{{ turbo.paths.root }}/apps/{{ name }}/sst.config.ts',
          templateFile: 'web-ssr/templates/sst/config.hbs',
          data: templateProps
        },
        {
          type: 'add',
          path: '{{ turbo.paths.root }}/apps/{{ name }}/sst-env.d.ts',
          templateFile: 'web-ssr/templates/sst/sst-types.hbs'
        },
        {
          type: 'add',
          path: '{{ turbo.paths.root }}/apps/{{ name }}/package.json',
          templateFile: 'web-ssr/templates/sst/package-json.hbs'
        }
      ] satisfies PlopTypes.ActionType[])
    )
  } else {
    actions.push({
      type: 'add',
      path: '{{ turbo.paths.root }}/apps/{{ name }}/package.json',
      templateFile: 'web-ssr/templates/package-json.hbs'
    })
  }

  return actions
}

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('web-ssr', {
    description: 'Create a new Next app',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of a new application?'
      },
      {
        type: 'confirm',
        name: 'useSST',
        message: 'Do you want to use SST for deployments? (y/n)'
      }
    ],
    actions: (answers) => generateApp(answers)
  })
}
