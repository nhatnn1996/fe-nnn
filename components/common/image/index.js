import Image from "next/image";
import { useState } from "react";
import PropTypes from "prop-types"; // ES6

const ImageCustom = ({ src, layout = "responsive", ...rest }) => {
  const [stateSrc, setSrc] = useState(src);
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
  src: PropTypes.string,
  objectFit: PropTypes.oneOf([
    "fill",
    "contain",
    "cover",
    "none",
    "scale-down",
  ]),
};
