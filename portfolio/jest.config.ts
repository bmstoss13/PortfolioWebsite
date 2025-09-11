import type { Config } from 'jest';
import nextJest from 'next/jest.js';
import { pathsToModuleNameMapper } from 'ts-jest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert the current file URL to a file path to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the tsconfig.json file and parse its content
const tsconfigPath = path.resolve(__dirname, './tsconfig.json');
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
const { compilerOptions } = tsconfig;

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  coverageProvider: "v8",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
  },
};

export default createJestConfig(customJestConfig);