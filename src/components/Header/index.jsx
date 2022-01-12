import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Logo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const StyledImage = styled.img`
  height: 80px;
  width: 200px;
  border-radius: 50%;
`

const StyledDiv = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
`

function Header() {
  return (
    <header>
      <StyledDiv>
        <StyledImage src={Logo} alt="logo shiny" />
        <nav>
          <StyledLink to="/">Accueil</StyledLink>
          {/* <StyledLink to="/survey/1">Questionnaire</StyledLink> */}
          <StyledLink to="/freelances">Profils</StyledLink>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </nav>
      </StyledDiv>
    </header>
  )
}

export default Header
