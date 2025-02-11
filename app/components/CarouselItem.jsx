import React from "react";
import Image from "next/image";
import TINY_ARROW from "../assets/tiny-arrow.svg";
import Link from "next/link";

const CarouselItem = ({ thumbnail, thumbnailAltText, linkText, href }) => {
  return (
    <Link className="carousel-item" href={href}>
      <Image
        src={thumbnail}
        alt={thumbnailAltText}
        className="carousel-image"
      />
      <div className="arrow-and-link">
        <Image src={TINY_ARROW} alt="right-arrow" />
        <p>{linkText}</p>
      </div>
    </Link>
  );
};

export default CarouselItem;
