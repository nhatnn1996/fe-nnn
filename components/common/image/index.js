import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types"; // ES6
import { getImage } from "@/shared/helper/function";

const ImageCustom = ({ src, image, layout = "responsive", ...rest }) => {
  const parseSrc = image ? getImage(image, "thumbnail") : "";
  const [stateSrc, setSrc] = useState(src || parseSrc);
  return (
    <Image
      layout={layout}
      {...rest}
      src={stateSrc}
      onError={() => setSrc("/images/placeholder.png")}
      placeholder="blur"
      blurDataURL="/images/placeholder.png"
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
