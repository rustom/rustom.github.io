import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { IconContext } from 'react-icons';
import { siteMetadata } from '../../gatsby-config';
import Icon from '@components/icons';
import { mixins } from '@styles';

const SocialLinksStyle = styled(motion.div)`
  ${mixins.whiteLink};
  font-size: 1.5em;
  width: 100%;
  justify-content: center;
  
  max-width: 500px;

  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 60px;
`;

const StyledLink = styled(motion(OutboundLink))`
  flex-basis: 25%;
  margin: auto;
  padding: 8px;
  border-radius: 10px;
`;

export default function SocialLinks({ variants }) {
  return (
    <SocialLinksStyle>
      <IconContext.Provider value={{ size: '30px' }}>
        {siteMetadata.socialMedia &&
          siteMetadata.socialMedia.map(({ url, name }) => (
            <StyledLink
              variants={variants}
              href={
                name === 'Email'
                  ? 'mailto:' +
                    url +
                    '?subject=A personalized, funny message for Rustom Ichhaporia'
                  : url
              }
              aria-label={name}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={name} />
            </StyledLink>
          ))}
      </IconContext.Provider>
    </SocialLinksStyle>
  );
}
