import { Avatar, Box, Stack, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';

import slack from '../images/slack.png';
import Icon from '../images/Icon.png';
import profile__img from '../images/profile__img.png';
import ZuriInternship from '../images/ZuriInternship.png';
import I4G from '../images/I4G.png';
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
            <Avatar alt="Remy Sharp" id="profile_img" src={profile__img}
                sx={{
                    height: "88px",
                    width: "88px"
                }}
            />
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
          <StyledButton>python Books</StyledButton>   
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton> Background Check For Coders </StyledButton>   
          </ContainerBox>

          <ContainerBox margin={2} gap={1} >
          <StyledButton>Design Books </StyledButton>   
          </ContainerBox>

          <SocialBox  gap={1} >
           
           <Button><Avatar alt="Remy Sharp" id="profile_img" src={slack} /></Button> 
           <Button><Avatar alt="Remy Sharp" id="profile_img" src={Icon} /></Button>  
         
            
          </SocialBox>

          <Stack direction="row" bgcolor="white" 
            sx={{
                display: "flex",
                marginTop: "30px",
                justifyContent: "space-between",
            }}
          >
            <Box>
               <img src={ZuriInternship} />
            </Box>
            <Box>
                height
            </Box>
            <Box>
               <img src={I4G} />
            </Box>
          </Stack>

        </Stack>
   
  )
}

export default Homepage;