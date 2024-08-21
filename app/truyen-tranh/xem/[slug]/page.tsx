import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import styles from '@/styles/pages/_xem.module.scss'
import { BsInfoCircle } from "react-icons/bs"
import { FaHome, FaList } from "react-icons/fa"
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import Form from 'react-bootstrap/Form';
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import { DateUtil } from '@/utils/DateUtils';
import { DataUtils } from '@/utils/DataUtils';
import ButtonBase from '@/components/ButtonBase';

export default function ReadComic() {

  const mockName = 'Võ luyện đỉnh phong';
  const mockUrl = '/images/vo-luyen-dinh-phong.jpg';
  const chapterMock = 'Chapter 1';
  const isShowChapters = true;

  return <>
    <Row>
      <Col sm={12} className={styles.col}>
        <div className={styles.reading}>
          <Container>
            {/* <BreadCrumb text={[{ src: path.TRUYEN_TRANH + toSlug(mockName) + '-' + comic?._id, text: mockName }, { src: '/', text: chapterMock }]} /> */}
            <div className={styles.top}>
              <h1 className={styles.txtPrimary}>
                <a>{mockName} </a>-
                <span> {chapterMock}</span>
              </h1>
              <i>[cập nhật lúc: {DateUtil.formatDateSince(new Date())}]</i>
            </div>
            <div className={styles.read_control}>
              <div className={styles.alert}>
                <BsInfoCircle size={14} />&nbsp;
                <em>Sử dụng mũi tên trái (←) hoặc phải (→) để chuyển chapter</em>
              </div>
              <div className={`${isShowChapters && styles.nav}`}>
                <div className={styles.chapter_nav}>
                  <a><FaHome size={23} /></a>
                  <a><FaList size={23} /></a>
                  {/* styles.prev : styles.a_prev */}
                  <span className={styles.prev}>
                    <GoChevronLeft size={20} />
                  </span>
                  <Form.Select className={styles.select_chapter}>
                    {Array(50).fill(0).map((_, index) => (
                      <option key={index} value={index}>Chapter {index + 1}</option>
                    ))}
                  </Form.Select>
                  {/* styles.next : styles.a_next */}
                  <span className={styles.next}>
                    <GoChevronRight size={20} />
                  </span>
                  {/* {renderButtonFollow(comic?._id)} */}
                  {/*<ButtonBase text={'Theo dõi'} theme={"secondary"} componentLeft={<HiHeart/>}/>*/}
                </div>
              </div>
            </div>
          </Container>
          <div className={styles.box_read}>
            {/* {isLoadingGetDetailComic ?
              <div style={{ display: 'flex', justifyContent: 'center' }}><Skeleton count={1} inline width={750} height={2000} /></div> :
              chapters?.map((it) => (
                <div key={it?._id}>
                  {
                    it?.is_text ?
                      <div className={styles.wrapperTextReading}>
                        <div dangerouslySetInnerHTML={{ __html: it?.source }}></div>
                      </div>
                      :
                      <div className={styles.page_chapter}>
                        <img src={environmentConfig.BASE_URI + it?.source} alt={mockName + ' ' + chapterMock + it?.stt} />
                      </div>
                  }
                </div>
              ))
            } */}
            <div className={styles.page_chapter}>
              {Array(8).fill(0).map((_, index) => (
                <img key={index} src={`/images/mock_readcomic/${index}.jpg`} alt={mockName + ' ' + chapterMock} />
              ))}
            </div>
          </div>
          <Container>
            <div className={styles.top && styles.bottom}>
              <div className={styles.button_bottom}>
                <ButtonBase componentLeft={<GoChevronLeft />} text={"Chap trước"} theme={"danger"} />
                <ButtonBase componentRight={<GoChevronRight />} text={"Chap sau"} theme={'danger'} />
              </div>
              {/* <BreadCrumb text={[{ src: path.TRUYEN_TRANH + toSlug(mockName) + '-' + comic?._id, text: mockName }, { src: '/', text: chapterMock }]} /> */}
            </div>
            {/* <CommentChapter comic_id={comic?._id} chapter_id={chap?._id} /> */}
          </Container>
        </div>
      </Col>
    </Row>
  </>
}