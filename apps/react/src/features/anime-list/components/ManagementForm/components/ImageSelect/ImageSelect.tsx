import { Input } from '@mui/material';
import { ChangeEvent, FC, memo, useState } from 'react';

import styles from './ImageSelect.module.css';

interface Props {

  /** Initial image. */
  readonly initialImage?: string;

  /** Change handler. */
  readonly onChange: (image: File) => void;
}

const ImageSelectComponent: FC<Props> = ({ initialImage, onChange }) => {
  const [imageUrl, setImageUrl] = useState<string>(initialImage ?? '');
  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
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
      onChange(file);
    }
  };
  return (
    <div className={styles['selector']}>
      {imageUrl && (
        <img className={styles['selector__image']} src={imageUrl} alt="upload poster" />
      )}
      <Input className={styles['selector__input']} type='file' onChange={onImageChange} />
    </div>
  );
};

export const ImageSelect = memo(ImageSelectComponent);
