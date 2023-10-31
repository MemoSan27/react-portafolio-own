import "./portafolio.css"
import data from "../../portafolio.json";

const Portafolio = () => {
    return (
      <section id='portafolio' className='portafolio'>
          <h4 className='portafolio__title'> Portafolio </h4>
          <h4 className="portafolio__grid-title container">Some of my own projects</h4>
  
          <section className="portafolio__grid container">
            <div className="portafolio_container">
              {
                data.map((page) => (
                    <div key={ page.url } className="card btn">
                        <div className="face front">
                            <img src={page.image} alt="" />
                            <p>{ page.title }</p>
                        </div>
                        <div className="face back">
                            <div>
                                <p className="cart_title">{ page.title }</p>
                                <p className="cart_description">{ page.description }</p>
                            </div>
                            <a href={page.url} target="_blank" className="link btn">
                                Go to site
                            </a>
                        </div>
                    </div>
                ))
              }

            </div>
          </section>
      </section>
    )
  }
  
  export default Portafolio
  