import React, { forwardRef, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Nav } from '../Nav';
import { PageControl } from './PageControl';

const StyledPaginationContainer = styled(Box)`
  ${props =>
    props.theme.pagination.container && props.theme.pagination.container.extend}
`;

const getPageIndices = (begin, end) => {
  const indices = [];
  for (let i = begin; i <= end; i += 1) {
    indices.push(i);
  }
  return indices;
};

const Pagination = forwardRef(
  (
    {
      a11yTitle,
      numItems,
      numEdgePages = 1, // number of pages at each edge of page indices
      // number of page controls in the middle
      numMiddlePages: numMiddlePagesProp = 3,
      onChange,
      page: pageProp,
      step = 10,
      ...rest
    },
    ref,
  ) => {
    const theme = useContext(ThemeContext) || defaultProps.theme;

    const [activePage, setActivePage] = useState(pageProp || 1);

    /* Calculate total number pages */
    const totalPages = Math.ceil(numItems / step);

    /* Define page indices to display */
    const beginPages = getPageIndices(1, Math.min(numEdgePages, totalPages));
    const endPages = getPageIndices(
      Math.max(totalPages - numEdgePages + 1, numEdgePages + 1),
      totalPages,
    );

    let numMiddlePages;
    if (numMiddlePagesProp < 1) {
      numMiddlePages = 1;
      console.warn(
        // eslint-disable-next-line max-len
        `Property "numMiddlePages" should not be < 1. One middle page button will be shown. Set "numMiddlePages" >= 1 to remove this warning.`,
      );
    } else numMiddlePages = numMiddlePagesProp;

    let startingMiddlePages;
    // odd
    if (numMiddlePages % 2)
      startingMiddlePages = Math.min(
        activePage - Math.floor(numMiddlePages / 2),
        totalPages - numEdgePages - numMiddlePages,
      );
    // even, cannot split equally around active page
    // let extra page appear on middlePagesEnd instead
    else
      startingMiddlePages = Math.min(
        activePage - Math.floor(numMiddlePages / 2) + 1,
        totalPages - numEdgePages - numMiddlePages,
      );

    const middlePagesBegin = Math.max(startingMiddlePages, numEdgePages + 2);
    const middlePagesEnd = Math.min(
      Math.max(
        activePage + Math.floor(numMiddlePages / 2),
        numEdgePages + numMiddlePages + 1,
      ),
      endPages.length > 0 ? endPages[0] - 2 : totalPages - 1,
    );

    const middlePages = getPageIndices(middlePagesBegin, middlePagesEnd);

    let beginFlex = [];
    if (middlePagesBegin > numEdgePages + 2) beginFlex = ['more-prev'];
    else if (numEdgePages + 1 < totalPages - numEdgePages)
      beginFlex = [numEdgePages + 1];

    let endFlex = [];
    if (middlePagesEnd < totalPages - numEdgePages - 1) endFlex = ['more-next'];
    else if (totalPages - numEdgePages > numEdgePages)
      endFlex = [totalPages - numEdgePages];

    const getItemIndices = nextPage => {
      const startIndex = step * (nextPage - 1);
      const endIndex = startIndex + step;
      return { startIndex, endIndex };
    };

    const handleClick = (event, nextPage) => {
      event.persist();
      const adjustedEvent = event;
      adjustedEvent.page = nextPage;

      // for controlled use cases, provide user with info on
      // what range of indices should be displayed given the active page
      const { startIndex, endIndex } = getItemIndices(nextPage);
      adjustedEvent.startIndex = startIndex;
      adjustedEvent.endIndex = endIndex;

      setActivePage(event.page);

      if (onChange) {
        onChange(event);
      }
    };

    const NextIcon = theme.pagination.icons.next;
    const PreviousIcon = theme.pagination.icons.previous;
    const iconColor = theme.pagination.icons.color;

    const navProps = {
      next: {
        // https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination
        'aria-disabled': activePage === totalPages ? 'true' : undefined,
        disabled: activePage === totalPages,
        icon: <NextIcon color={iconColor} />,
        onClick: event => {
          const nextPage = activePage + 1;
          handleClick(event, nextPage);
        },
        label: undefined,
      },
      previous: {
        'aria-disabled': activePage === 1 ? 'true' : undefined,
        disabled: activePage === 1,
        icon: <PreviousIcon color={iconColor} />,
        onClick: event => {
          const previousPage = activePage - 1;
          handleClick(event, previousPage);
        },
        label: undefined,
      },
    };

    let controls = [
      'previous',
      ...beginPages,
      ...beginFlex, // either "..." or single page to bridge start + middle
      ...middlePages,
      ...endFlex, // either "..." or single page to bridge middle + end
      ...endPages,
      'next',
    ];

    /* Set props for each page index. Each page index should display a
     * clickable index, control, or placeholder (e.g. ellipsis) indicating
     * more pages are available.
     */
    controls = controls.map(control => {
      return {
        active: control === activePage,
        a11yTitle:
          typeof control === 'number'
            ? `Go to page ${control}`
            : `Go to ${control} page`,
        // https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination
        // https://www.w3.org/TR/wai-aria-1.1/#aria-current
        'aria-current': control === activePage ? 'page' : undefined,
        control,
        onClick: event => {
          handleClick(event, control);
        },
        separator: control === 'more-prev' || control === 'more-next',
        ...navProps[control],
      };
    });

    return (
      <StyledPaginationContainer {...theme.pagination.container} {...rest}>
        <Nav a11yTitle={a11yTitle || 'Pagination Navigation'} ref={ref}>
          <Box as="ul" {...theme.pagination.controls}>
            {controls.map(control => (
              <PageControl key={control.a11yTitle} {...control} />
            ))}
          </Box>
        </Nav>
      </StyledPaginationContainer>
    );
  },
);

Pagination.displayName = 'Pagination';

let PaginationDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  PaginationDoc = require('./doc').doc(Pagination);
}
const PaginationWrapper = PaginationDoc || Pagination;

export { PaginationWrapper as Pagination };
