import useIntersection from '../../hooks/useIntersection';
import Lenguajes from '../lenguajes/Lenguajes';
import Typewriter from 'typewriter-effect';

const Skills = () => {
  const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.3, });

  return (
    <section ref={elementRef} id='skills' className={isIntersecting ? 'skills show': 'skills hidden'} >
     <h3 className='skills__principal'> 
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
