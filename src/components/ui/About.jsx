import useIntersection from "../../hooks/useIntersection";

const About = () => {
  const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.3, });

    return (
      <section id="about" className="aboutt">
        <div ref={elementRef} className={ isIntersecting ? "bgTitle container show" : "bgTitle container hidden" } > 
          <p className="a-title"> About me👨‍💻</p>
        </div>
        <section ref={elementRef} className={ isIntersecting ? "about container show" : "about container hidden"} >
            <figure className="about__figure">
                <img className="about__img" src="../about.jpg" />
            </figure>
            <article className="about__article">
                <p className="about__description"> Hello, my name is Guillermo Antonio Sandoval Espinoza, I was born in Mazatlán, México, 
                    I am a passionate programmer always in the best disposition to colaborate in any task or challenge that happens. 
                    Every day I feel the need to learn something new, nowadays I have knowledge and skills on avant-garde technologies
                    in FullStack Develop field, which I would be happy to contribute along with my soft skills, to achieve corporate, team, 
                    and personal objectives.    
                </p>
            </article>  
        </section>
      </section>
      
    )
  }
  
  export default About
  