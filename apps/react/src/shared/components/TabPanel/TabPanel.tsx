import { Typography } from '@mui/material';
import { memo } from 'react';

interface TabPanelProps {

  /** Tab panel children. */
  readonly children?: React.ReactNode;

  /** Index of tab panel in tabs. */
  readonly index: number;

  /** Value of tab panel. */
  readonly value: number;
}

const TabPanelComponent = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography component={'span'}>{children}</Typography>
      )}
    </div>
  );
};

export const TabPanel = memo(TabPanelComponent);
