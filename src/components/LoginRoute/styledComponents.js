import styled from 'styled-components'

export const BackgroundHolder = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgcolor};
`
export const LoginForm = styled.form`
  border-radius: 5px;
  color: ${props => props.fontColor};
  display: flex;
  font-weight: bolder;
  padding: 20px;
  width: 350px;
  flex-direction: column;
  background-color: ${props => props.loginCardBgColor};
`
export const LogoImage = styled.img`
  align-self: center;
  width: 50%;
  margin-bottom: 35px;
`
export const Label = styled.label`
  font-size: 15px;
  margin-top: 25px;
`
export const CustomInput = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  outline: none;
  color: ${props => props.fontColor};
  border-radius: 5px;
  font-size: 15px;
  border-color: ${props => props.borderColor};
  padding: 15px;
  margin-top: 5px;
`
export const CheckBoxHolder = styled.div`
  display: flex;
  align-items: center;
`
export const CustomCheckBox = styled.input`
  margin-top: 30px;
  margin-right: 10px;
`
export const LoginButton = styled.button`
  border-radius: 5px;
  text-align: center;
  background-color: #3b82f6;
  width: 100%;
  height: 40px;
  color: #ffffff;
  margin-top: 20px;
  border-width: 0px;
  cursor: pointer;
`
export const ErrorPara = styled.p`
  color: red;
`
