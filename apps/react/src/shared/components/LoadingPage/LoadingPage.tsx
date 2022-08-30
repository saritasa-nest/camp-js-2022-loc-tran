import { Box, LinearProgress } from '@mui/material';
import { FC, memo } from 'react';

const LoadingPageComponent: FC = () => (
  <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>
);

export const LoadingPage = memo(LoadingPageComponent);
