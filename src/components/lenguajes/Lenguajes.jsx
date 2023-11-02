import React from 'react';
import "./lenguajes.css"
import VelocityScroll from './VelocityScroll';
import useIntersection from '../../hooks/useIntersection';

const Lenguajes = () => {

    const [ elementRef, isIntersecting ] = useIntersection({ threshold: 0.3, });

    return (
        <>
            
            <h3 ref={elementRef} className={ isIntersecting ? 'skills__front show3' : 'skills__front hidden3' } >Frontend</h3>
            <div ref={elementRef} className={ isIntersecting ? 'lenguajes show3' : 'lenguajes hidden3' } >
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-4}>
                        <img src='../html.png' alt="" />
                        <img src="../css.png" alt="" />
                        <img src="../js.png" alt="" />
                        <img src="../react.png" alt="" />
                        <img src="../next.png" alt="" />
                        <img src="../socket.png" alt="" />
                </VelocityScroll>
                </section>
            </div>
            <h3 ref={elementRef} className={ isIntersecting ? 'skills__front show2' : 'skills__front hidden2' } >BackEnd</h3>
            <div ref={elementRef} className={ isIntersecting ? 'lenguajes show2' : 'lenguajes hidden2' }>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={4}>
                        <img src="../node.png" alt="" />
                        <img src="../postgres.png" alt="" />
                        <img src="../mysql.png" alt="" />
                        <img src="../mongodb.png" alt="" />
                        <img src="../firebase.png" alt="" />
                        <img src="../express.png" alt="" />
                        <img src="../socket.png" alt="" />
                    </VelocityScroll>
                </section>
            </div>
            <h3 ref={elementRef} className={ isIntersecting ? 'skills__front show3' : 'skills__front hidden3' } >And More Technologies..</h3>
            <div ref={elementRef} className={ isIntersecting ? 'lenguajes show3' : 'lenguajes hidden3' }>
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