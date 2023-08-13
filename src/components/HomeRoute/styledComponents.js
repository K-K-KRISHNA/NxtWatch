import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const RemainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
  background-color: ${props => (props.isDark ? 'black' : '#f4f4f4')};
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  width: 100%;
  height: 320px;
  padding: 5px;
  background-size: cover;
`
export const PremiumSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const Logo = styled.img`
  width: 30%;
`
export const Tagline = styled.p`
  color: black;
  font-size: 30px;
`
export const CrossButton = styled.button`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: none;
  cursor: pointer;
`
export const GetitNowButton = styled.button`
  background-color: transparent;
  height: 50px;
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  margin-top: 30px;
`
export const CustomSearchBar = styled.input`
  width: 350px;
  height: 30px;
  background-color: transparent;
  outline: none;
  color: ${props => (props.isDark ? 'white' : 'black')};
  padding-left: 10px;
`
export const SearchBarHolder = styled.div`
  display: flex;
`

export const TaleContainer = styled.div`
  display: flex;
  padding: 20px;
`

export const Magnifier = styled.button`
  height: 31px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #909090;
  border-width: 0px;
`
export const SuccessContainer = styled.div`
  display: flex;
  padding: 20px;
  width: 75vw;
  flex-wrap: wrap;
`
