import React from 'react';
import styles from '@/styles/components/_wrapperComicHorizontal.module.scss'

type WrapperComicHorizontalType = React.PropsWithChildren<{
  onClick?(): void;
}>;

const WrapperComicHorizontal = ({ children, ...rest }: WrapperComicHorizontalType) => {
  return (
    <div className={styles.main} {...rest}>
      {children}
    </div>
  );
};

export default WrapperComicHorizontal;
