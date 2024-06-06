import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { GlobalStyle, theme } from '@styles';
import { Head, LogoAnimation, SocialLinks } from '@components';

const Wrapper = styled(motion.div)`
  width: 100vw;
  max-height: 100vh;
`;

const Content = styled(motion.main)`
  margin: auto;
  margin-top: 8vw;
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
            {/* <br /> */}
            <Description variants={item}>
              Hi, I'm Rustom Ichhaporia!
            </Description>

            <Description variants={item}>
              Welcome to my home on the web.
            </Description>

            <Description variants={item}>
              Currently, I'm working on the Developer Productivity Engineering
              team at{' '}
              <OutboundLink href="https://snowflake.com" aria-label="Snowflake">
                Snowflake
              </OutboundLink>
              , where I develop tools to improve our internal developer
              experience. Previously, I've spent time at{' '}
              <OutboundLink href="https://imc.com" aria-label="IMC Trading">
                IMC Trading
              </OutboundLink>
              ,{' '}
              <OutboundLink href="https://twitter.com" aria-label="Twitter">
                Twitter
              </OutboundLink>
              , and{' '}
              <OutboundLink href="https://ibm.com" aria-label="IBM">
                IBM
              </OutboundLink>
              , as well as a host of other companies and research labs.
            </Description>

            <Description>
              You can find some of my projects on{' '}
              <OutboundLink href="https://github.com/rustom">
                GitHub
              </OutboundLink>{' '}
              and my research on{' '}
              <OutboundLink href="https://scholar.google.com/citations?user=fhRRnW8AAAAJ">
                Google Scholar
              </OutboundLink>
              .
            </Description>

            <Description>
              You can also view my{' '}
              <OutboundLink href="/Rustom_Ichhaporia_Resume.pdf">
                resume
              </OutboundLink>{' '}
              and connect with me on{' '}
              <OutboundLink href="https://www.linkedin.com/in/rustom-ichhaporia/">
                LinkedIn
              </OutboundLink>
              .
            </Description>

            <Description>
              I'm always open to new opportunities in software engineering and
              data science! I'd love for you to reach out to me at{' '}
              <OutboundLink href="mailto:contact@rustom.dev?subject=Hi Rustom!">
                contact@rustom.dev
              </OutboundLink>
              !
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
