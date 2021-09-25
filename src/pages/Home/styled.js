import styled from 'styled-components';

export const HomeContainer = styled.div`
 height: 50vh;
 flex-direction: column;
 display: flex;
 align-items: center;
 justify-content: center
`

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    border: 1px solid #ddd;
    height: 2.0rem;
    padding: 0 .5rem;
    border-radius: .30rem 0 0 .30rem;
    width: 22%;
    filter: drop-shadow(-1px 0px 3px #ededed);
   

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
        
    }
`;

export const Button = styled.button `
    height: 2.1rem;
    border: none;
    background: #38383b;
    color: #fff;
    border-radius: 0 .30rem .30rem 0;
    filter: drop-shadow(1px 0px 3px #ededed);
    

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`

export const ErrorMsg = styled.span`
    display: block;
    font-size: 1.2rem;
    color: darkred;
    font-weight: 600;
    margin-top: 1rem;
`