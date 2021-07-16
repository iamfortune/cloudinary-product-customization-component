import { CloudinaryContext, Transformation, Image } from "cloudinary-react";

export const ProductImage = ({
  alt,
  displacement,
  productColor,
  overlay,
  texture,
  text,
  font
}) => {
  return (
    <CloudinaryContext cloudName="demo-robert">
      <Image publicId="Hanging_T-Shirt_v83je9" width="650" secure="true">
        <Transformation width="300" fetchFormat="auto" />
        <Transformation overlay={texture} quality="auto" fetchFormat="auto" />
        <Transformation
          overlay={overlay}
          quality="auto"
          fetchFormat="auto"
          width="110"
        />
        <Transformation
          overlay={{
            fontFamily: font,
            fontSize: 33,
            fontWeight: "bold",
            text: text
          }}
          gravity="center"
          y={overlay === "" ? 40 : 130}
          color={`#666`}
        />
        <Transformation rawTransformation={`e_replace_color:${productColor}`} />
      </Image>
    </CloudinaryContext>
  );
};
