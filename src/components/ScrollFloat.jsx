import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Reactbits.css';

gsap.registerPlugin(ScrollTrigger);

const wrapTextNodes = (node) => {
  if (typeof node === 'string') {
    return node.split('').map((char, i) => (
      <span className="char" key={i}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  } else if (Array.isArray(node)) {
    return node.map((child, i) => wrapTextNodes(child));
  } else if (node.props && node.props.children) {
    return (
      <node.type {...node.props} key={node.key}>
        {wrapTextNodes(node.props.children)}
      </node.type>
    );
  } else {
    return node;
  }
};

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const charElements = el.querySelectorAll('.char');
    if (!charElements.length) return;

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>
        {wrapTextNodes(children)}
      </span>
    </h2>
  );
};

export default ScrollFloat;
