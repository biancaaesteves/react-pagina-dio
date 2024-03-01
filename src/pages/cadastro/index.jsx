import { MdEmail, MdLock } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
// import { useNavigate  } from "react-router-dom";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup";

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

// import {api} from '../../services/api';

import { Column, Container, CriarText1, CriarText2, Highlight, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';

// Pode personalizar mensagens de erro dentro das funçõees
const schema = yup.object({
    name: yup.string().meta({ name: 'yourName' }).required('Campo obrigatório'),
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.number().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Cadastro = () => {
    // const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        // Como que eu quero validar esse formuário?
        mode: 'onChange', // assim que o usuário digitar já podemos validar
    });

    
    // //* Lógica de login: validar se o usuário realmente existe
    // const onSubmit = async formData => {
    //     try{
    //         const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
    //         if(data.length === 1) {
    //             navigate('/feed')
    //         } else {
    //             alert('Email ou senha inválido')
    //         }
    //     }catch{
    //         alert('Houve um erro, tente novamente.')
    //     }
    // }
    
    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit()}>
                   <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome Completo" leftIcon={<FaUser color="8A2BE2" />}/>
                   <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail color="8A2BE2" />}/>
                   <Input name="password" errorMessage={errors?.password?.message}  control={control} placeholder="Senha" type="password" leftIcon={<MdLock color="8A2BE2" />} />
                   <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <CriarText1>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</CriarText1>
                </Row>
                <Row>
                <CriarText2>Já tenho conta. <Highlight>Fazer login</Highlight></CriarText2>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }