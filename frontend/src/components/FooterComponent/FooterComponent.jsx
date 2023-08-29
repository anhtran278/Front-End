import React from 'react';
import {
TwitterCircleFilled,
YoutubeFilled,
FacebookFilled,
InstagramFilled
} from '@ant-design/icons';
import apple_dow from '../../assets/images/apple_dow.jpg'
import gg_dow from '../../assets/images/gg_dow.jpg'
import logo from '../../assets/images/BookShop_Flat_x360.webp'
import pay from '../../assets/images/pay.jpg'
import {
  Footer,
  FooterCol,
  LogoFooter,
  FooterHeading,
  FooterParagraph,
  FollowSection,
  IconLink,
  RowImage,
  HoverContentLink,
  InstallImage,
} from './style';

function FooterComponent() {
  return (
    <Footer>
      <FooterCol>
        <LogoFooter src={logo} alt="" />
        <FooterHeading>Contact</FooterHeading>
        <FooterParagraph>
          <strong>Address: </strong>69/68 D. Dang Thuy Tram, Phuong 13, Binh Thanh, Thanh Pho Ho Chi Minh
        </FooterParagraph>
        <FooterParagraph>
          <strong>Phone: </strong>+84 97 886 7361
        </FooterParagraph>
        <FooterParagraph>
          <strong>Hours: </strong>8AM - 8PM, Mon - Sat
        </FooterParagraph>
        <FollowSection>
          <FooterHeading>Follow Us</FooterHeading>
          <div className="icon">
            <IconLink link="facebook.com">
            <FacebookFilled />
            </IconLink>
            <IconLink href="">
            <InstagramFilled />
            </IconLink>
            <IconLink href="">
            <TwitterCircleFilled />
            </IconLink>
            <IconLink href="">
            <YoutubeFilled />
            </IconLink>
          </div>
        </FollowSection>
      </FooterCol>
      <FooterCol id="hover_content">
        <FooterHeading>About</FooterHeading>
        <HoverContentLink href="#">About Us</HoverContentLink>
        <HoverContentLink href="#">Delivery Information</HoverContentLink>
        <HoverContentLink href="#">Privacy Policy</HoverContentLink>
        <HoverContentLink href="#">Terms & Conditions</HoverContentLink>
        <HoverContentLink href="#">Contact Us</HoverContentLink>
      </FooterCol>
      <FooterCol id="hover_content">
        <FooterHeading>My Account</FooterHeading>
        <HoverContentLink href="#">Sign In</HoverContentLink>
        <HoverContentLink href="#">View Cart</HoverContentLink>
        <HoverContentLink href="#">My Wishlist</HoverContentLink>
        <HoverContentLink href="#">Track My Oder</HoverContentLink>
        <HoverContentLink href="#">Help</HoverContentLink>
      </FooterCol>
      <FooterCol className="col_install">
        <FooterHeading>Install App</FooterHeading>
        <p>From App Store or Google Play</p>
        <div className="row">
            <RowImage src={apple_dow} alt="" />
            <RowImage src={gg_dow} alt="" />
        </div>
        <p>Secured Payment Gateways</p>
          <InstallImage src={pay} alt="" />
      </FooterCol>
    </Footer>
  );
}

export default FooterComponent;
