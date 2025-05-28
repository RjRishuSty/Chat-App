import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedSquares = () => {
  const miniLaptop = useMediaQuery("(max-width:1000px)");
  const totalSquares = 9;

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: miniLaptop?'repeat(3, 70px)':'repeat(3, 100px)', 
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'background.primary',
      }}
    >
      {Array.from({ length: totalSquares }).map((_, index) => (
        <Box component={motion.div}
          key={index}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,           
            repeat: Infinity,    
            delay: index * 0.3,    
          }}
        >
          <Box
            sx={{
              width: miniLaptop?70:100,            
              height: miniLaptop?70:100,             
              borderRadius: 2,
              backgroundColor: '#A0C878',
              boxShadow: '0 0 10px rgba(248, 231, 246, 0.4)',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default AnimatedSquares;
