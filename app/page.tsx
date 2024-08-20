import Carousel from "@/components/Carousel";
import { Col, Pagination, Row } from "react-bootstrap";
import styles from "@/styles/pages/_home.module.scss";
import { FcFilledFilter } from "react-icons/fc";
import Story from "@/components/Story";

export default function Home() {
  return (
    <>
      <Carousel arr={[]} title={'Truyện đề cử >'} />
      <Row style={{ padding: '16px 0' }}>
        <Col md={12} lg={8}>
          <div className={styles.items}>
            <div className={`relative ${styles.relative}`}>
              <h1 className={styles.page_title}>{'Truyện mới cập nhật >'}</h1>
              <a>
                <FcFilledFilter size={20} />
              </a>
            </div>
            <div className={styles.container}>
              <Row>
                {/* {isLoadingGetComicNewUpdate ?
                  <SkeletonLoading /> :
                  renderListComicNewUpdate(listComicNewUpdate?.results)
                } */}
                {
                  Array(36).fill(0).map((_, index) => (
                    <Story
                      key={index}
                      id={'1'}
                      hot={true}
                      listChapter={[]}
                      name={''}
                      img={'/images/vo-luyen-dinh-phong.jpg'}
                    />
                  ))
                }
              </Row>
            </div>
          </div>
          <Row className={'m-2'}>
            <Col xs={12} className={'d-flex justify-content-center'}>
              <Pagination />
            </Col>

          </Row>
        </Col>
        <Col md={12} lg={4}>
          {/* {visited?.length > 0 && (
            <BoxBar style={{ marginBottom: 16 }} title={"Lịch sử đọc truyện"} src={path.HISTORY}>
              {visited?.map((it) => (
                <WrapperComicHorizontal key={it?._id}>
                  <ComicHorizontal
                    path={path.XEM + it?.url}
                    onclick={() => handleDelete(it?._id)}
                    name={it?.name}
                    img={it?.image}
                    isDelete={true}
                    miniTextLeft={'Đọc tiếp ' + it?.chapterName}
                  />
                </WrapperComicHorizontal>
              ))}
            </BoxBar>
          )}
          <BoxBarComicFollows />
          <BoxBarTabComic /> */}
        </Col>
      </Row>
    </>
  );
}
