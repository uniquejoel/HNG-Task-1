import ZuriInternship from '../images/ZuriInternship.png';
import I4G from '../images/I4G.png';
import Footertext from '../images/Footertext.png';
import styled from '@emotion/styled'
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const StyledBox = styled(Box) ({  
    paddingTop: "30px",
    paddingBottom: "30px"
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
          id="first_name"
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
         id="last_name"
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
         id="email"
        //  error
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
            marginBottom: '15px',
           
        }}
        rows={3}
        id="message"
          multiline
         placeholder="Send me a message and I'll reply you as soon as possible..."
        //  helperText="Incorrect entry."
       />
       </Box>

       <FormControlLabel 
        sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',
            marginBottom: '15px',
            color: '#475467'
        }}
       control={<Checkbox />} 
       label="You agree to providing your data to {name} who may contact you." />

       <Button id='btn__submit'
              sx={{
                width: "100%",
                background: '#1570EF',
                boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                borderRadius: '8px',
                color: '#ffffff',
                textTransform: "none",
                "&:hover": { backgroundColor: "#1570EF"}
            }}
       >Send Message</Button>

<Stack 
            sx={{
                display: "flex",
                flexDirection: {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"},
                marginTop: "30px",
                justifyContent: {xs: "", sm: "", md: "space-between", lg: "space-between", xl: "space-between"},
                padding: "30px 0px",
                gap: "10px",
            }}
          >
            <Box>
               <img src={ZuriInternship} alt="ZuriInternship" />
            </Box>
            <Box>
               <img src={Footertext} alt="Footertext" />
            </Box>
            <Box>
               <img src={I4G} alt="I4G" />
            </Box>
          </Stack>
    
  

    </StyledBox>
  )
}

export default Contact