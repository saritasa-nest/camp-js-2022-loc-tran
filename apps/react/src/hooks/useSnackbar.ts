import { AlertColor } from '@mui/material';
import { useState } from 'react';

import { MySnackbarConfig } from '../shared/components/MySnackbar/MySnackbar';

export const useSnackbar = () => {
  const [snackbarConfig, setSnackbarConfig] = useState<MySnackbarConfig>({
    open: false,
    message: '',
    severity: 'success',
    autoHideDuration: 3000,
  });
  const openSnackbar = (message: string, severity: AlertColor, duration: null | number = null) => {
    setSnackbarConfig(prev => ({
      ...prev,
      message,
      severity,
      autoHideDuration: duration,
      open: true,
    }));
  };
  const handleCloseSnackbar = () => {
    setSnackbarConfig(prev => ({
      ...prev,
      open: false,
    }));
  };

  return { snackbarConfig, openSnackbar, handleCloseSnackbar };
};
