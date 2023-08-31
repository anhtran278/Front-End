import React from 'react'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import InputForm from '../../components/InputForm/InputForm'
import { useState } from 'react'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'
import { useEffect } from 'react'
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

const SignUpPage = () => {
  const navigate = useNavigate()

  const [isShowPassword, setIsShowPassword] = useState(false)
  
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }

  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )

const { data, isLoading, isSuccess, isError } = mutation

  useEffect(() => {
    if (isSuccess) {
      message.success()
      handleNavigateSignIn()
    } else if (isError) {
      message.error()
    }
  }, [isSuccess, isError])

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }

  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }

  const handleSignUp = () => {
    mutation.mutate({ email, password, confirmPassword })
  }

  return (
    <Main style={{backgroundImage: `url(${background3})`}}>
      <Container >
        <form className="form" id="b-form" method="" action="">
          <h2 className="form_title title">Create Account</h2>
          <div className="form__icons">
            <img className="form__icon" src={facebookImage} alt="" />
            <img className="form__icon" src={googleImage} alt="" />
            <img className="form__icon" src={twitterImage} alt="" />
          </div>
          <span class="form__span">or use email for registration</span>
          <InputForm
            className="form__input"
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
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '20px',
                right: '8px'
              }}
            >{
                isShowConfirmPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm
              className="form__input"
              placeholder="Confirm Password"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            />
          </div>
          {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
          <Loading isLoading={isLoading}>
            <ButtonComponent
              disabled={!email.length || !password.length || !confirmPassword.length}
              onClick={handleSignUp}
              size={40}
              styleButton={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
              textbutton={'SIGN UP'}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            ></ButtonComponent>
          </Loading>
          <p>Already have an account ?<WrapperTextLight onClick={handleNavigateSignIn}> Sign In </WrapperTextLight></p>
        </form>
      </Container>
      <Switch style={{backgroundImage: `url(${background4})`}}>
        <SwitchCircle></SwitchCircle>
        <SwitchCircle2></SwitchCircle2>
        <SwitchContainer>
          <h2 className="title">Hello Friend !</h2>
          <p className="description">Enter your personal details and start the journey with us</p>
        </SwitchContainer>
      </Switch>
    </Main>
  )
}

export default SignUpPage
