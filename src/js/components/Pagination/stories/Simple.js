import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Grommet, Text } from 'grommet';
// import { grommet } from 'grommet/themes';
import { hpe } from 'grommet-theme-hpe';
import { Pagination } from '../Pagination';

const Simple = () => {
  const [page, setPage] = useState(1);

  const handleChange = event => {
    setPage(event.page);
  };

  return (
    <Grommet theme={hpe}>
      <Box pad="small" gap="medium">
        <Box>
          <Text>Default</Text>
          <Pagination numItems={237} />
        </Box>
        <Box>
          <Text>page = 10</Text>
          <Pagination numItems={237} show={10} />
        </Box>
        <Box>
          <Text>numEdgePages = 2 (number of pages on start/end)</Text>
          <Pagination numItems={237} show={10} numEdgePages={2} />
        </Box>
        <Box>
          <Text>
            numMiddlePages = 2 (number of pages to left/right of middle page)
          </Text>
          <Pagination numItems={237} show={10} numMiddlePages={2} />
        </Box>
        <Box>
          <Text>numEdgePages = 0</Text>
          <Pagination numItems={237} show={10} numEdgePages={0} />
        </Box>
        <Box>
          <Text>Box Props</Text>
          <Pagination
            numItems={237}
            show={2}
            background="background-contrast"
            align="center"
            pad="medium"
            margin="small"
          />
        </Box>
        <Box>
          <Text>Controlled</Text>
          <Pagination numItems={237} page={page} onChange={handleChange} />
        </Box>
      </Box>
    </Grommet>
  );
};

storiesOf('Pagination', module).add('Simple', () => <Simple />);
