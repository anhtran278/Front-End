import styled from "styled-components";


export const RowImage = styled.img`
    width: 200px;
    padding-bottom: 40px;
    padding-top: 20px;
`;

export const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 150px;

`;

export const FooterCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
`;

export const LogoFooter = styled.img`
    margin-bottom: 20px;
    width: 70px;
`;

export const FooterHeading = styled.h4`
    font-size: 18px;
    padding-bottom: 10px;
    font-weight: bold;
`;

export const FooterParagraph = styled.p`
    font-size: 13px;
    margin: 0 0 8px 0;
`;

export const FooterLink = styled.a`
    font-size: 13px;
    text-decoration: none;
    color: #222;
    margin-bottom: 10px;
    &:hover {
    color: #088178;
    }
`;

export const FollowSection = styled.div`
    margin-top: 20px;
`;

export const IconLink = styled.a`
    transition: all 0.35s ease;
    color: rgb(53, 54, 63);
    border-radius: 50%;
    background-color: #f2f2f2;
    display: inline-block;
    text-align: center;
    height: 40px;
    width: 40px;
    line-height: 40px;
    margin-right: 5px;
    &:hover {
    background-color: #088178;
    color: #222;
    }
`;

export const InstallImage = styled.img`
`;

export const HoverContentLink = styled.a`
    padding-bottom: 8px;
    position: relative;
    font-size: 13px;
    text-decoration: none;
    color: #222;
    margin-bottom: 10px;
    &:hover {
    color: #222;
    }
    &:before {
    color: #088178;
    content: "";
    height: 2px;
    width: 0;
    background-color: #088178;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &:hover:before {
    width: 100%;
    }
`;


