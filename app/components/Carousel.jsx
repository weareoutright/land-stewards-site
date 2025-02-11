"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import LEFT_DISABLED from "../assets/left-arrow-disabled.svg";
import LEFT_ARROW from "../assets/left-arrow.svg";
import RIGHT_ARROW_DISABLED from "../assets/right-arrow-disabled.svg";
import RIGHT_ARROW from "../assets/right-arrow.svg";
import CarouselItem from "./CarouselItem";

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);
  const visibleItems = 3; // Number of items visible at a time
  const itemWidth = 420; // Adjust based on image width + margins

  const nextSlide = (e) => {
    e.preventDefault();
    if (index + visibleItems < items.length) {
      setIndex(index + 1);
      carouselRef.current.scrollTo({
        left: (index + 1) * itemWidth,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = (e) => {
    e.preventDefault();
    if (index > 0) {
      setIndex(index - 1);
      carouselRef.current.scrollTo({
        left: (index - 1) * itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Carousel">
      <div className="CarouselContainer" ref={carouselRef}>
        {items.map((item) => (
          <CarouselItem
            key={item.id}
            thumbnail={item.image}
            linkText={item.title}
            thumbnailAltText={item.title}
            href={item.href}
          />
        ))}
      </div>

      <div className="carousel-controls">
        <Link
          href="#"
          className="carousel-control arrow left"
          onClick={(e) => prevSlide(e)}
          disabled={index === 0}
        >
          <Image
            src={index === 0 ? LEFT_DISABLED : LEFT_ARROW}
            alt="left-disabled"
          ></Image>
        </Link>
        <Link
          href="#"
          onClick={(e) => nextSlide(e)}
          disabled={index + visibleItems >= items.length}
          className="carousel-control arrow right"
        >
          <Image
            src={
              index + visibleItems >= items.length
                ? RIGHT_ARROW_DISABLED
                : RIGHT_ARROW
            }
            alt="right-arrow"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
