// import React from 'react';
// import 'jest-styled-components';
// import 'jest-axe/extend-expect';
// import 'regenerator-runtime/runtime';

import { cleanup } from '@testing-library/react';
// import { axe } from 'jest-axe';
// import { Grommet } from '../../Grommet';
// import { Pagination } from '..';

describe('Pagination', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', () => {});

  test('should display the correct last page based on items length and step', () => {});

  test('should render correct numEdgePages', () => {});

  test('should render correct numMiddlePages', () => {});

  test('should render showFirst button', () => {});

  test('should render showLast button', () => {});

  test('should show correct page when "show" is number ', () => {});

  test('should show correct page when "show" is { index: # }', () => {});

  test('should show correct page when "show" is { page: # }', () => {});

  test('should render children', () => {});

  test('should render correct num items per page (step)', () => {});

  test(`should allow user to control page via state with page + 
  onChange`, () => {});
});
