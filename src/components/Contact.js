
import styled from '@emotion/styled'
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const StyledBox = styled(Box) ({
    margin: "20px"
})

const Contact = () => {
  return (
    
    <StyledBox
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '348px', height: '44px' },
      }}
     
    >
        <Typography variant='h3'
            sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "36px",
                lineHeight:" 44px"
            }}
        >
            Contact Me</Typography>

      <div>
        <TextField
         
          id="outlined-error"
         
          placeholder="Hello World"
          helperText="Incorrect entry."
        />
        <TextField
         
         id="outlined-error"
        
         placeholder="Hello World"
         helperText="Incorrect entry."
       />
        
      </div>
    </StyledBox>
  )
}

export default Contact