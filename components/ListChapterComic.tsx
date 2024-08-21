"use client";

import React, { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { Col, Row } from "react-bootstrap";
import styles from '@/styles/components/_listChapterComic.module.scss'
import { DataUtils } from '@/utils/DataUtils';
import { DateUtil } from '@/utils/DateUtils';
import classNames from 'classnames';


const ListChapterComic = () => {

  const [viewMore, setViewMore] = useState(false);

  return (
    <div>
      <h2 className={styles.list_title}>
        <AiOutlineUnorderedList />  Danh sách chương
      </h2>
      <Row className={styles.heading}>
        <Col xs={5} className={styles.no_warp}>Số chương</Col>
        <Col xs={4} className={classNames(styles.no_warp, styles.center)}>Cập nhật</Col>
        <Col xs={3} className={classNames(styles.no_warp, styles.center)}>Lượt xem</Col>
      </Row>
      <div className={styles.box_chapter}>
        {Array(12).fill(0).map((_, index) => (
          <Row className={styles.lst_chapter} key={index}>
            <Col xs={5} className={styles.chapter}><a>Chapter {index + 1}</a></Col>
            <Col xs={4} className={styles.update_at}>{DateUtil.formatDateSince(new Date())}</Col>
            <Col xs={3} className={styles.view}>{DataUtils.formatNumber(1000022)}</Col>
          </Row>
        ))}
        <span onClick={() => setViewMore(!viewMore)} className={styles.view_more}>
          <span className={styles.button}>{viewMore ? <TiMinus size={19} /> : <TiPlus size={19} />}
            {viewMore ? 'Thu gọn' : 'Xem thêm'}
          </span>
        </span>
      </div>
    </div>
  );
};

export default ListChapterComic;
