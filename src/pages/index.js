import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { GlobalStyle, theme } from '@styles';
import { Cursor, Head, LogoAnimation, SocialLinks } from '@components';

const Wrapper = styled(motion.div)`
  width: 100vw;
  max-height: 100vh;
`;

const Content = styled(motion.main)`
  margin: auto;
  margin-top: 5vw;
  // margin-top: 12vw;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 60px;
  box-size: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled(motion.p)`
  align-self: flex-start;
`;

const CustomLink = styled(motion(OutboundLink))``;

const container = {
  beginning: {},
  final: { transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 },
};
const item = {
  beginning: { opacity: 0, y: 20 },
  final: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Content variants={container} initial="beginning" animate="final">
            {/* <LogoAnimation /> */}
            <br />
            <Description variants={item}>
              Hi, I'm Rustom Ichhaporia!
            </Description>

            <Description variants={item}>
              Welcome to my home on the web.
            </Description>

            <Description variants={item}>
              I'm currently a master's student at the University of Illinois at Urbana-Champaign (
              <CustomLink
                href="https://cs.illinois.edu/"
                aria-label="UIUC Computer Science"
                target="_blank"
                rel="noopener noreferrer"
              >
                UIUC
              </CustomLink>).
            </Description>

            <Description variants={item}>
              Previously, I've spent time in machine learning and software engineering and machine learning roles at{' '}
              <CustomLink
                href="https://www.snowflake.com/en/"
                aria-label="Snowflake"
                target="_blank"
                rel="noopener noreferrer"
              >
                Snowflake
              </CustomLink>,{' '}
              <CustomLink
                href="https://imc.com/"
                aria-label="IMC Trading"
                target="_blank"
                rel="noopener noreferrer"
              >
                IMC Trading
              </CustomLink>,{' '}
              <CustomLink
                href="https://twitter.com/"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </CustomLink>,{' '}

              <CustomLink
                href="https://www.research.ibm.com/artificial-intelligence/horizons-network/"
                aria-label="IBM AI Horizons"
                target="_blank"
                rel="noopener noreferrer"
              >
                IBM
              </CustomLink>, {' '}
              <CustomLink
                href="https://www.motorolasolutions.com/en_us.html"
                aria-label="Motorola Solutions"
                target="_black"
                rel="noopener noreferrer">Motorola Solutions</CustomLink>,
              and a host of other companies and research labs.
            </Description>

            <Description variants={item}>
              You can find some of my projects on{' '}
              <CustomLink
                href="https://github.com/rustom"
                aria-label="Rustom Ichhaporia GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </CustomLink>
              . You can also view my{' '}
              <CustomLink
                href="/Rustom Ichhaporia Resume.pdf"
                aria-label="Rustom Ichhaporia Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </CustomLink>
              . I'm searching for new full-time roles in software engineering, data science, and quantative trading for 2024.
            </Description>

            <Description variants={item}>
              I'd love for you to reach out to me about my work, roles, movie
              soundtracks, stand-up comedy, or anything else!
            </Description>
            <br />
            <SocialLinks variants={item}></SocialLinks>
            {/* <Cursor /> */}
          </Content>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}
