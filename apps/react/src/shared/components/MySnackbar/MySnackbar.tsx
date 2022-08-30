import { Alert, AlertColor, Button, IconButton, Snackbar } from '@mui/material';
import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ReactDOM from 'react-dom';

const portal = document.getElementById('root-portal');

export type MySnackbarConfig = Omit<Props, 'onClose'>;

interface Props {

  /** Snackbar message. */
  readonly message: string;

  /** Handle close snackbar. */
  readonly onClose: () => void;

  /** Snackbar auto hide after. */
  readonly autoHideDuration?: number | null;

  /** Snackbar color. */
  readonly severity?: AlertColor;
}

const SnackbarComponent: FC<Props> = (props: Props) => {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    props.onClose();
  };
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  const snackbar = (
    <Snackbar
      open={true}
      autoHideDuration={props.autoHideDuration}
      onClose={handleClose}
      action={action}
    >
      <Alert
        onClose={handleClose}
        severity={props.severity}
        sx={{ width: '100%' }}
      >
        {props.message}
      </Alert>
    </Snackbar>
  );
  if (portal === null) {
    throw new Error('HTML Portal not found!');
  }
  return ReactDOM.createPortal(snackbar, portal);
};

export const MySnackbar = SnackbarComponent;
