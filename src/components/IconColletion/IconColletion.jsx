import './IconColletion.css'
import { Title } from "../Title/Title";
import { Icon } from './Icon';

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
                src={'../../src/assets/icons/iconTshirt.png'}
                width={'4.938rem'}
                height={'1.375rem'}
                >Camisetas</Icon>
                                <Icon
                src={'../../src/assets/icons/iconCalcas.png'}
                width={'3.188rem'}
                height={'1.375rem'}
                >Calças</Icon>
                                <Icon
                src={'../../src/assets/icons/iconCalcas.png'}
                width={'2.875rem'}
                height={'1.375rem'}
                >Bonés</Icon>
                                <Icon
                src={'../../src/assets/icons/iconHeadphones.png'}
                width={'5.875rem'}
                height={'1.375rem'}
                >Headphones</Icon>
                                <Icon
                src={'../../src/assets/icons/iconTenis.png'}
                width={'2.5rem'}
                height={'1.375rem'}
                >Tênis</Icon>
            </div>
        </>

    );
};