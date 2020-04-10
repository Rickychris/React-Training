import React from 'react';
import styled from 'styled-components';

import Left from '../../../assets/images/circle-arrow-l.png';
import Right from '../../../assets/images/circle-arrow-r.png';
import BottomDataView from './BottomDataView';


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
    
`;

const Controls = styled.div`
height:100%;
padding:20px;
    position:relative;
    z-index:10;
    background:transparent;
    display:flex;
    justify-content:space-between;
    align-items:center;
    &+ div{
        position:absolute;
        top:0;
        left:0;
        
        
        
    }
`;

class MainBottom extends React.Component {
    state = {
        trns: '0%'
    }



    sliderFn = () => {

        switch (this.state.trns) {
            case '0%':
                this.setState({
                    trns: '-33.33%'
                })

                break;

            case '-33.33%':
                this.setState({
                    trns: '-66.66%'
                })
                break;
            case '-66.66%':
                // this.setState({
                //     trns: '0%'
                // })
                break;
            default:
                this.setState({
                    trns: '0%'
                })
        }

    }

    sliderLeftFn = () => {

        switch (this.state.trns) {
            case '0%':
                // this.setState({
                //     trns: '-33.33%'
                // })

                break;

            case '-33.33%':
                this.setState({
                    trns: '-0%%'
                })
                break;
            case '-66.66%':
                this.setState({
                    trns: '-33.33%'
                })
                break;
            default:
                this.setState({
                    trns: '0%'
                })
        }

    }


    render() {
        return (
            <MainBottomWrap className='MaxWidth' >
                <Controls>
                    <img onClick={this.sliderLeftFn} src={Left} alt='left'></img>
                    <img onClick={this.sliderFn} src={Right} alt='right'></img>
                </Controls>
                <BottomDataView data={btmData} trns={this.state.trns} />

            </MainBottomWrap>
        );
    }
}

export default MainBottom;