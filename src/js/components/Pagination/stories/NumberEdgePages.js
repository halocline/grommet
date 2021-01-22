import React from 'react';

import { Box, Grommet, Pagination, Text } from 'grommet';
import { grommet } from 'grommet/themes';

export const NumberEdgePages = () => (
  <Grommet theme={grommet}>
    <Box pad="small" gap="medium">
      <Box>
        <Text>numberEdgePages = 2 (number of pages on start/end)</Text>
        <Pagination numberItems={237} page={10} numberEdgePages={2} />
      </Box>
      <Box>
        <Text>numberEdgePages = 0</Text>
        <Pagination numberItems={237} page={10} numberEdgePages={0} />
      </Box>
    </Box>
  </Grommet>
);
