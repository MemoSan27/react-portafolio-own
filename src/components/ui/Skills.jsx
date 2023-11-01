import useIntersection from '../../hooks/useIntersection';
import Lenguajes from '../lenguajes/Lenguajes';
import Typewriter from 'typewriter-effect';

const Skills = () => {
  const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.3, });

  return (
    <section id='skills' className='skills' >
     <h3 ref={elementRef} className={isIntersecting ? 'skills__principal show' : 'skills__principal hidden' } > 
                        <Typewriter 
                            options={{
                                strings: ['My Skills💪', 
                                            ],
                                autoStart: true,
                                loop: true,
                                
                            }}
                        /> </h3> 
     
     <Lenguajes />
    </section>
  )
}

export default Skills
