import { Card } from "antd";
import styled from "styled-components";



export const WrapperCardStyle = styled(Card)`
    width: 568px;
    margin: 5px;
    & img {
        height: 709px;
        width: 568px;
    },
    position: relative;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
`

export const StyleNameProduct = styled.div`
    color:#212121;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size:14px;
    font-weight:500;
    letter-spacing:1px;
    line-height:19.25px;
    padding:0px 0px 10px;
    text-align:center;
    text-transform:uppercase;
`

export const WrapperPriceText = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:#212121;
    font-size:12px;
    font-weight:500;
    letter-spacing:1px;
    line-height:16.5px;
    text-align:center;
    text-transform:uppercase;
`
export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`





