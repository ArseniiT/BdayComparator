import styled from 'styled-components/native';


const ButtonView = styled.Button`
    padding: 15px;
    background-color: #8fdafc;
    border-radius: 10px;
`;

export default function Button({title, imageUrl}) {
    return (
        <ButtonView title={title} />
    );
  }