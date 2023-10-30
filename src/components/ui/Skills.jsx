import Lenguajes from '../lenguajes/Lenguajes';
import Typewriter from 'typewriter-effect';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
     <h3 className='skills__principal'> 
                        <Typewriter 
                            options={{
                                strings: [  'My Skills', 
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
