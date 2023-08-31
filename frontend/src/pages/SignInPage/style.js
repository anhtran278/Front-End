import styled from "styled-components";

export const WrapperTextLight = styled.span`
    color: rgb(13, 92, 182);
    font-size: 13px;
    cursor: pointer;
`

export const Main = styled.div`
    position: relative;
    width: 1000px;
    min-width: 1000px;
    min-height: 600px;
    height: 600px;
    padding: 25px;
    border-radius: 10px;
    overflow: hidden;
    display: block;
    margin: 150px auto;
    display: block;

    .title {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #111111;
    }

    .description {
    font-size: 14px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    width: 600px;
    height: 100%;
    padding: 25px;
    background-color: #e3e3e3;
    background-repeat: no-repeat;
    background-position:60% 0%;
    object-fit: cover;
    transition: 1.25s;
    z-index: 100;
    left: 0;
    .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    }
    .form__icon {
    object-fit: contain;
    width: 30px;
    margin: 0 8px;
    opacity: 0.5;
    transition: 0.15s;
    }
    .form__icon:hover {
    opacity: 1;
    cursor: pointer;
    }
    .form__input {
    width: 350px;
    height: 40px;
    margin: 10px 0;
    padding-left: 20px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3c4;
    transition: 0.25s ease;
    border-radius: 8px;
    }
    .form__input:focus {
    }
    .form__span {
    margin-top: 30px;
    margin-bottom: 12px;
    }
    .form__link {
    color: #181818;
    font-size: 15px;
    margin-top: 25px;
    border-bottom: 1px solid #a0a5a8;
    line-height: 2;
    cursor: pointer;
    transition: all 0.35s ease;
    }
    .form__link:hover{
    color: royalblue;
    }
    .title {
    font-size: 34px;
    font-weight: 700;
    line-height: 3;
    color: #111111;
    }

    .description {
    font-size: 50px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
    }
`

export const buttonStyle = {
    width: '180px',
    height: '50px',
    borderRadius: '25px',
    margin: '30px 0',
    fontWeight: '700',
    fontSize: '14px',
    letterSpacing: '1.15px',
    backgroundColor: '#088178',
    color: '#f9f9f9',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'all ease 0.35s',
};

export const buttonHoverStyle = {
    transform: 'scale(0.985)',
    backgroundColor: '#055f59',
};

export const Switch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: calc(100% - 400px);    
    height: 100%;
    width: 400px;
    padding: 50px;
    z-index: 200;
    transition: 1.25s;
    background-repeat: no-repeat;
    background-position: 55% 18%;
    overflow: hidden;
`

export const SwitchCircle = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #e3e3e33f;
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
`
export const SwitchCircle2 = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: #e3e3e33f;
    bottom: -60%;
    left: -60%;
    transition: 1.25s;
    zIndex: 200;
    top: -30%;
    left: 60%;
    width: 300px;
    height: 300px;
`

export const SwitchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 400px;
    padding: 50px 55px;
    transition: 1.25s;
    .title {
    font-size: 35px;
    font-weight: 700;
    line-height: 3;
    color: #111111;
    }

    .description {
    font-size: 15px;
    letter-spacing: 0.25px;
    text-align: center;
    line-height: 1.6;
    }
`