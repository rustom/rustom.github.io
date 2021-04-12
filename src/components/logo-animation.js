import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import animation from '@images/data.json';

const Container = styled(motion.div)``;

export default function Splash() {
  const [isToggled, toggle] = useState(0);

  const lottieRef = useRef();

  return (
    <Container
      animate={{ scale: 0.15, y: '-100px' }}
      transition={{ duration: 1.0, delay: 1.0 }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animation}
        loop={false}
        onEnterFrame={() => {
          lottieRef.current.setSpeed(3);
        }}
        onClick={() => {
          lottieRef.current.goToAndPlay(0, true);
        }}
        style={{
          margin: 'auto',
          maxWidth: '600px',
          position: 'absolute',
        }}
      />
    </Container>
  );
}
