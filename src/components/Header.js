import react from 'react';
import styled from 'styled-components'

function header() {
    return (
        <Header>
            <h1>Characters</h1>
        </Header>
    )
    header();
};

//styling

const Header = styled.h1`
    display: flex;
    justify-content: center;
    color: #feda4a;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 500%;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 150%;
    text-align: justify;
    background-color: rgba(245, 245, 245, 0.35);
`


export default Header;