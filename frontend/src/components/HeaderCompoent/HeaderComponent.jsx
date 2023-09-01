import { Badge, Button, Col, Popover } from 'antd';
import React from 'react';
import logo from '../../assets/images/BookShop_Flat_x360.webp';
import {
  SearchOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import {
  Header,
  HeaderTop,
  HeaderLink,
  HeaderMid,
  NgonNgu,
  HeaderMidImage,
  SearchContainer,
  SearchBox,
  SearchSubmit,
  HeaderBottom,
  HeaderBottomList,
  HeaderBottomListItem,
  HeaderBottomLink,
  NgonNgu2,
  CloseButton,
  SignIn,
} from './style';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService';
import { resetUser } from '../../redux/slides/userSlide';
import { useState } from 'react';
import Loading from '../LoadingComponent/Loading';
import { useEffect } from 'react';
import { searchProduct } from '../../redux/slides/productSlide';
import { Content } from 'antd/lib/layout/layout';

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [search, setSearch] = useState('');
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const order = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);

  const handleNavigateLogin = () => {
    navigate('/sign-in');
  };

  const navigateHomePage = () => {
    navigate('/');
  };

  const navigateBlog = () => {
    navigate('/blog');
  };

  const navigateContact = () => {
    navigate('/contact');
  };

  const navigateAbout = () => {
    navigate('/about');
  };

  const navigateBook = () => {
    navigate('/home');
  };

  const handleLogout = async () => {
    setLoading(true);
    await UserService.logoutUser();
    dispatch(resetUser());
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setUserName(user?.name);
    setUserAvatar(user?.avatar);
    setLoading(false);
  }, [user?.name, user?.avatar]);

  const content = (
    <div>
      <div onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</div>
      {user?.isAdmin && (
        <div onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</div>
      )}
      <div onClick={() => handleClickNavigate('my-order')}>Đơn hàng của tôi</div>
      <div onClick={handleLogout}>Đăng xuất</div>
    </div>
  );

  const handleClickNavigate = (type) => {
    if (type === 'profile') {
      navigate('/profile-user');
    } else if (type === 'admin') {
      navigate('/system/admin');
    } else if (type === 'my-order') {
      navigate('/my-order', {
        state: {
          id: user?.id,
          token: user?.access_token,
        },
      });
    } else {
      handleLogout();
    }
    setIsOpenPopup(false);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
    dispatch(searchProduct(e.target.value));
  };

  return (
    <Header>
      <Loading isLoading={loading}>
        <HeaderTop>
          {userAvatar ? (
            <img src={userAvatar} alt="avatar" style={{ height: '30px', width: '30px', borderRadius: '50%', objectFit: 'cover' }} />
          ) : (
            null
          )}
          {user?.access_token ? (
            <>
              <Popover content={Content} trigger="click" visible={isOpenPopup}>
                <div style={{ cursor: 'pointer', maxWidth: 1000, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
              </Popover>
            </>
          ) : (
            <div  style={{ cursor: 'pointer' }}>
              <HeaderLink>Help</HeaderLink>
              <span>|</span>
              <HeaderLink onClick={handleNavigateLogin}>Log In</HeaderLink>
              <span>|</span>
              <SignIn>Sign Up</SignIn> 
            </div>
          )}
        </HeaderTop>
      </Loading>
      <HeaderMid>
        <i id="open" className="fa-solid fa-bars"></i>
        <NgonNgu>
          <select name="" id="">
            <option value="">VN</option>
            <option value="">EN</option>
          </select>
        </NgonNgu>
        <HeaderMidImage src={logo} alt="" />
        <SearchContainer>
          <SearchBox id="search-box" type="text" name="q" />
          <SearchOutlined style={{ position: 'relative', left: '-24px', cursor: 'pointer', fontSize: '10px' }} />
          <SearchSubmit type="submit" id="search-submit" />
        </SearchContainer>
      </HeaderMid>
      <HeaderBottom>
        <span></span>
        <HeaderBottomList>
          <HeaderBottomListItem>
            <HeaderBottomLink onClick={navigateHomePage} href="">HOME</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink onClick={navigateBook} href="">BOOKS</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink href="">ART</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink href="">LIBRARIE HAYDÉE</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink onClick={navigateBlog} href="">BLOG</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink onClick={navigateAbout} href="">ABOUT</HeaderBottomLink>
          </HeaderBottomListItem>
          <HeaderBottomListItem>
            <HeaderBottomLink onClick={navigateContact} href="">CONTACT</HeaderBottomLink>
          </HeaderBottomListItem>
          <NgonNgu2>
            <select name="" id="">
              <option value="">VN</option>
              <option value="">EN</option>
            </select>
          </NgonNgu2>
          <CloseButton id="close" className="fa-solid fa-xmark"></CloseButton>
        </HeaderBottomList>
        <div onClick={() => navigate('/order')}>
          <Badge count={order?.orderItems?.length} size='small' >
            <ShoppingOutlined style={{ fontSize: '25px', cursor: 'pointer' }} />
          </Badge>
        </div>
      </HeaderBottom>
    </Header>
  );
}

export default HeaderComponent;
