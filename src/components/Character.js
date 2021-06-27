import react from 'react'
import styled from 'styled-components';


function Character(props) {

    const characterInfo = props.props;

    return (
            characterInfo.map(info => {
                return (
                    <divWrap>
                        <p>{info.name}</p>
                        <p>Gender: {info.gender}</p>
                        <p>Height: {info.height}cm</p>
                        <p>Mass: {info.mass} grams</p>
                        <p>Birth Year: {info.birth_year}</p>
                    </divWrap>
                );
            })
    );
}

export default Character;


//styling

const divWrap = styled.div`
    width: 25%;
    height: 100%;
    background: black;
    `;