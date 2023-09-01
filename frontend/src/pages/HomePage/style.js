import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    height: 44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
`
export const PageHeader = styled.div`
    width: 100%;
    height: 40vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 14px;
    align-self: center;
    background-repeat: no-repeat;
    margin-top: 50px;
    h1{
    font-size: 60px;
    color: #fff;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    letter-spacing: 5px;
    }
    p{
        padding: 10px;
        font-size: 25px;
        color: #fff;
        font-style: italic;
        font-weight: 500;
    }
`

export const NewLetter = styled.div`
    display: flex;
    height: 300px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    background-repeat: no-repeat;
    background-position: 20% 30%;
    background-color: #000;
    font-family: 'Poppins', sans-serif;
    .section_p1 {
    padding: 40px 150px;
    }

    h4 {
        font-size: 40px;
        font-weight: 700;
        color: #088178;
        padding-bottom: 10px;
    }

    p {
        font-size: 20px;
        font-weight: 600;
        color: rgb(47, 47, 47);
    }

    p span {
        color: rgba(189, 131, 57, 0.93);
    }

    .form {
        display: flex;
        width: 35%;
    }

    .form input {
        height: 6.3rem;
        padding: 1.75rem;
        font-size: 14px;
        width: 100%;
        border: 1px solid transparent;
        outline: none;
        border-radius: 5px;
        border-radius: 5px 0 0 5px;
    }

    .form button {
        background-color: #088178;
        color: #fff;
        font-size: 15px;
        white-space: nowrap;
        padding: 0 4rem;
        border-radius: 0 5px 5px 0;
        border: none;
        cursor: pointer;
        white-space: 10px;
        transition: all 0.35s ease;
    }

    button:hover {
        background-color: #055f59;
    }
`