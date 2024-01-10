

const Footer = () => {
  return (
    <>
        <h2 className='footer__text container'> Thanks for your visit 😊</h2>
        <h2 className='footer__text container'> Here more ways for contact: </h2>
       <div className='header__box-icons flex container'>
            <a className='header__icon-link' href='https://www.linkedin.com/in/guillemo-sandoval/' target='_blank'>
                <i className='bx bxl-linkedin' ></i>    
            </a>
            <a className='header__icon-gith' href='https://github.com/MemoSan27' target='_blank'>
                <i className='bx bxl-github' ></i>  
            </a>
            <a className='header__icon-what' href='https://wa.me/+526699418129' target='_blank'>
                <i className='bx bxl-whatsapp'></i>
            </a>
            <a className='header__icon-gmail' href='mailto:memo2705@gmail.com' target='_blank'>
                <i className='bx bxl-gmail' ></i>
            </a>
        </div>
        <h2 className='footer__text container'> Made with ❤️ by Guillermo Sandoval.</h2> 
    </>
  )
}

export default Footer
