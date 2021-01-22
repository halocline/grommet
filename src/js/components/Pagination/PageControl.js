import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Text } from '../Text';
import { StyledPaginationButton, StyledContainer } from './StyledPageControl';

export const PageControl = ({
  control,
  separator,
  size: sizeProp,
  ...rest
}) => {
  const theme = useContext(ThemeContext);

  return (
    <StyledContainer as="li" sizeProp={sizeProp}>
      {separator ? (
        <Text weight="bold">&#8230;</Text>
      ) : (
        <StyledPaginationButton
          a11yTitle={`Go to page ${control}`}
          fill
          kind={theme.pagination.button}
          label={control}
          sizeProp={sizeProp}
          {...rest}
        />
      )}
    </StyledContainer>
  );
};
