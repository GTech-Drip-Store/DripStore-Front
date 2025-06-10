import { CardColletion } from "../components/Card/CardColletion";
import Carousel from "../components/Carousel/Carousel";
import { Footer } from "../components/Footer/Footer";
import { IconColletion } from "../components/IconColletion/IconColletion";

export const Inicio = () => {
  return (
    <>
      <Carousel />
      <CardColletion />
      <IconColletion />
      <Footer />
    </>

  );
}
