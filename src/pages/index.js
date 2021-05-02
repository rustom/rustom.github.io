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
  margin-top: 150px;
  // margin-top: 12vw;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 60px;
  box-size: border-box;
  position: relative;
`;

const Description = styled(motion.p)``;

const CustomLink = styled(motion(OutboundLink))``;

const container = {
  beginning: {},
  final: { transition: { delayChildren: 2.0, staggerChildren: 0.1 } },
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
            <LogoAnimation />
            <br />
            <Description variants={item}>
              Hi, I'm Rustom Ichhaporia!
            </Description>

            <Description variants={item}>
              Welcome to my home on the web.
            </Description>

            <Description variants={item}>
              I'm currently a machine learning intern at{' '}
              <CustomLink
                href="https://twitter.com/"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </CustomLink>
              , where I use data to help promote socially healthy interactions
              for everyone. I'm also an incoming artificial intelligence
              researcher at{' '}
              <CustomLink
                href="https://www.research.ibm.com/artificial-intelligence/horizons-network/"
                aria-label="IBM AI Horizons"
                target="_blank"
                rel="noopener noreferrer"
              >
                IBM
              </CustomLink>
              's Center for Cognitive Computing Systems Research (
              <CustomLink
                href="https://www.c3sr.com/"
                aria-label="Center for Cognitive Computing Systems Research"
                target="_blank"
                rel="noopener noreferrer"
              >
                C3SR
              </CustomLink>
              ).
            </Description>

            <Description variants={item}>
              I study computer science + statistics at the University of
              Illinois at Urbana-Champaign (
              <CustomLink
                href="https://cs.illinois.edu/"
                aria-label="UIUC Computer Science"
                target="_blank"
                rel="noopener noreferrer"
              >
                UIUC
              </CustomLink>
              ), where I'll be graduating in 2023. My work focuses on the ways
              in which data science can be used to empower social networks. To
              this end, I've completed 7 academic and corporate internships, and
              been published and presented research internationally 4 times.
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
              . I'm searching for new roles for fall of 2021 and all of 2022.
            </Description>

            <Description variants={item}>
              I'd love for you to reach out to me about my work, roles, movie
              soundtracks, stand-up comedy, or anything else!
            </Description>
            <br />
            <SocialLinks variants={item}></SocialLinks>
            <Cursor />
          </Content>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}
