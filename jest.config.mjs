/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",

  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },

  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.png$': '<rootDir>/__mocks__/fileMock.js',
  },

  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/assets/react/svg/'
  ],

  testEnvironment: 'jest-environment-jsdom', // Explicitly specify the environment
  testEnvironmentOptions: {}, // Ensure this field is present even if it's empty
};

export default config;
