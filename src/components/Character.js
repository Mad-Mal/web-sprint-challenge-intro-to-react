import react from 'react'
import styled from 'styled-components';


function Character(props) {

    const characterInfo = props.props;

    return (
            characterInfo.map(info => {
                return (
                        <DivWrap>
                            <h2>{info.name}</h2>
                            <p>Gender: {info.gender}</p>
                            <p>Height: {info.height}cm</p>
                            <p>Mass: {info.mass} grams</p>
                            <p>Birth Year: {info.birth_year}</p>
                        </DivWrap>
                );
            })
    );
}

export default Character;


//styling

const DivWrap = styled.div`
    width: 20%;
    height: 100%;
    background: black;
    color: white;
    margin: 5%;
    border-radius: 25px;
`;