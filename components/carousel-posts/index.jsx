import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import { getFeaturedPosts } from "../../services/graphql.service";
import { FeaturedPostCard } from "./_feature-post-card";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const CarouselPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button className="absolute arrow-btn left-0 text-center py-3 cursor-pointer active:opacity-80 bg-pink-600 rounded-full" onClick={() => onClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    return (
      <button className="absolute arrow-btn right-0 text-center py-3 cursor-pointer active:opacity-80 bg-pink-600 rounded-full" onClick={() => onClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    );
  };

  return (
    <div className="mb-8">
      <Carousel infinite customRightArrow={<CustomRightArrow />} customLeftArrow={<CustomLeftArrow />} ssr={true} responsive={responsive} sliderClass="" itemClass="px-4">
        {dataLoaded == true && featuredPosts.map((post, index) => <FeaturedPostCard key={index} post={post} />)}
      </Carousel>
    </div>
  );
};

export { CarouselPosts };
