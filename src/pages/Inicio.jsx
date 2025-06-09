import { Card } from "../components/Card/Card";
import Carousel from "../components/Carousel/Carousel";

export const Inicio = () => {
  return (
    <>
      <Carousel />
      <Card 
      discount={"30% OFF"}
      title={"Novo drop supreme"}
      buttonText={"Teste"}
      image={'../../src/assets/t-shirtImage.png'}
      bgColor={'#D8E3F2'}
      />
    </>
  );
}
