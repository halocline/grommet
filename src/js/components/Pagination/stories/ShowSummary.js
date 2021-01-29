import React, { useEffect, useState } from 'react';

import { Box, Grommet, Pagination, Select, Text, ThemeContext } from 'grommet';
import { grommet } from 'grommet/themes';

export const ShowSummary = () => {
  const numberItems = 237;
  const [indices, setIndices] = useState([0, 10]);
  const [step, setStep] = useState(10);
  const [activePage, setActivePage] = useState(1);

  const handleChange = ({ page, startIndex, endIndex }) => {
    setActivePage(page);
    setIndices([startIndex, Math.min(endIndex, numberItems)]);
  };

  useEffect(() => {
    const itemsBeginIndex = step * (activePage - 1);
    const itemsEndIndex = Math.min(itemsBeginIndex + step, numberItems);
    setIndices([itemsBeginIndex, itemsEndIndex]);
  }, [step, activePage]);

  return (
    <Grommet theme={grommet}>
      <Box align="start" pad="small" gap="medium">
        <Box gap="small" fill="horizontal">
          <Text weight="bold">showSummary = true</Text>
          <Pagination numberItems={numberItems} showSummary />
        </Box>
        <ThemeContext.Extend
          value={{
            pagination: {
              nav: {
                direction: 'row',
                flex: true,
                justify: 'end',
              },
            },
          }}
        >
          <Box gap="small" fill="horizontal">
            <Text weight="bold">Custom showSummary</Text>
            <Pagination
              numberItems={numberItems}
              onChange={handleChange}
              step={step}
              showSummary={
                <>
                  <Box flex>
                    <Text>
                      Showing{' '}
                      <Text weight="bold">
                        {indices[0] + 1} - {indices[1]}
                      </Text>{' '}
                      of {numberItems} items
                    </Text>
                  </Box>
                  <Box direction="row" align="center" gap="small">
                    <Text>Show</Text>
                    <Box width="xsmall">
                      <Select
                        options={[10, 25, 50]}
                        value={step}
                        onChange={({ option }) => setStep(option)}
                      />
                    </Box>
                    <Text>items per page</Text>
                  </Box>
                </>
              }
            />
          </Box>
        </ThemeContext.Extend>
      </Box>
    </Grommet>
  );
};
