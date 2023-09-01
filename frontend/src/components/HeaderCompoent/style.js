import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.header`
    margin: 0 100px;
`;

export const HelpLogin = styled.div`
    padding: 15px;
`;


export const HeaderTop = styled.div`
    display: flex;
    justify-content: flex-end;
    border-bottom: #3d4752 1px solid;
    padding: 10px 0;
`;

export const HeaderItemsList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: flex-end;
    font-size:16px;
`;

export const HeaderLink = styled.a`
    color: #3d4752;
    text-decoration: none;
    font-weight: 700;
    transition: 0.35s all ease;
    padding: 0 10px;
    &:hover {
    color: #0ba49a;
    }
`;

export const SignIn = styled.a`
    color: #3d4752;
    text-decoration: none;
    font-weight: 700;
    transition: 0.35s all ease;
    padding-left: 15px;
    &:hover {
    color: #0ba49a;
    }
`;

export const HeaderMid = styled.div`
    display: flex;
    align-items: flex-start;
    margin: 30px 0 45px 0px;
`;

export const NgonNgu = styled.div`
    margin-right: 45%;
`;

export const HeaderMidImage = styled.img`
    height: 100px;
`;

export const SearchContainer = styled.div`
    position: absolute;
    right: 60px;
`;

export const SearchBox = styled.input`
    transition: width 0.6s, border-radius 0.6s, background 0.6s, box-shadow 0.6s;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background: #ebebeb;
    
    & + label .search-icon {
        color: black;
    }
    
    &:hover {
        color: white;
        background: #088179c0;
        box-shadow: 0 0 0 5px #464747d9;
        
        & + label .search-icon {
            color: white;
        }
    }
    
    &:focus {
        transition: width 0.6s cubic-bezier(0, 1.22, 0.66, 1.39), border-radius 0.6s, background 0.6s;
        border: none;
        outline: none;
        box-shadow: none;
        padding-left: 15px;
        cursor: text;
        width: 300px;
        border-radius: auto;
        background: #ebebeb;
        color: black;
        
        & + label .search-icon {
            color: black;
        }
    }
    
    &:not(:focus) {
        text-indent: -5000px;
    }
`;

export const SearchSubmit = styled.input`
    position: relative;
    left: -5000px;
`;

export const SearchOutlined = styled.i`
    position: relative;
    left: -30px;
    color: white;
    cursor: pointer;
`;

export const HeaderBottom = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: #222 1px solid;
    padding-bottom: 30px;
`;

export const HeaderBottomList = styled.ul`
    display: flex;
`;

export const HeaderBottomListItem = styled.li`
    list-style: none;
    padding: 0 20px;
`;

export const HeaderBottomLink = styled.a`
    text-decoration: none;
    color: #222;
    padding: 5px;
    position: relative;
    font-size: 15px;
    font-weight: 400;
    color: #1a1a1a;
    transition: all 0.3 ease;
    
    &:hover{
        color: #1a1a1a;
    }
    &::before {
        content: "";
        height: 2px;
        width: 0;
        background-color: #088178;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    
    &:hover::before {
        width: 100%;
    }
`;



export const BarsIcon = styled.i`
    display: none;
`;

export const NgonNgu2 = styled.div`
    display: none;
`;

export const CloseButton = styled.div`
    display: none;
`;

