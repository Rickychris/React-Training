import React from 'react';
import styled from 'styled-components';


import LeafImg from '../../../assets/images/vc-logo-cmyk-leaf-01.png';
import BottomDataView from './BottomDataView';
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'antd';

const btmData = [
    {
        id: 0,
        left1: 'Featured',
        left2: 'Learn how to value your contributions',
        right1: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.',
        right2: 'Learn More-1'
    },
    {
        id: 1,
        left1: 'Featured',
        left2: 'Learn how to value your contributions',
        right1: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.',
        right2: 'Learn More-2'
    },
    {
        id: 2,
        left1: 'Featured',
        left2: 'Learn how to value your contributions',
        right1: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud dolore magna ali.',
        right2: 'Learn More-3'
    }
]

const MainBottomWrap = styled.div`
    background:white;
    margin-top:30px;
    width:100%;
    height:200px;
    position: relative;
    overflow:hidden;
      & > img {
       position:absolute;
        height:100%;
        right:0;
        top:0;

    }
     @media (max-width:1024px) {
        height:300px;
         & > img {
      
        height:50%;
        right:0;
        top:50%;

    }
    }
     @media (max-width:512px) {
         width:90%;
        height:400px;
        
    }
    
`;


class MainBottom extends React.Component {
    render() {
        return (
            <MainBottomWrap className='MaxWidth' >
                <img src={LeafImg} alt='leaf-img'></img>
                <Carousel autoplay speed={1000}>

                    {btmData.map(item => (

                        <BottomDataView key={item.id} data={item} />

                    ))}
                </Carousel>
            </MainBottomWrap>
        );
    }
}

export default MainBottom;