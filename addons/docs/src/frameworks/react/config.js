/* eslint-disable import/no-extraneous-dependencies */
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docsContainer: DocsContainer,
  docs: DocsPage,
});
