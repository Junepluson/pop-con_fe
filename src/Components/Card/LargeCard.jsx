import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Typo from '../../assets/Typo';
import Margin from '../Margin/Margin';

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`   // page에서 사용

const CardEach = styled.div`
    display:flex;
    flex-direction:column;
    background-color: white;

    height: 300px;
    min-width: 400px;

    border-radius: 12px;
    cursor: pointer;
    margin: 9px;
    box-shadow: 8px 8px 8px 5px rgba(67, 0, 209, 0.05);
    
`
const Thumbnail = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //background-image: url('/Cardrose.jpg');
    background-image: url(' ${(props) => props.image} ');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: none;
    border-radius: 16px;
    //margin-bottom: 15px;

    height: 200px;
    width: 100%;
    
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-bottom: 5px;
    margin-left: 15px;
    margin-right: 15px;
    line-height: 18px;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`
const TextBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 7px;

`



const Card = () => {
    const navigate = useNavigate();
    return (
            <CardEach onClick={() => navigate('/')}>
                <Thumbnail image='NewJeans.jpg'/>
                <TitleWrapper>
                    <Typo fontType='title'>NEWJEANS의 Hype맑음</Typo>
                </TitleWrapper>
                <TextBox>
                    <TextWrapper>
                        <Margin height='12'/>
                        <Typo size='small'>팝업 스토어</Typo>
                        <Typo size='small'>창작예술</Typo>
                    </TextWrapper>
                  
                    <TextWrapper>
                    <Margin height='6'/>
                    <Typo size='small' > 하텍 해동 스룸G</Typo>
                    <Typo size='small' > 인하대학교</Typo>
                    <Typo size='small' color='darkgray'> 2023.07.21~ 2023.08.19</Typo>
                    </TextWrapper>
                </TextBox>

            </CardEach>
    );

};

export default Card;

  


const SmallCard = styled.div`
  height: 270px;
  min-width: 400px;
  border-radius: 7px;
  background-color: ${(props) => props.color && props.theme.colors[props.color]};
  border: none;
  color: ${(props) => props.color && props.theme.colors.white};
  cursor: pointer;
  ${(props) => props.theme.font[props.fontType]};
`;


