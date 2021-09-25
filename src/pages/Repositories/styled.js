import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`


export const List = styled.ul `
    list-style: none;
    padding: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li `
    margin: .5rem 0;
    background: #38383b;
    color: #fff;
    padding: .5rem;
    border-radius: 5px;
    box-shadow: 1px 1px 3px black
`

export const LinkHome = styled(Link) `
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #38383b;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px black
`