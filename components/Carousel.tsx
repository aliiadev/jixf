"use client";

import React, { useRef } from 'react';
import Slider from "react-slick";
import styles from '@/styles/components/_carousel.module.scss';
import ItemCarousel from "./ItemCarousel";
// import Skeleton from "react-loading-skeleton";

type SlickBtnType = {
  className?: string,
  onClick: () => void
}

const PreviousBtn = (props: SlickBtnType) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <button style={{ border: "none" }} className={styles.prev}> </button>
    </div>
  )
}

const NextBtn = (props: SlickBtnType) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <button className={styles.next} style={{ backgroundPosition: " -63px -33px", border: "none" }}></button>
    </div>
  )
}

const Carousel = ({
  title = '',
  arr = []
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    centerPadding: '0',
    slidesToShow: 6,
    centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 537,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const slidersRef = useRef<Slider | null>(null);

  const onNextOrPrevSlider = (isPrev: boolean) => {
    if (isPrev) {
      //@ts-ignore
      slidersRef.current.slickPrev()
    } else {
      //@ts-ignore
      slidersRef.current.slickNext()
    }
  }

  return (
    <div className={styles.main}>
      <h2>{title}</h2>
      <div className={styles.items_slide}>
        <PreviousBtn onClick={() => {
          onNextOrPrevSlider(true)
        }} />
        <NextBtn onClick={() => {
          onNextOrPrevSlider(false)
        }} />
        {/* {arr.length === 0 ?
                        <Skeleton
                            height={240}
                        /> :
                        
                    } */}

        <Slider
          ref={slidersRef}
          {...settings}
        >
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
          <ItemCarousel
            id={'1'}
            name={'Võ luyện đỉnh phong'}
            src={'/images/vo-luyen-dinh-phong.jpg'}
            lastChapter={''}
            updatedAt={new Date()}
          />
        </Slider>
      </div>
    </div>
  );
};


export default Carousel;
