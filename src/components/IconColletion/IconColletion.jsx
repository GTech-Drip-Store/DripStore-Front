import './IconColletion.css'
import { Title } from "../Title/Title";
import { Icon } from './Icon';

//#b3b3b3
export const IconColletion = () => {
    return (
        <>
            <Title
                width="17.688rem"
                height="2.375rem"
                display="flex"
                justifyContent="center"
                margin={'6.25rem auto 1.25rem'}
            >
                Coleções em destaque
            </Title>

            <div className="box-colletion">
                <Icon
                    srcDefault="../../src/assets/icons/IconTshirtDefault.svg"
                    srcHover="../../src/assets/icons/IconTshirtHover.svg"
                    width="4.938rem"
                    height="1.375rem"
                >
                    Camisetas
                </Icon>
                <Icon
                    srcDefault="../../src/assets/icons/iconPantsDefault.svg"
                    srcHover="../../src/assets/icons/iconPantsHover.svg"
                    width={'3.188rem'}
                    height={'1.375rem'}
                >Calças</Icon>
                <Icon
                    srcDefault="../../src/assets/icons/IconCapDefault.svg"
                    srcHover="../../src/assets/icons/IconCapHover.svg"
                    width={'2.875rem'}
                    height={'1.375rem'}
                >Bonés</Icon>
                <Icon
                    srcDefault="../../src/assets/icons/IconHeadphoneDefault.svg"
                    srcHover="../../src/assets/icons/IconHeadphoneHover.svg"
                    width={'5.875rem'}
                    height={'1.375rem'}
                >Headphones</Icon>
                <Icon
                    srcDefault="../../src/assets/icons/IconShoeDefault.svg"
                    srcHover="../../src/assets/icons/IconShoeHover.svg"
                    width={'2.5rem'}
                    height={'1.375rem'}
                >Tênis</Icon>
            </div>
        </>

    );
};