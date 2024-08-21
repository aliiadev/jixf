"use client";

import React, { useState } from 'react';
import styles from "../styles/components/_boxBarTabComic.module.scss";
import { Col, Row } from "react-bootstrap";
import { AiOutlineEye } from 'react-icons/ai';
import WrapperComicHorizontal from './WrapperComicHorizontal';
import ComicHorizontal from './ComicHorizontal';
import { DataUtils } from '@/utils/DataUtils'

const tabArr: string[] = ['Top tháng', 'Top tuần', 'Top ngày']

const views = {
  '0': 'view_month',
  '1': 'view_week',
  '2': 'view_day',
}

const BoxBarTabComic = () => { // Hiển thị top tháng tuần ngày
  const [topActive, setTopActive] = useState<number>(0);

  const tab = (index: number) => {
    setTopActive(index);
  };

  return (
    <div className={styles.boxBarTabComic}>
      <Row className={styles.tabNav}>
        {tabArr.map((item, index) => (
          <Col
            key={index}
            className={topActive === index ? styles.active : styles.navItem}
            onClick={() => tab(index)}>
            <a className={styles.navLink}>
              {item}
            </a>
          </Col>
        ))}
      </Row>
      <div className={styles.baxBarContent}>
        {
          Array(7).fill(0).map((_, index) => (
            <WrapperComicHorizontal key={index}>
              <span className={`${styles.txtRank} ${styles['top' + index]}`}>0{index + 1}</span>
              <ComicHorizontal
                path={index + ''}
                thumbStyle={{ width: 55, height: 45 }}
                img={'/images/vo-luyen-dinh-phong.jpg'}
                name={'Võ luyện đỉnh phong'}
                miniTextRight={
                  <span>
                    <AiOutlineEye />
                    {DataUtils.totalNumberFormat(10000)}
                  </span>
                }
                miniTextLeft={'Chapter...'}
              />
            </WrapperComicHorizontal>
          ))
        }
      </div>
    </div>
  );
};

export default BoxBarTabComic;
