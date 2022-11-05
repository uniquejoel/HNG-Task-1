
import styled from '@emotion/styled'
import { TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const StyledBox = styled(Box) ({  
    border: "2px solid black",
    padding: "30px"
})

const StyledTextfield = styled(TextField) ({
    marginBottom: '25px',
    height: '44px'
})

const Styledstack = styled(Stack) ({
    
})

const Contact = () => {
  return (
    
    <StyledBox>
        <Typography variant='h3'
            sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "36px",
                lineHeight:" 44px",
                color: "#101828"
            }}
        >
            Contact Me</Typography>

            <Typography 
            sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight:" 30px",
                color: "#475467",
                marginBottom: "30px"
            }}
        >
            Hi there, contact me to ask me about anything you have in mind.</Typography>

      <Styledstack 
        sx={{
            display: "flex",
            flexDirection: {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"},
        }}
      >
        <Box>
      <Typography 
            sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight:" 20px",
                color: "#344054"
            }}
        >
            First name</Typography>
        <StyledTextfield
            sx={{
                width: {xs: '100%', sm: '100%', md: '348px', lg: '348px', xl: '348px'},
                marginRight: '35px'
            }}
          id="outlined-error"
          placeholder="Hello World"
        //   helperText="Incorrect entry."
        />
        </Box>

        <Box>
        <Typography 
            sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight:" 20px",
                color: "#344054"
            }}
        >
            Last name</Typography>
        <StyledTextfield
         sx={{
            width: {xs: '100%', sm: '100%', md: '348px', lg: '348px', xl: '348px'}
        }}
         id="outlined-error"
         placeholder="Hello World"
        //  helperText="Incorrect entry."
       />
       </Box>
      
        
      </Styledstack>

      <Box>
        <Typography 
            sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight:" 20px",
                color: "#344054"
            }}
        >
            Email</Typography>
        <TextField
         sx={{
            width: "100%",
            marginBottom: '20px',
           
        }}
         id="outlined-error"
         placeholder="youremail@gmail.com"
        //  helperText="Incorrect entry."
       />
       </Box>


       <Box>
        <Typography 
            sx={{
                fontFamily: 'Inter',
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight:" 20px",
                color: "#344054"
            }}
        >
            Message</Typography>
        <TextField
         sx={{
            width: "100%",
            marginBottom: '35px',
           
        }}
        rows={3}
        id="standard-multiline-static"
          multiline
         placeholder="Send me a message and I'll reply you as soon as possible..."
        //  helperText="Incorrect entry."
       />
       </Box>
    
  

    </StyledBox>
  )
}

export default Contact