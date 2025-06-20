import './Login.css';
import { Title } from '../Title/Title';
import { Useful } from '../Useful/Useful';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const Login = () => {
    return (
        <div className='login'>
            <div className='box-login-data'>
                <Title
                    width={'32.688rem'}
                    height={'2.25rem'}
                    fontWeight={'700'}
                    fontSize={'2rem'}
                    lineHeight={'2.25rem'}
                    letterSpacing={'0.063rem'}
                    color={'#1F1F1F'}
                    margin={'1.875rem 1.875rem 0 1.875rem'}
                >Acesse sua conta</Title>

                <div className='box-no-acount'>
                    <p>Novo cliente? Então registre-se</p>
                    <Useful
                        value={'aqui.'}
                        margin={'0 0 0 0.25rem'}
                        color={'#474747'}
                        textDecoration={'underline'}
                        to={'/Cadastro'}
                    />
                </div>

                <div className='box-input-data'>
                    <p>Login *</p>

                    <Input
                        width={'32.688rem'}
                        height={'3.75rem'}
                        type={'text'}
                        placeholder={'Insira seu login ou email'}
                    />

                    <p className='second-label'>Senha *</p>

                    <Input
                        width={'32.688rem'}
                        height={'3.75rem'}
                        type={'text'}
                        placeholder={'Insira sua senha'}
                    />

                    <Useful
                    color={'#474747'}
                    textDecoration={'underline'}
                    value={'Recuperar senha'}
                    fontFamily={'Inter'}
                    fontSize={'0.875'}
                    />

                    <Button
                        width={'32.688rem'}
                        height={'3rem'}
                        margin={'1.875rem 0 0 0'}
                    >Acessar Conta</Button>

                    <div className='box-others-login'>
                        <p>Ou faça login com</p>

                        <img src="../../src/assets/icons/IconGmail.png" />
                        <img src="../../src/assets/icons/IconFacebook.png" />
                    </div>

                </div>

            </div>

            <div className='box-image-front'>
                <img className='image-front' src="../../src/assets/TenisFrenteCad.png" />
            </div>

            <img className='image-back' src="../../src/assets/TenisTrasCad.png" />

        </div>
    );
};