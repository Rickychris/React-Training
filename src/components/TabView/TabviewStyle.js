import styled from 'styled-components'

export const LoaderDiv = styled.div`
height:200px;
display:flex;
align-items:center;
justify-content:center;
`;

export const StyledTable = styled.table`
margin:20px 30px;
width:90%;
& >h3{
     font-size: 20px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.5px;
  color:#006778;
  margin-bottom:15px;
}
&>p:first-of-type{
    font-size: 16px;
    line-height: 1.5;
  letter-spacing: normal;
  color: #505050;
  margin-bottom:15px;
}
& tr{
    display:flex;
    /* justify-content:space-between; */
    /* margin-bottom:20px; */
}
& th,td{
    display:block;
    flex:1;
    text-align:left;
     font-size: 16px;
      line-height: 1.5;

    /* padding:10px; */
}
& th{
    color:#505050;
}
& td{
    margin-bottom:20px;
    color:#022737;
    font-weight:bold;
}
& hr{
    margin:10px 0;
    background-color:#d4d4d4;
    /* height:2px; */
    opacity:0.9;
}
& p:last-of-type{
     font-family: HelveticaNeue;
    margin:10px 5px;
 font-size: 16px;
  font-weight: bold;
  font-stretch: condensed;
  letter-spacing: 0.5px;
  color: #006778;
}
`;