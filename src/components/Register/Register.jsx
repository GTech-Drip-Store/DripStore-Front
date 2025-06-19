import './Register.css';
import { Title } from '../Title/Title';
import { Useful } from '../Useful/Useful';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Register = () => {
    return (
        <div className='Register'>
            <div className='box-register-data'>
                <Title
                    width={'32.688rem'}
                    height={'2.25rem'}
                    fontWeight={'700'}
                    fontSize={'2rem'}
                    lineHeight={'2.25rem'}
                    letterSpacing={'0.063rem'}
                    color={'#1F1F1F'}
                    margin={'1.875rem 1.875rem 0 1.875rem'}
                >Crie sua conta</Title>

                <div className='box-have-acount'>
                    <p>Já possui uma conta? Entre</p>
                    <Useful
                        value={'aqui.'}
                        margin={'0 0 0 0.25rem'}
                        color={'#474747'}
                        textDecoration={'underline'}
                    />
                </div>

                <div className='box-input-data'>
                    <p>Email *</p>

                    <Input
                        width={'32.688rem'}
                        height={'3.75rem'}
                        type={''}
                        placeholder={'Insira seu email'}
                    />


                    <Button
                        width={'32.688rem'}
                        height={'3rem'}
                        margin={'1.875rem 0 0 0'}
                    >Criar Conta</Button>
                </div>

                <div className='box-others-login'>
                    <p>Ou faça login com</p>

                    <img src="../../src/assets/icons/IconGmail.png" />
                    <img src="../../src/assets/icons/IconFacebook.png" />
                </div>


            </div>

            <div className='box-image-front'>
                <img className='image-front' src="../../src/assets/TenisFrenteCad.png" />
            </div>

            <img className='image-back' src="../../src/assets/TenisTrasCad.png" />



        </div>
    );
};