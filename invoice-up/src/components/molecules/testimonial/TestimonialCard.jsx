import { useEffect, useState } from "react";
import dataTestimonial from "../../../data/testimonials.json";
import { TestimonialCardStyled } from "./TestimonialCardStyled";

function useAssets(asset) {
  const assets = import.meta.glob("../../../assets/*", { eager: true });

  console.warn({ assets });

  if (assets[asset]) {
    return assets[asset].default;
  }
  return null;
}

export const TestimonialCard = () => {
  const [infoTestimonial, setInfoTestimonial] = useState([]);
  useEffect(() => {
    const get = async () => {
      const result = [];

      for (let index = 0; index < dataTestimonial.length; index++) {
        const element = dataTestimonial[index];
        const image = useAssets("../../../assets/" + element.img);
        console.log("image", image);

        result.push({
          ...element,
          image,
        });
      }

      setInfoTestimonial(result);
      console.log(infoTestimonial);
    };

    get();
  }, []);

  // const [testimonialList, setTestimonialList] = useState(dataTestimonial);
  return (
    <>
      {infoTestimonial.map((testimonial) => {
        /*       la línea está construyendo una URL completa para la imagen, teniendo en cuenta tanto la ruta relativa de la imagen como la ubicación del componente actual. */

        /*    const imgURL = new URL(`../../${testimonial.img}`, import.meta.url);
        console.log("imgURL:", imgURL); */
        return (
          <TestimonialCardStyled key={testimonial.id}>
            <div></div>
            <svg
              fill="#fff"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fff"
              stroke-width="0.00032"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M6.67,26.06c.09,0,8.77-.14,8.77-11.89A7.22,7.22,0,1,0,5.67,20.9v4.16A1,1,0,0,0,6.67,26.06ZM3,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.88,9.31-5.77,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,3,14.17Z"></path>{" "}
                <path d="M22.22,26.06c.09,0,8.78-.14,8.78-11.89a7.22,7.22,0,1,0-9.78,6.73v4.16A1,1,0,0,0,22.22,26.06ZM18.56,14.17a5.22,5.22,0,1,1,10.44,0c0,7.5-3.89,9.31-5.78,9.75V20.17a1,1,0,0,0-.75-1A5.21,5.21,0,0,1,18.56,14.17Z"></path>{" "}
              </g>
            </svg>
            <h3>{testimonial.name}</h3>
            <h5>{testimonial.job} </h5>
            <p>{testimonial.comment}</p>
            <img src={testimonial.image} alt={testimonial.name} />
          </TestimonialCardStyled>
        );
      })}
    </>
  );
};
