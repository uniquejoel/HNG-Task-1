import { Avatar, Box, Stack, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { GitHub } from '@mui/icons-material'
import React from 'react'

const UserBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  })

const ContainerBox = styled(Box)({
    width: "1152px",
    height: "76px",
    backgroundColor: "#EAECF0",
    border: "1px solid #EAECF0",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#000000"
   
}) 

const SocialBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
  })

const StyledButton = styled(Button)({
    height: "100%",
    width: "100%",
   color: "#000000",
    fontSize: "18px"
})

const Homepage = () => {
  return (
 
         <Stack direction="column" bgcolor="white">
         <UserBox margin={2} gap={1} >
            <Avatar alt="Remy Sharp" id="profile_img" src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <Typography id="twitter" variant='span' fontSize={20} mt={1.5}>
            Annete Black
            </Typography>
          </UserBox>
          
          <ContainerBox  margin={2} gap={1} >
          <StyledButton>twitter link</StyledButton>

          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton>  Zuri Team</StyledButton>     
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton>  Zuri Books</StyledButton>   
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton>python Books</StyledButton>   >
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton> Background Check For Coders </StyledButton>   
          </ContainerBox>

          <ContainerBox margin={2} gap={1} >
          <StyledButton>Design Books </StyledButton>   
          </ContainerBox>

          <SocialBox margin={2} gap={1} >
            <GitHub />
            <Avatar alt="Remy Sharp" id="profile_img" src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=600" />
            
          </SocialBox>

        </Stack>
   
  )
}

export default Homepage;