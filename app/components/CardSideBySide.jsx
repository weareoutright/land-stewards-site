import React from "react";
import Link from "next/link";
import Image from "next/image";

const CardSideBySide = ({
  image,
  imageAltText,
  imageLeftBool,
  header,
  textContent,
  btnText,
  btnHref,
  btnClass,
  borderBottomBool,
}) => {
  return (
    <div className="CardSideBySide">
      <div
        className="content side-by-side-content"
        style={{
          flexDirection: imageLeftBool ? "" : "row-reverse",
          borderBottom: borderBottomBool ? "1px solid white" : "",
          borderTop: !borderBottomBool ? "1px solid white" : "",
        }}
      >
        <Image src={image} alt={imageAltText} />
        <div className="text">
          <h2 className="header-2">{header}</h2>
          <p>{textContent}</p>
          <Link href={btnHref} className={btnClass}>
            {btnText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardSideBySide;
