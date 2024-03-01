import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display:flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px; 
`

export const InputText = styled.input`
    background: transparent;
    color: #FFFFFF;
    width: 100%;
    /* flex:1; */
    border: 0;
    height: 25px;
    
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    padding-top: 1px;
    padding-bottom: 20px;
`