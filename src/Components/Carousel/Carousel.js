import React from "react";
import styles from "./Carousel.module.css";
import Carousel, { consts } from "react-elastic-carousel";
import Slider from "react-slick";
import NavArrow from "../../Assets/images/Arrow-next.png";
import NavArrowBack from "../../Assets/images/arrow-prev.png";

export class CustomCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1, itemsToScroll: 1 },
      { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
      { width: 850, itemsToShow: 4 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
      { width: 1450, itemsToShow: 5 },
      { width: 1750, itemsToShow: 5 },
    ];
  }

  myArrow({ type, onClick, isEdge }) {
    return <div></div>;
  }
  render() {
    return (
      <div className={styles.carouselDiv}>
        <Carousel
          breakPoints={this.breakPoints}
          itemPadding={[10, 10]}
          renderArrow={this.myArrow}
          itemsToShow={2}
          itemsToScroll={1}
          ref={(ref) => (this.carousel = ref)}
        >
          {this.props.children}
        </Carousel>
        <div className={styles.copierBtnsDiv}>
          <button
            className={styles.copierBtns}
            onClick={() => this.carousel.slidePrev()}
          >
            <img
              src={NavArrow}
              alt="arrow-left"
              height="30px"
              width="30px"
              className={styles.copierBtnsImg}
            />
          </button>
          <button
            className={styles.copierBtns}
            onClick={() => this.carousel.slideNext()}
          >
            <img src={NavArrow} alt="arrow-right" height="30px" width="30px" />
          </button>
        </div>
      </div>
    );
  }
}

export function CustomCarousel2({ children }) {
  const CustomArrow = ({ type, onClick, isEdge }) => {
    const arrow =
      type === consts.PREV ? (
        <img src={NavArrowBack} alt="Nav Arrow" />
      ) : (
        <img src={NavArrow} alt="Nav Arrow" />
      );
    return (
      <div onClick={onClick} disabled={isEdge}>
        {arrow}
      </div>
    );
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 5 },
  ];
  return (
    <Carousel
      itemsToShow={5}
      itemsToScroll={1}
      itemPadding={[0, 0]}
      breakPoints={breakPoints}
      renderPagination={() => {
        return <div direction="row"></div>;
      }}
      renderArrow={CustomArrow}
    >
      {children}
    </Carousel>
  );
}

export function DotCarouselAutoplay({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}

export function NoDotCarousel({ children }) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 4000,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return <Slider {...settings}>{children}</Slider>;
}
