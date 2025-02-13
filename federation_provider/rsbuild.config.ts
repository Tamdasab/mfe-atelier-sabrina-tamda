import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'header',
      exposes: {
        './button': './src/button.tsx',
      },
      shared: {
        react: {
          eager: true,
          singleton: true,
          requiredVersion: '~19.0.0'
        },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});