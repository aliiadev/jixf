import React, { ReactNode } from 'react';
import styles from "@/styles/components/_buttonBase.module.scss";

type ButtonBaseType = {
  theme: string,
  text?: string,
  componentLeft?: ReactNode,
  componentRight?: ReactNode,
  isLoading?: boolean,
  onClick?(): void,
  disable?: boolean,
  linkBtn?: boolean,
  href?: string
}

const ButtonBase = ({
  theme = 'primary',
  text,
  componentLeft,
  componentRight,
  isLoading = false,
  onClick,
  disable,
  linkBtn,
  ...rest
}: ButtonBaseType) => {

  if (isLoading === true) {
    text = 'loading';
    disable = true
  }

  if (linkBtn) {
    return (
      <a
        onClick={onClick}
        className={`${styles[theme]} ${styles.btn} ${disable ? styles.disable : ''}`}
        {...rest}
      >
        {componentLeft} {text} {componentRight}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`${styles[theme]} ${styles.btn} ${disable ? styles.disable : ''}`}
      {...rest}
    >
      {componentLeft} {text} {componentRight}
    </button>
  );
};

export default ButtonBase;
