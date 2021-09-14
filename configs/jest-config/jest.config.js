const { defaults } = require('jest-config')

module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/*/*.test.ts',
    '**/*/*.test.tsx',
    '**/*/*.spec.ts',
    '**/*/*.spec.tsx',
    '**/*/*.test.js',
    '**/*/*.test.jsx',
    '**/*/*.spec.js',
    '**/*/*.spec.jsx',
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  cacheDirectory: '.jest/.cache',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/(?:.+?)/node_modules/'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer'
  },
  moduleNameMapper: {
    '.+\\.(png|jpg|ttf|woff|woff2)$': 'file-loader'
  },
  transformIgnorePatterns: ['node_modules/(?!(@meta-*|@design-system))/'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 50,
      functions: 100,
      lines: 100
    }
  }
}
