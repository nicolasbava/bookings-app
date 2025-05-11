'use client'
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Box } from '@mui/material';

const CustomHorizontalScrollbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  // Update scrollbar dimensions and position
  const updateScrollbar = useCallback(() => {
    if (containerRef.current) {
      setScrollLeft(containerRef.current.scrollLeft);
      setScrollWidth(containerRef.current.scrollWidth);
      setClientWidth(containerRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    updateScrollbar();
    window.addEventListener('resize', updateScrollbar);
    return () => window.removeEventListener('resize', updateScrollbar);
  }, [updateScrollbar]);

  // Handle container scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      setScrollLeft(container.scrollLeft);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle thumb drag start
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startX.current = e.clientX;
    startScrollLeft.current = scrollLeft;
  };

  // Handle thumb drag movement
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current && thumbRef.current) {
        const trackRect = thumbRef.current.parentElement!.getBoundingClientRect();
        const deltaX = e.clientX - startX.current;
        const trackWidth = trackRect.width - thumbRef.current.offsetWidth;
        const scrollRatio = deltaX / trackWidth;

        containerRef.current.scrollLeft = startScrollLeft.current + scrollRatio * (scrollWidth - clientWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, scrollLeft, scrollWidth, clientWidth]);

  const scrollbarWidth = (clientWidth / scrollWidth) * clientWidth;
  const scrollbarLeft = (scrollLeft / scrollWidth) * clientWidth;

  const childrenArray = React.Children.toArray(children);

  const shouldHideNavBar = React.isValidElement(childrenArray[0]) && React.Children.count(childrenArray[0].props.children) <= 3;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        marginBottom: '64px'
      }}
    >
      {/* Scrollable Content */}
      <Box
        ref={containerRef}
        sx={{
          flex: 1,
          overflowX: {xs: 'scroll', xl: shouldHideNavBar ? 'hidden'  :  'scroll'} ,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {children}
      </Box>

      {/* Custom Scrollbar Track */}
      <Box
        sx={{
          height:  {xs: '4px', xl: shouldHideNavBar ? '0px' : '4px'},
          backgroundColor: '#CDD4E5',
          borderRadius: '4px',
          position: 'relative',
          marginTop: '24px',
        }}
      >
        {/* Custom Scrollbar Thumb */}
        <Box
          ref={thumbRef}
          sx={{
            height:{xs:'16px', xl:  shouldHideNavBar ? '0px' : '16px'},
            backgroundColor: '#CDD4E5',
            borderRadius: '4px',
            position: 'absolute',
            transition: 'background-color 0.2s',
            width: `${scrollbarWidth}px`,
            left: `${scrollbarLeft}px`,
            cursor: 'grab',
            marginTop: '-7px',
            '&:hover': { backgroundColor: '#CDD4W3' },
            '&:active': { cursor: 'grabbing' },
          }}
          onMouseDown={handleThumbMouseDown}
        />
      </Box>
    </Box>
  );
};

export default CustomHorizontalScrollbar;
