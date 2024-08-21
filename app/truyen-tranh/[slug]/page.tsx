import { Col, Row } from "react-bootstrap";
import React from 'react';
import styles from '@/styles/pages/_detail.module.scss'
import title from '@/styles/components/_listChapterComic.module.scss'
import { ImUser } from 'react-icons/im'
import { AiOutlineWifi, AiFillStar, AiOutlineFileText, AiOutlineRight, AiOutlineClose, AiFillHeart } from 'react-icons/ai'
import { BsFillTagsFill } from 'react-icons/bs'
import { FaRegEye } from 'react-icons/fa'
import { DateUtil } from "@/utils/DateUtils";
import { DataUtils } from "@/utils/DataUtils";
import Skeleton from "react-loading-skeleton";
// import StarRatings from 'react-star-ratings';
import Image from "next/image";
import classNames from "classnames";
import BoxBarTabComic from "@/components/BoxBarTabComic";
import ButtonBase from "@/components/ButtonBase";
import ListChapterComic from "@/components/ListChapterComic";


export default function ComicDetail() {

  const mockName = 'Võ luyện đỉnh phong';
  const mockUrl = '/images/vo-luyen-dinh-phong.jpg';
  const isLoading = false;
  const mockDescription = 'Chào mừng độc giả thân mến của NetTruyen, Vô Địch Đốn Ngộ là bộ truyện tranh hấp dẫn mà NetTruyen muốn mang đến cho các bạn. Đây là bộ truyện tranh nằm trong thể loại Action, Action, Adventure, Manhua, Shounen, Supernatural, Fantasy trên website của chúng tôi. Như các bạn đã biết, NetTruyen là website đọc truyện tranh với số lượng user gần như lớn nhất tại Việt Nam, chúng tôi luôn cố gắng cập nhật và tìm kiếm những bộ truyện mới nhất với đầy đủ thể loại như: Truyện tranh ngôn tình, truyện tranh xuyên không, truyện manhua, đam mỹ, cổ đại... Đọc truyện tranh online tại website NetTruyen sẽ giúp chúng tôi có kinh phí duy trì và phát triển để xây dựng cộng đồng lớn mạnh hơn. Thể chất bình thường? Thần thông khó luyện? Đốn ngộ liền xong việc! Đối với Tiêu Vân mà nói, không có chuyện gì là đốn ngộ không giải quyết được, nếu có, đốn ngộ thêm một lần nữa là được! Chúc các bạn có những trải nghiệm thú vị và mới mẻ khi đọc bộ truyện Vô Địch Đốn Ngộ tại website NetTruyen. Chúng tôi rất sẵn lòng ghi nhận những đóng góp hoặc phản hồi về chất lượng webiste hay trải nghiệm của các bạn tại đây. Đừng ngại góp ý cho chúng tôi nhé!';

  return <>
    <Row>
      <Col lg={8} md={12} sm={12} className={styles.center_side}>
        {/*<NavLink name={mockName}/>*/}
        {/* <BreadCrumb text={mockName} /> */}
        <div className={styles.box_detail}>
          {isLoading ? <Skeleton count={1} height={22} /> : <h1 className={styles.title_detail}>{mockName}</h1>}
          <time className={styles.time_small}>[Cập nhật lúc: {DateUtil.formatDateSince(new Date())}]</time>
          <div className={styles.detail_info}>
            <Row>
              <Col sm={4} xs={12} className={styles.col_image}>
                {isLoading ?
                  <Skeleton count={1} height={272} width={198} />
                  : <Image
                    src={mockUrl}
                    width={198}
                    height={272}
                    alt={mockName}
                  />}

              </Col>
              <Col sm={8} xs={12} className={styles.col_info}>
                <Row className={styles.author}>
                  <Row>
                    <Col xs={4} >
                      <span className={styles.icon}><ImUser /><span>Tác giả</span></span>
                    </Col>
                    <Col xs={8}>
                      {isLoading ? <Skeleton height={15} />
                        : <span>Đang cập nhật</span>
                      }
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <span className={styles.icon}><AiOutlineWifi /><span>Tình trạng</span></span>
                    </Col>
                    <Col xs={8}>
                      {isLoading ? <Skeleton height={15} /> :
                        <span>{'Hoàn thành'}</span>
                      }
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <span className={styles.icon}><BsFillTagsFill /> <span>Thể loại</span></span>
                    </Col>
                    <Col xs={8}>
                      {isLoading ? <Skeleton height={15} /> :
                        <span className={styles.cate}>
                          <a>Action</a>
                        </span>
                      }
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4}>
                      <span className={styles.icon}><FaRegEye /> <span>Lượt xem </span></span>
                    </Col>
                    <Col xs={8}>
                      {isLoading ? <Skeleton height={15} /> :
                        <span>{DataUtils.formatNumber(10000)}</span>}
                    </Col>
                  </Row>
                </Row>
                <div className={styles.vote}>
                  <a href={"/#"}>
                    <span>{mockName}</span>
                  </a>
                  <span> &nbsp;
                    Xếp hạng: <span>5</span> / <span>5</span> - <span>{10}</span> lượt đánh giá
                  </span>
                </div>
                <div className={styles.rate}>
                  {/* <StarRatings
                        rating={10}
                        starRatedColor={'#F0A700'}
                        starHoverColor={'#F0A700'}
                        // changeRating={onChangeRating}
                        numberOfStars={5}
                        name={'rating'}
                        starDimension={'20px'}
                  /> */}
                </div>
                <div className={styles.follow}>
                  {/* {renderButtonFollow(comicDetail?.comic?._id)} */}
                  {/* <ButtonBase theme={'danger'} componentLeft={<AiOutlineClose/>} text={'Bỏ theo dõi'}/> */}
                  <ButtonBase componentLeft={<AiFillHeart />} theme={'secondary'} text={'Theo dõi'} />
                  {isLoading ? <Skeleton width={200} height={15} /> :
                    <div>
                      <span className={styles.totalFollow}>{DataUtils.formatNumber(1000)} Lượt theo dõi</span>
                    </div>
                  }
                </div>
                <div className={styles.button}>
                  <ButtonBase linkBtn href={`/truyen-tranh/xem/vo-luyen-dinh-phong`} theme={"warning"} text={"Đọc từ đầu"} />
                  <ButtonBase theme={"warning"} text={"Đọc mới nhất"} />
                  {/* {renderButtonReadContinue()} */}
                </div>
              </Col>
            </Row>
          </div>
          <div className={styles.content_info}>
            <h3 className={title.list_title}>
              <AiOutlineFileText />Nội dung
            </h3>
            {isLoading ? <Skeleton height={80} /> :
              <p className={classNames(styles.shortened)}>
                {mockDescription}
              </p>}
            <span className={styles.moreLink}>
              {/* <span>{viewMore ? 'Thu gọn' : 'Xem thêm'}<AiOutlineRight /></span> */}
              <span>{'Xem thêm'}<AiOutlineRight /></span>
            </span>
          </div>
          {isLoading ? <Skeleton height={300} /> :
            <ListChapterComic />
          }
        </div>
        {/* <Comment comic_id={comic?._id} /> */}
      </Col>
      <Col lg={4} md={12} sm={12}>
        <BoxBarTabComic />
      </Col>
    </Row>
  </>
}