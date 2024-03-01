import styled, {css}  from 'styled-components';

// Botões Entrar e Cadastrar
export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 10px; // antes estava 22px, estava ficando borrado 
    border: 1px solid #0b0101; // acrescentei para que acerte a borda que estava borrada 
    position: relative;

    color: #0b0101;
    padding: 2px 12px;  // em cima e embaixo 2px e laterias 12px
    min-width: 120px;
    width: 100%;
    

      // se essa condição for true, quero que implemente esse código CSS:
    ${({variant}) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        
        background: #E4105D;

        &:hover {
            opacity: 0.6;
            cursor: pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D; 
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
`