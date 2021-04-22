import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { theme } from '@styles';

const CursorDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.accent};
  z-index: 2000;
  user-select: none;
  pointer-events: none;

  @media (max-width: 800px) {
    display: none;
  }
`;

export default function Cursor() {
  useLayoutEffect(() => {
    gsap.set('.cursor', { xPercent: -50, yPercent: -50 });

    var cur = document.querySelector('.cursor');
    var pageLinks = document.querySelectorAll('a');
    let isOnElement = false;

    window.addEventListener('mousemove', (e) => {
      if (!isOnElement) {
        gsap.to(cur, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.05,
        });
      }
    });

    // window.addEventListener('mousedown', (e) => {
    //   if (!isOnElement) {
    //     gsap.to(cur, { width: '20px', height: '20px' });
    //   }
    // });

    // window.addEventListener('mouseup', () => {
    //   if (!isOnElement) {
    //     gsap.to(cur, { width: '15px', height: '15px' });
    //   }
    // });

    const highlightLink = (e) => {
      var boundingRect = e.getBoundingClientRect();
      isOnElement = true;
      gsap.to(cur, {
        x: boundingRect.x + boundingRect.width / 2,
        y: boundingRect.y + boundingRect.height / 2,
        width: boundingRect.width + 15,
        height: boundingRect.height + 15,
        borderRadius: '12px',
        background: theme.colors.accent,
        zIndex: '-1',
      });
    };

    pageLinks.forEach((link) =>
      link.addEventListener('mouseenter', highlightLink.bind(null, link, false))
    );

    const unHighlightLink = () => {
      isOnElement = false;
      gsap.to(cur, {
        width: 15,
        height: 15,
        borderRadius: '50%',
        zIndex: 'auto',
      });
    };

    pageLinks.forEach((link) =>
      link.addEventListener('mouseleave', unHighlightLink)
    );
  }, []);

  return <CursorDiv className="cursor" />;
}
