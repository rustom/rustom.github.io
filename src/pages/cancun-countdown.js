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
//   max-width: ${(props) => props.theme.sizes.maxWidth};
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
//   align-self: flex-start;
align-self: center;
font-size: 3rem;
`;

const CustomLink = styled(motion(OutboundLink))``;

const TimeDisplay = styled(motion.p)`
    align-self: center;
    font-size: 4rem;
    font-weight: 700;
    color: #fff;
`;

const container = {
    beginning: {},
    final: { transition: { staggerChildren: 1 } },
    exit: { opacity: 0 },
};
const item = {
    beginning: { opacity: 0, y: 50, scale: 2.0 },
    final: { opacity: 1, y: 0, scale: 1.0 },
};

export default function CancunCountdown() {
    var countDownDate = new Date("Oct 14, 2023 12:14:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

    return (
        <>
            <Head />
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Wrapper>
                    <Content variants={container} initial="beginning" animate="final">
                        <Description variants={item}>
                            Cancun Countdown
                        </Description>
                        <TimeDisplay variants={item} id="demo" />
                    </Content>
                </Wrapper>
            </ThemeProvider>
        </>
    );
}
