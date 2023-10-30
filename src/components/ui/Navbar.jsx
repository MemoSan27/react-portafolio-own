

const NavBar = () => {

    
    return (
      <nav className='nav'> 
          <div className='nav__autor-name container'> 
              <a href='#header' className='nav__autor-link'>
                  <h2 className='nav__autor'>Guillermo Sandoval</h2>
              </a>
  
              <div className='nav__menu'>
                  <a href='#about' className='nav__link'> About Me </a>
                  <a href='#' className='nav__link'> Skills </a>
                  <a href='#' className='nav__link'> Portafolio </a>
                  <a href='#' className='nav__link'> Contact </a>
              </div>
  
              <i className='iconShowMenu bx bx-menu'></i>
          </div>
        </nav>
    )
  }
  
  export default NavBar