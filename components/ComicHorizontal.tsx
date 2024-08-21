import React, { CSSProperties, ReactNode } from 'react';
import styles from '@/styles/components/_comicHorizontal.module.scss';
import { GrFormClose } from "react-icons/gr"
import Image from 'next/image';

type ComicHorizontalType = {
  onClick?(): void;
  name: string;
  img: string;
  miniTextLeft: string,
  miniTextRight?: ReactNode,
  thumbStyle?: CSSProperties,
  isDelete?: boolean,
  path: string
}

const ComicHorizontal = ({
  name,
  img,
  miniTextLeft,
  miniTextRight,
  isDelete = false,
  thumbStyle,
  path,
  onClick
}: ComicHorizontalType) => {

  const remove: ReactNode = <span onClick={onClick}><GrFormClose size={16} />Xóa</span>

  return (
    <div className={styles.comicHorizontal}>
      <a className={styles.thumb} style={thumbStyle} href={path} title={name}>
        <Image
          alt=''
          src={img}
          width={100}
          height={50}
        />
      </a>
      <div className={styles.wrapperContent}>
        <h3 className={styles.title}>
          <a className={styles.titleText} href={path}>{name.toLowerCase()}</a>
        </h3>
        <div className={styles.chapter}>
          <a className={styles.chapterTitle} href={path}>{miniTextLeft}</a>
          <span className={styles.time}>{isDelete ? remove : miniTextRight}</span>
        </div>
      </div>
    </div>
  );
};

export default ComicHorizontal;
