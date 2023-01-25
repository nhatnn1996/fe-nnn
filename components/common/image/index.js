import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types"; // ES6
import { getImage } from "@/shared/helper/function";

const ImageCustom = ({
  src,
  image,
  layout = "responsive",
  size = "small",
  ...rest
}) => {
  const parseSrc = image ? getImage(image, size) : "";
  const [stateSrc, setSrc] = useState(
    src || parseSrc || "/images/placeholder.png"
  );
  return (
    <Image
      layout={layout}
      src={stateSrc}
      onError={() => setSrc("/images/placeholder.png")}
      placeholder="blur"
      blurDataURL="/images/placeholder.png"
      {...rest}
    />
  );
};

export default ImageCustom;

ImageCustom.propTypes = {
  // src: PropTypes.string,
  objectFit: PropTypes.oneOf([
    "fill",
    "contain",
    "cover",
    "none",
    "scale-down",
  ]),
};
