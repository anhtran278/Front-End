import React, { useEffect } from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide'
import background3 from '../../assets/images/background3.jpg'
import background4 from '../../assets/images/background4.jpg'
import facebookImage from '../../assets/images/facebook (1).png'
import twitterImage from '../../assets/images/twitter.png'
import googleImage from '../../assets/images/google.png'
import {
    Main,
    Container,
    Switch,
    SwitchContainer,
    SwitchCircle,
    buttonStyle,
    SwitchCircle2,
    buttonHoverStyle,
    WrapperTextLight,
} from './style';

const SignInPage = () => {
  
  const [isShowPassword, setIsShowPassword] = useState(false)
  const location = useLocation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const user  = useSelector((state) => state.user)
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate()

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const { data, isLoading, isSuccess } = mutation

  useEffect(() => {
    if (isSuccess) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
      if (data?.access_token) {
        const decoded = jwt_decode(data?.access_token)
        if (decoded?.id) {
          handleGetDetailsUser(decoded?.id, data?.access_token)
        }
      }
    }
  }, [isSuccess])

  const handleGetDetailsUser = async (id, token) => {
    const storage = localStorage.getItem('refresh_token')
    const refreshToken = JSON.parse(storage)
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token,refreshToken }))
  }

  const handleNavigateSignUp = () => {
    navigate('/sign-up')
  }

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleSignIn = () => {
    console.log('logingloin')
    mutation.mutate({
      email,
      password
    })
  }
  
  return (
    <Main >
      <Container >
        <form className="form" id="b-form" method="" action="">
          <h2 className="form_title title">Sign in to Website</h2>
          <div className="form__icons">
            <img className="form__icon" src={facebookImage} alt="" />
            <img className="form__icon" src={googleImage} alt="" />
            <img className="form__icon" src={twitterImage} alt="" />
          </div>
          <InputForm
            className="form__input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleOnchangeEmail}
          />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '20px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm
              className="form__input"
              placeholder="Password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>
          <a href='.' className="form__link">Forgot your password?</a>
          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={!email.length || !password.length}
              onClick={handleSignIn}
              size={40}
              styleButton={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
              textbutton={'Sign In'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></ButtonComponent>
          </Loading>
          <p>You dont't have account ?<WrapperTextLight onClick={handleNavigateSignUp}> Sign Up</WrapperTextLight></p>
        </form>
      </Container>
      <Switch style={{backgroundImage: `url(${background4})`}}>
        <SwitchCircle></SwitchCircle>
        <SwitchCircle2></SwitchCircle2>
        <SwitchContainer>
          <h2 className="title">Welcome Back !</h2>
          <p className="description">To keep connected with us please login with your personal info</p>
        </SwitchContainer>
      </Switch>
    </Main>
  )
}

export default SignInPage
