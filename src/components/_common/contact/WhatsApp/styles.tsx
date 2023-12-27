import { FaPaperPlane } from 'react-icons/fa'
import { styled } from 'styled-components'

export const ContactWhatsContainer = styled('div')`
  display: flex;
  margin: 35px 0;
`

export const ContactWhatsContent = styled('div')`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  height: 100%;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);

  @media (min-width: 1024px) {
    .ContactWhatsContent {
      width: 70%;
    }
  }
`

export const ContactWhatsHeader = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ededed;
  padding: 10px 16px;
  border-bottom: 1px solid #ccc;
`

export const ContactWhatsHeaderAvatar = styled('img')`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`

export const ContactWhatsHeaderDesc = styled('div')`
  margin-left: 10px;
`

export const ContactWhatsHeaderDescTitle = styled('h2')`
  margin: 0;
  margin-bottom: 4px;
  font-size: 18px;
  color: #000;
`

export const ContactWhatsHeaderDescStatus = styled('p')`
  margin: 0;
  font-size: 15px;
  color: #000;
`

export const ContactWhatsBody = styled('div')`
  background-image: url(${props => props.theme.background.whatsapp});
  background-size: auto;
  display: flex;
  align-items: center;
  height: 100px;
`

export const ContactWhatsButton = styled('a')`
  background-color: #1ebea5;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 40px;
  text-decoration: none;
  font-weight: 400;
  color: white;
  margin: 0 10px;
  border-radius: 0;
  box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
`

export const ContactWhatsButtonIcon = styled(FaPaperPlane)`
  margin-left: 10px;
  font-size: 17px;
`
