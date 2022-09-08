import { Input } from '@mui/material';
import { ChangeEvent, FC, memo, useState } from 'react';

import styles from './ImageSelect.module.css';

interface Props {

  /** Initial image. */
  readonly initialImage?: string;

  /** Change handler. */
  readonly handleChange: (image: File) => void;
}

const ImageSelectComponent: FC<Props> = ({ initialImage, handleChange }) => {
  const [imageUrl, setImageUrl] = useState<string>(initialImage ?? '');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return;
    }
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (fileEvent: ProgressEvent<FileReader>) => {
      setImageUrl(fileEvent.target?.result?.toString() ?? '');
    };
    if (file) {
      reader.readAsDataURL(file);
      handleChange(file);
    }
  };
  return (
    <div className={styles['selector']}>
      {imageUrl && (
        <img className={styles['selector__image']} src={imageUrl} />
      )}
      <Input className={styles['selector__input']} type='file' onChange={onChange} />
    </div>
  );
};

export const ImageSelect = memo(ImageSelectComponent);
