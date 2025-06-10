import { Card } from "./Card";
import './CardColletion.css'

export const CardColletion = () => {
    return (
        <div className="card-colletion">
            <Card
                discount={"30% OFF"}
                title={"Novo drop supreme"}
                buttonText={"Teste"}
                image={'../../src/assets/t-shirtImage.png'}
                bgColor={'#D8E3F2'}
                margin={'1.15rem 0 0 6.25rem'}
            />
            <Card
                discount={"30% OFF"}
                title={"Coleção Adidas"}
                buttonText={"Teste"}
                image={'../../src/assets/tenisImage.png'}
                bgColor={'#D8E3F2'}
                margin={'1.15rem 0 0 0.75rem'}
            />
            <Card
                discount={"30% OFF"}
                title={"Novo beat bass"}
                buttonText={"Teste"}
                image={'../../src/assets/headsetImage.png'}
                bgColor={'#D8E3F2'}
                margin={'1.15rem 6.25rem 0 0.75rem'}
            />
        </div>
    );
};