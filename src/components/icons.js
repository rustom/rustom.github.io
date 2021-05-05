import React from 'react';
import styled from 'styled-components';
import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithubAlt,
  FaInstagram,
  FaMediumM,
  FaSpotify,
  FaTwitter,
} from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { MdLink } from 'react-icons/md';

const IconStyle = styled.div`
  * {
    vertical-align: bottom;
  }
`;

const IconSwitch = ({ name }) => {
  switch (name) {
    case 'Email':
      return <FaEnvelope />;
    case 'LinkedIn':
      return <FaLinkedinIn />;
    case 'GitHub':
      return <FaGithubAlt />;
    case 'Scholar':
      return <SiGooglescholar />;
    case 'Medium':
      return <FaMediumM />;
    case 'Twitter':
      return <FaTwitter />;
    case 'Instagram':
      return <FaInstagram />;
    case 'Spotify':
      return <FaSpotify />;
    case 'Link':
      return <MdLink />;
    default:
      return <FaEnvelope />;
  }
};

export default function Icon({ name }) {
  return (
    <IconStyle>
      <IconSwitch name={name} />
    </IconStyle>
  );
}
