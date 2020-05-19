import styled from 'styled-components';


// export const DarkBackground = styled.div`
// background-color:rgba(0,0,0,0.5);
// position: absolute;
// z-index:10;
// top:0;
// right:0;
// left:0;
// bottom:0;
// display:flex;
// justify-content:flex-end;
// /* height:100%; */
// `;

export const FormWrap = styled.div`
/* background-color:white; */
/* width:50%; */
padding:50px;
padding-right:120px;
/* position: relative; */
/* height:170vh; */
/* position:relative; */
/* right:0; */
& > h1{
    font-size:36px;
    color:#022737
}
& > p:first-of-type{
    color:#505050;
    font-size:16px;
    padding-top:15px;
    line-height: 1.5;
}
& > p:nth-child(3){
    color:#022737;
    font-size:16px;
    font-weight:bold;
    padding-top:30px;
    line-height: 1.5;
}
& hr{
    color:#d4d4d4;
    margin:30px 0;
}
& p:nth-child(5){
color:#505050;
 font-size:16px;
 & span{
        font-weight:bold;
        color:#022737;
    }
}
 /* & img{
        position: absolute;
        right: 30px;
        top: 20px;
        cursor: pointer;
    } */
& form{
    max-width: 80%;
    /* margin: auto; */

& h2{
    padding-top: 30px;
    color: #022737;
    font-size: 32px;
}
& p:first-of-type{
    color:#505050;
    font-size:16px;
    padding-top: 15px;
}
& p:last-of-type{
    color:#022737;
    padding: 30px 0;
    font-weight: bold;
}
& label{
    display: block;
    padding-top: 40px;
    color: #505050;
}

& input{
    width: 300px;
    height: 40px;
    padding:5px 10px;
    border: 1px solid darkgray;
}


& textarea{
    padding: 10px 20px;
}

& button{
    background-color: #006778;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.5px;
    margin: 50px 0;
    width: 200px;
    height: 50px;
    display: block;
}
& h3{
    color: #022737;
    font-size: 24px;
    margin-bottom: 15px;
}
& strong{
    color: rgb(245, 19, 30);
}
& span{
    color: #505050;
    display: block;
    padding-bottom: 20px;
}
}
 @media (max-width:900px) {
width:100%;
 }
`;

export const FormDone = styled.div`
/* background-color:white; */
/* width:50%; */
/* min-height:100vh; */
padding:50px;
padding-right:80px;
/* position: absolute; */
/* top:0; */
/* left:0; */
 /* & img{
        position: absolute;
        right: 30px;
        top: 20px;
        cursor: pointer;
    } */
&> h2{
    padding-top: 30px;
    color: #022737;
    font-size: 32px;
}
&>div{
    margin-top:50px;
    border:2px solid #a8b400;
    border-radius:50%;
    width:64px;
    height:64px;
}
&>div>div{
    transform: rotateZ(-45deg);
    margin: 13px;
    border:2px solid;
    border-color:transparent transparent  #a8b400  #a8b400;
    width:34px;
    height:20px;
}

&> p{
    color:#505050;
    padding-top: 30px;
}
& button{
    /* background-color: #006778; */
    font-size: 18px;
    font-weight: bold;
    /* color: #fff; */
    letter-spacing: 0.5px;
    border:1px solid #006778;
    margin: 50px 0;
    width: 200px;
    height: 50px;
    display: block;
    cursor: pointer;
}
&> h3{
    color: #022737;
    font-size: 24px;
    margin-bottom: 15px;
}

&> span{
    color: #505050;
    display: block;
    padding-bottom: 20px;
}
 @media (max-width:900px) {
width:100%;
 }
`;