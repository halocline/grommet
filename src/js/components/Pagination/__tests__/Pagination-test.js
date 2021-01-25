import React from 'react';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { cleanup, render } from '@testing-library/react';
// import { axe } from 'jest-axe';
import { fireEvent } from '@testing-library/dom';

import { Grommet } from '../../Grommet';
import { Pagination } from '..';

const NUM_ITEMS = 237;
const STEP = 10;
const data = [];
for (let i = 0; i < 95; i += 1) {
  data.push(`entry-${i}`);
}

describe('Pagination', () => {
  afterEach(cleanup);

  // test('should have no accessibility violations', async () => {
  //   const { container } = render(
  //     <Grommet>
  //       <Pagination numberItems={NUM_ITEMS} />
  //     </Grommet>,
  //   );

  //   const results = await axe(container);
  //   expect(results).toHaveNoViolations();
  // });

  test(`should display the correct last page based on items length 
  and step`, () => {
    const { container, getByText } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} />
      </Grommet>,
    );

    // default step is 10
    const expectedPageCount = Math.ceil(NUM_ITEMS / 10);
    const lastPageButton = getByText(expectedPageCount.toString());

    expect(lastPageButton).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render correct numberEdgePages', () => {
    const { container } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} numberEdgePages={3} page={10} />
      </Grommet>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render correct numberMiddlePages when odd', () => {
    const { container } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} numberMiddlePages={5} page={10} />
      </Grommet>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render correct numberMiddlePages when even', () => {
    const { container } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} numberMiddlePages={4} page={10} />
      </Grommet>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should show correct page when "page" is provided ', () => {});

  test(`should disable previous and next controls when numberItems 
  < step`, () => {
    const { container } = render(
      <Grommet>
        <Pagination numberItems={10} step={20} />
      </Grommet>,
    );

    const previousButtonDisabled = container
      .querySelector(`[aria-label="Go to previous page"]`)
      .hasAttribute('disabled');
    const nextButtonDisabled = container
      .querySelector(`[aria-label="Go to next page"]`)
      .hasAttribute('disabled');

    expect(previousButtonDisabled).toBeTruthy();
    expect(nextButtonDisabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should disable previous and next controls when numberItems 
  === step`, () => {
    const { container } = render(
      <Grommet>
        <Pagination numberItems={20} step={20} />
      </Grommet>,
    );

    const previousButtonDisabled = container
      .querySelector(`[aria-label="Go to previous page"]`)
      .hasAttribute('disabled');
    const nextButtonDisabled = container
      .querySelector(`[aria-label="Go to next page"]`)
      .hasAttribute('disabled');

    expect(previousButtonDisabled).toBeTruthy();
    expect(nextButtonDisabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should disable previous and next controls when numberItems 
  === 0`, () => {
    const { container } = render(
      <Grommet>
        <Pagination numberItems={0} />
      </Grommet>,
    );

    const previousButtonDisabled = container
      .querySelector(`[aria-label="Go to previous page"]`)
      .hasAttribute('disabled');
    const nextButtonDisabled = container
      .querySelector(`[aria-label="Go to next page"]`)
      .hasAttribute('disabled');

    expect(previousButtonDisabled).toBeTruthy();
    expect(nextButtonDisabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should set page to last page if page prop > total possible 
  pages`, () => {
    const numberItems = 500;
    const step = 50;
    const { container, getByText } = render(
      <Grommet>
        <Pagination numberItems={numberItems} step={step} page={700} />
      </Grommet>,
    );

    const expectedPage = `${Math.ceil(numberItems / step)}`;
    fireEvent.click(getByText(expectedPage));
    const activePage = container.querySelector(`[aria-current="page"]`)
      .innerHTML;

    expect(activePage).toEqual(expectedPage);
    expect(container.firstChild).toMatchSnapshot();
  });

  // how to not hard code so many values
  test(`should allow user to control page via state with page + 
  onChange`, () => {
    const onChange = jest.fn();
    const { container, getByLabelText } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} page={1} onChange={onChange} />
      </Grommet>,
    );

    const nextPageButton = getByLabelText('Go to next page');
    fireEvent.click(nextPageButton);

    // step is 10 by default, so startIndex/endIndex are based on that
    expect(onChange).toBeCalledWith(
      expect.objectContaining({ page: 2, startIndex: 10, endIndex: 20 }),
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should display next page of results when "next" is 
  selected`, () => {
    const onChange = jest.fn();
    const { container, getByLabelText } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} onChange={onChange} />
      </Grommet>,
    );

    const nextPageButton = getByLabelText('Go to next page');

    // mouse click
    fireEvent.click(nextPageButton);
    expect(onChange).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();

    // keyboard enter
    fireEvent.keyDown(nextPageButton, {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    });
    expect(onChange).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should display previous page of results when "previous" is 
  selected`, () => {
    const onChange = jest.fn();
    const { container, getByLabelText } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} page={3} onChange={onChange} />
      </Grommet>,
    );

    const previousPageButton = getByLabelText('Go to previous page');

    // mouse click
    fireEvent.click(previousPageButton);
    expect(onChange).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();

    // keyboard enter
    fireEvent.keyDown(previousPageButton, {
      key: 'Enter',
      keyCode: 13,
      which: 13,
    });
    expect(onChange).toBeCalledTimes(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should display page 'n' of results when "page n" is 
  selected`, () => {
    const { container, getByText } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} />
      </Grommet>,
    );

    const desiredPage = '2';
    fireEvent.click(getByText(desiredPage));
    const activePage = container.querySelector(`[aria-current="page"]`)
      .innerHTML;

    expect(activePage).toEqual(desiredPage);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should disable previous button if on first page`, () => {
    const { container } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} />
      </Grommet>,
    );

    const previousButtonDisabled = container
      .querySelector(`[aria-label="Go to previous page"]`)
      .hasAttribute('disabled');

    expect(previousButtonDisabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should disable next button if on last page`, () => {
    const lastPage = Math.ceil(NUM_ITEMS / STEP);
    const { container } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} page={lastPage} />
      </Grommet>,
    );

    const nextButtonDisabled = container
      .querySelector(`[aria-label="Go to next page"]`)
      .hasAttribute('disabled');

    expect(nextButtonDisabled).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should set numberMiddlePages = 1 if user provides value < 1`, () => {
    console.warn = jest.fn();
    const { container } = render(
      <Grommet>
        <Pagination numberItems={NUM_ITEMS} numberMiddlePages={0} />
      </Grommet>,
    );

    // why two?
    expect(console.warn).toHaveBeenCalledTimes(2);
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`should apply custom theme`, () => {
    const customTheme = {
      pagination: {
        container: {
          extend: `background: red;`,
        },
      },
    };

    const { container } = render(
      <Grommet theme={customTheme}>
        <Pagination numberItems={NUM_ITEMS} />
      </Grommet>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});