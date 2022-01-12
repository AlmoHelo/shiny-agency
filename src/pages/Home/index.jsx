import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import monImage from '../../assets/home-illustration.svg'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const StyledSection = styled.section`
    background-color: #f0dbff;
    margin: 50px 30px;
    padding: 50px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledDivTxt = styled.div`
    width: 30em;
`

const StyledTitre = styled.h1`
    font-size: 45px;
`

function Home() {
  return (
    <StyledSection>
      <StyledDivTxt>
        <StyledTitre>
          Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
        </StyledTitre>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </StyledDivTxt>
      <img src={monImage} alt="image illustration home page" />
    </StyledSection>
  )
}

export default Home
