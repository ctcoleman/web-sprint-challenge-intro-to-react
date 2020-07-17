import React from 'react' // Anywhere we use react we import react
import { HeaderContainer, Heading, Description } from './HeaderStyle'
// create the Header Component which returns the header nav and logo
function Header({ title, description }) {
  return (
    <HeaderContainer className='Header-container'>
      <Heading className='Header-title-container'>
        <h1 id='Header-title'>{title}</h1>
      </Heading>
      <Description className='Header-description-container'>
        <h2 id='Header-description'>{description}</h2>
      </Description>
    </HeaderContainer>
  )
}


// export Header to be imported in the app
export default Header