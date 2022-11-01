import { Avatar, Box, Stack, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/system';

import slack from '../images/slack.png';
import Icon from '../images/Icon.png';
import profile__img from '../images/profile__img.png';
import ZuriInternship from '../images/ZuriInternship.png';
import I4G from '../images/I4G.png';
import Footertext from '../images/Footertext.png';
import React from 'react'

const UserBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    
  })

const ContainerBox = styled(Box)({
    width: "100%",
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
 
         <Stack direction="column" bgcolor="white" width="100%">
         <UserBox margin={2} gap={1} >
            <Avatar alt="profile__img" id="profile__img" src={profile__img}
                sx={{
                    height: "88px",
                    width: "88px"
                }}
            />
            <Typography id="twitter" variant='h3' fontSize={20} mt={1.5}>
            Sunday Joel
            </Typography>
            <Typography id="slack" variant='h3' fontSize={20} mt={1.5}
                sx={{
                    display: "none"
                }}
            >
            Uniquejoel
            </Typography>
          </UserBox>
          
          <ContainerBox  margin={2} gap={1} >
          <StyledButton id='twitter_link' href='https://twitter.com/joelsunday_'>twitter link</StyledButton>

          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton id='btn__zuri' href='https://training.zuri.team/'>  Zuri Team</StyledButton>     
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton id='books' href='http://books.zuri.team'> Zuri Books</StyledButton>   
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=<Uniquejoel>' >python Books</StyledButton>   
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
          <StyledButton id='pitch' href='https://background.zuri.team'> Background Check For Coders </StyledButton>   
          </ContainerBox>

          <ContainerBox margin={2} gap={1} >
          <StyledButton id='book__design' href='https://books.zuri.team/design-rules'>Design Books </StyledButton>   
          </ContainerBox>

          <SocialBox  gap={1} >
           
           <Button><Avatar alt="Remy Sharp" id="profile_img" src={slack} /></Button> 
           <Button><Avatar alt="Remy Sharp" id="profile_img" src={Icon} /></Button>  
         
            
          </SocialBox>

          <Stack 
            sx={{
                display: "flex",
                flexDirection: {xs: "column", sm: "column", md: "row", lg: "row", xl: "row"},
                marginTop: "30px",
                justifyContent: {xs: "", sm: "", md: "space-between", lg: "space-between", xl: "space-between"},
                padding: "48px 0px",
                gap: "10px",

            }}
          >
            <Box>
               <img src={ZuriInternship} />
            </Box>
            <Box>
               <img src={Footertext} />
            </Box>
            <Box>
               <img src={I4G} />
            </Box>
          </Stack>

        </Stack>
   
  )
}

export default Homepage;