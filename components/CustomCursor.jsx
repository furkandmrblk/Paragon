import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import * as color from '../theme/GlobalColors';
import * as typeface from '../theme/GlobalFonts';

export default function Cursor() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    document.addEventListener('mousemove', (e) => {
      if (cursorRef.current == null) return;
      cursorRef.current.classList.add('custom-cursor');
      cursorRef.current.setAttribute(
        'style',
        'top: ' + e.clientY + 'px; left: ' + e.clientX + 'px;'
      );
      document.addEventListener('click', () => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.add('expand');
        setTimeout(() => {
          if (cursorRef.current == null) return;
          cursorRef.current.classList.remove('expand');
        }, 500);
      });
      document.body.addEventListener('mouseleave', () => {
        if (cursorRef.current == null) return;
        cursorRef.current.classList.remove('custom-cursor');
      });
    });
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
}
