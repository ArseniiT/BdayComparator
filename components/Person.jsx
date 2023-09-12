import styled from 'styled-components/native';


const PersonView = styled.View`
    padding: 15px;
    background-color: #8fdafc;
    border-radius: 10px;
`;

const PersonTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
`;

const PersonImage = styled.Image`
    height: 90px;
    width: 90px;
    border-radius: 10px;
    margin-right: 12px;
`;

const Line = styled.View`
    padding: 15px;
    border-bottom-width: 1px;
    border-bottom-color: #b5b5b5;
    border-bottom-style: solid;
`;

export default function Person({title, imageUrl}) {
    return (
        <PersonView>
          <PersonImage source={{uri: imageUrl}}/>
          <PersonTitle>{title}</PersonTitle>
          <Line/>
        </PersonView>
    );
  }