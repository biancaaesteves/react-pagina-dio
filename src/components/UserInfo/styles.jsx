import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 24px;
` 

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
    margin-right: 12px;
`

export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
` 

export const Progress = styled.div`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px; // borda arredondada 
    position: relative;

    // Barra verde:
    &::after {
        content: '';
        position: absolute;
        top: 0; // joga o verde em cima da barra branca
        left: 0; // joga o verde em cima da barra branca
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
    }
` 