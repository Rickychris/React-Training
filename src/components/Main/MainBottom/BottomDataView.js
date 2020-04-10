import React from 'react';
import styled from 'styled-components';


const DataWrap = styled.div`
    display:flex;
    width:300%;
    transform:translateX(${props => props.trns || '0%'});
    transition:transform 1s ease-in;
    
`;

const DataDiv = styled.div`
    display:flex;
    padding:28px 72px;
    & div:first-child {
        margin-right:118px;
        & p:first-child{
        color:#505050;
        font-size:14px;
        line-height: 1.43;
        margin-bottom:6px
    } 
    & p:last-child{
        font-size: 24px;
  font-weight: 500;
  
  line-height: 1.25;
  letter-spacing: 0.5px;
       color:#022737;
    }
    }
    & div:last-child {
        & p:first-child{
        color:#505050;
        font-size:16px;
        line-height: 1.5;
        margin:30px 0 20px 0;
    } 
    & p:last-child{
        font-size: 16px;
        color:#006778;
  font-weight: bold;
  letter-spacing: 0.5px;

    }
    }

`;

const BottomDataView = (props) => {

    return (
        <DataWrap trns={props.trns}>
            {console.log(props.trns, 'wdw')}
            {props.data.map(item => (
                <DataDiv key={item.id}>
                    <div>
                        <p>{item.left1}</p>
                        <p>{item.left2}</p>
                    </div>
                    <div>
                        <p>{item.right1}</p>
                        <p>{item.right2}</p>
                    </div>
                </DataDiv>
            ))}
        </DataWrap>



    );
}




export default BottomDataView;