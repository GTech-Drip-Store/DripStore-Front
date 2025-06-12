import { CardColletion } from "../components/Card/CardColletion";
import Carousel from "../components/Carousel/Carousel";
import { Footer } from "../components/Footer/Footer";
import { IconColletion } from "../components/IconColletion/IconColletion";
import { ProductGrid } from "../components/ProductGrid/ProductGrid";

export const Inicio = () => {
  return (
    <>
      <Carousel />
      <CardColletion />
      <IconColletion />
      <ProductGrid />
      <Footer />
    </>

  );
}
