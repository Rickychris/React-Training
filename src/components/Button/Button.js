import styled from 'styled-components';

const Button = styled.button`
border: ${props => props.invert ? '1px solid #d4d4d4' : 'none'};
 background-color: ${props => props.invert ? 'white' : '#006778'};
    height:50px;
    display: block;
    padding:15px 50px;
    flex: 1;
    font-family: 'HelveticaNeue';
    color: ${props => props.invert ? '#006778' : 'white'};
    font-size: 16px;
  font-weight: bold;
  font-stretch: condensed;
  letter-spacing: 0.5px;
  :not(:last-child){
      margin-right:10px;
  }
    `;



export default Button;