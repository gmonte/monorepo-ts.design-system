
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:mdx/recommended"
  ],
  ignorePatterns: ['.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'import-helpers',
    '@typescript-eslint'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import-helpers/order-imports': [
      'error',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^redux/',
          '/^lodash/',
          'module',
          '/^@design-system/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true
        }
      }
    ],
    'prettier/prettier': 'off',
    semi: ['error', 'never'],
    'template-curly-spacing': [2, 'always'],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.mdx'] }],
    'react/jsx-indent': [2, 2],
    'react/jsx-no-duplicate-props': [
      2,
      {
        ignoreCase: false
      }
    ],
    'comma-dangle': 0,
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],

    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: {}
    },
    react: {
      version: 'detect'
    },
    'mdx/code-blocks': false, // optional, if you want to disable language mapper, set it to `false`
    'mdx/language-mapper': {} // if you want to override the default language mapper inside, you can provide your own
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars-experimental': 'error'
      }
    },
    {
      files: ['*.mdx'],
      extends: ["plugin:mdx/overrides"],
      rules: {
        'react/jsx-indent': [0, 0],
      }
    },
    {
      files: '**/*.{md,mdx}/**',
      extends: 'plugin:mdx/code-blocks'
    }
  ]
}
