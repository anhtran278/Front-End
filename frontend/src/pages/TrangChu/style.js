import styled from 'styled-components';


export const Anh1 = styled.img`
    width: 100%;
    margin-top: 50px;
`;

export const Content = styled.div`
    justify-content: space-around;
    text-align: center;
    h1{
        margin-top: -2%;
        margin-bottom: 0.5%;
        font-weight: lighter;
        font-style: italic;
        text-align: center;
        font-size: 23px;
        font-family: 'Times New Roman', Times, serif;
    }
    .button{
        margin: auto;
        display: block;
        padding: 15px 25px;
        margin-bottom: 2%;
        background-color: #201D49;
        color: #FFFFFF;
        font-size: 10px;
        font-family:Arial, Helvetica, sans-serif;
        border-radius: 2px;
        border: none;
        cursor: pointer;
    }
`;

export const Q = styled.div`
    display: flex;
    img{
        width: 100%;
    }
    p{
        width: 35%;
        font-size: 15px;
        align-self: center;
        padding: 30px 20px;
        background-color: #FFFFFF; ;
        margin-left: -10%;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;

export const W = styled.div`
    display:inline-flex;
    img{
        width: 80%;
        z-index: 0;
        position: relative;
        left: 20%;
    }
    div{
        width: 50%;
        align-self: center;
        padding: 20px 40px 30px 30px;
        background-color: #FFFFFF;
        margin-right: -10%;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        z-index: 1;
        position: relative;
        right: 80%;
    }
    div h2{
        font-weight:400;
        font-family: "Caslon Bold", serif;
        font-style: italic;
        padding-bottom: 3%;
    }
    div button{
        margin-top: 5%;
        padding: 15px 25px;
        background-color: #201D49;
        color: #FFFFFF;
        font-size: 10px;
        font-family:Arial, Helvetica, sans-serif;
        border-radius: 2px;
        border: none;
    }
    div p{
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`

export const E = styled.div`
    img{
        width: 100%;
    }
    h3{
        margin-top: 1%;
        font-weight:700;
        font-size:25px;
        text-align: center;
        font-style: italic;
        margin-bottom: 1%;
        font-family: 'Times New Roman', Times, serif;
    }
    p{
        text-align: center;
        margin-bottom: 1%;
    }
    .bt button{
    margin: auto;
    display: block;
    padding: 15px 25px;
    background-color: #201D49;
    color: #FFFFFF;
    font-size: 13px;
    font-family:Arial, Helvetica, sans-serif;
    border-radius: 2px;
    margin-bottom: 5%;
    border: none;
    }
`

export const H4 = styled.div`
    text-align: center;
    font-family:'Times New Roman', Times, serif;
    font-style: italic;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: -3%;
`


export const Box4 = styled.div`
    img{
    width: 100%;
    }
    div{
        text-align: center;
        margin: 0 auto;
        width: 55%;
    }
    div h2{
        margin-top: 3%;
        font-family:'Times New Roman', Times, serif;
        font-style: italic;
        font-weight:500;
        text-transform: uppercase;
        font-size: 25px;
        letter-spacing: 2px;
    }
    div p{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    div p{
        margin: 0 auto;
        width: 65%;
        margin-top: 1%;
        font-size: 16px;
    }
`
export const KhungGiay = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;

    .anhtrai,.anhphai{
        width: 48%;
        margin:5% 0;
    }
    .anhtrai{
        margin-left: 1.5%;
    }
    .anhphai{
        margin-right: 1.5%;
    }
    .anhtrai img{
    width: 100%;
    }
    .anhphai img{
        width: 100%;
        }

    .bentrong{
        position:relative;
        bottom: 50%;
        background-color: rgba(252, 254, 255, 0.8);
        text-align: center;
        opacity: 0;
        transition: 0.2s ease-in-out;
        padding: 60% 0;
    }
    .bentrong:hover{
        opacity:1;
    }
    .aa,.cc{
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        font-size: 18px;
        letter-spacing: 2px;
    }
    .bb,.dd{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 13px;
        margin-top: 1%;
    }

`

export const TuiXach = styled.div`
    img{
    width: 100%;
    margin-top: -60%;
    }
`

export const Quote = styled.div`
        margin: 0 auto;
        width: 40%;
        text-align: center;
    h3{
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
        letter-spacing: 2px;
        margin-top: 2%;
        font-size: 25px;
    }
    p{
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-top: 2%;
        font-size: 16px;
        margin-bottom: 2%;
    }
    button{
        margin: auto;
        padding: 17px 30px;
        background-color: #201D49;
        color: #FFFFFF;
        font-size: 10px;
        font-family:Arial, Helvetica, sans-serif;
        border-radius: 2px;
        border: none;
        cursor: pointer;
    }
`

export const H2 = styled.div`
    padding-top: 4%;
    text-align: center;
    margin-top: 2%;
    margin-bottom: -3%;
    font-style: italic;
    letter-spacing: 3px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
`

export const Box5 = styled.div`
    margin: 0 auto;
    width: 42%;
    text-align: center;
    margin-top: 4%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 5%;
`

export const Tree = styled.div`
    img{
    width: 100%;
    height: 100%;
    }
`

export const Box6 = styled.div`
    text-align: center;
    margin: 0 auto;
    margin-top: 3%;
    width: 42%;
    h2{
        margin-bottom: 1%;
        text-align: center;
        font-style: italic;
        letter-spacing: 2px;
        font-family: 'Times New Roman', Times, serif;
        font-size: 24px;
    }
    p{
        margin: 0 auto;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 50px;
    }
`

export const NewsLetter = styled.div`
    padding: 40px 150px;
    width: 100%;
    display: flex;
    height: 300px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-image: url();
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: #000;
    font-family: 'Poppins', sans-serif;
    h4{
        font-size: 40px;
        font-weight: 700;
        color: #088178;
        padding-bottom: 10px;
    }
    p{
        font-size: 20px;
        font-weight: 600;
        color: rgb(47, 47, 47);
    }
    p span{
        color: rgba(189, 131, 57, 0.93);
    }
    .form{
        display: flex;
        width: 35%;
    }
    input{
        height: 6.3rem;
        padding: 1.75rem;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        outline: none;
        border-radius: 5px;
        border-radius:  5px 0 0 5px;
    } 
    button{
        background-color: #088178;
        color: #fff;
        font-size: 15px;
        white-space: nowrap;
        padding: 0 3rem;
        border-radius: 0 5px 5px 0;
        border: none;
        cursor: pointer;
        white-space: 10px;
        transition: all 0.35s ease;
    }
    button:hover{
        background-color: #055f59;
    }
`



