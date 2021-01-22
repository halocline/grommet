import React from 'react';

import { Box, Grommet, Pagination, Text } from 'grommet';
import { grommet } from 'grommet/themes';

export const Size = () => (
  <Grommet theme={grommet}>
    <Box align="start" pad="small" gap="medium">
      <Box>
        <Text>Default</Text>
        <Pagination numItems={237} />
      </Box>
      <Box>
        <Text>Small</Text>
        <Pagination numItems={237} size="small" />
      </Box>
      <Box>
        <Text>Medium</Text>
        <Pagination numItems={237} size="medium" />
      </Box>
      <Box>
        <Text>Large</Text>
        <Pagination numItems={237} size="large" />
      </Box>
    </Box>
  </Grommet>
);
