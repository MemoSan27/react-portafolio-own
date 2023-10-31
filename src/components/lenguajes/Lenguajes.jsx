import React from 'react';
import "./lenguajes.css"
import VelocityScroll from './VelocityScroll';

const Lenguajes = () => {
    return (
        <>
            
            <h3 className='skills__front'>Frontend</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-4}>
                        <img src='../html.png' alt="" />
                        <img src="../css.png" alt="" />
                        <img src="../js.png" alt="" />
                        <img src="../react.png" alt="" />
                        <img src="../next.png" alt="" />
                </VelocityScroll>
                </section>
            </div>
            <h3>BackEnd</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={4}>
                        <img src="../node.png" alt="" />
                        <img src="../postgres.png" alt="" />
                        <img src="../mysql.png" alt="" />
                        <img src="../mongodb.png" alt="" />
                        <img src="../firebase.png" alt="" />
                        <img src="../express.png" alt="" />
                    </VelocityScroll>
                </section>
            </div>
            <h3>And More Technologies..</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-4}>
                        <img src="../git.png" alt="" />
                        <img src="../github.png" alt="" />
                        <img src="../swiper.png" alt="" />
                        <img src="../semantic.png" alt="" />
                        <img src="../particles.png" alt="" />
                        <img src="../motion.png" alt="" />
                        
                    </VelocityScroll>
                </section>
            </div>
            <h3></h3>
        </>
    );
};

export default Lenguajes;