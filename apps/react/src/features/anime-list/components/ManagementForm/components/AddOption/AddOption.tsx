import { Fab } from '@mui/material';
import { PlusOneOutlined } from '@mui/icons-material';
import { FC, memo } from 'react';

interface Props {

  /** New option's name. */
  readonly optionName: string;

  /** Add new option. */
  readonly onAddOption: (name: string) => void;
}

const AddOptionComponent: FC<Props> = ({ optionName, onAddOption }) => (
  <Fab variant='extended' onClick={() => onAddOption(optionName)}>
    <PlusOneOutlined />
    Add new: {optionName}
  </Fab>
);

export const AddOption = memo(AddOptionComponent);
