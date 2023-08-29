import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSliderStyle = styled(Slider)`
    & .slick-arrow.slick-prev {
        left: -100px;
        top: 40%;
        z-index: 100;
        &::before {
            font-size: 30px;
            color: Black;
        }
    }
    & .slick-arrow.slick-next {
        right: -90px;
        top: 40%;
        z-index: 100;
        &::before {
            font-size: 30px;
            color: Black;
        }
    }
    & .slick-dots {
        z-index: 10;
        bottom: -2px !important;
        li {
            button {
                &::before {
                    color: rgb(255, 255, 0.5);
                }
            }
        }
        li.active {
            button {
                &::before {
                    color: #F62682;
                }
            }
        }
    }
`

