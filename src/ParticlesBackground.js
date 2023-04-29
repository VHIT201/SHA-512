import React from 'react';
import particlesConfig from './config/particles-config';
import Particles from 'react-particles';
const ParticlesBackground = () =>{
    return(
        <Particles params={particlesConfig}></Particles>
    )
}


export default ParticlesBackground