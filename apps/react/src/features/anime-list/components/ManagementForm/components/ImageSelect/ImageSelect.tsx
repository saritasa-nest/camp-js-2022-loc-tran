import { Input } from '@mui/material';
import { ChangeEvent, FC, memo, useState } from 'react';

import styles from './ImageSelect.module.css';

const ImageSelectComponent: FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {
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
    }
  };
  return (
    <div className={styles['selector']}>
      {imageUrl && (
        <img className={styles['selector__image']} src={imageUrl} />
      )}
      <Input className={styles['selector__input']} type='file' onChange={handleUpload} />
    </div>
  );
};

export const ImageSelect = memo(ImageSelectComponent);
