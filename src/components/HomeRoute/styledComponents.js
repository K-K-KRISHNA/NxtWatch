import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const RemainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  width: 100%;
  height: 320px;
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
