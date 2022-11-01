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
   
}) 

const SocialBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center"
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
          <Button variant="text" color='secondary'>Twitter Link</Button>

          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
            <Typography variant='h1' fontSize={20}>
            Zuri Team
            </Typography>
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
            <Typography variant='h1' fontSize={20}>
            Zuri Books
            </Typography>
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
            <Typography variant='h1' fontSize={20}>
            Python Books
            </Typography>
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
            <Typography variant='h1' fontSize={20}>
            Background Check For Coders
            </Typography>
          </ContainerBox>

          <ContainerBox margin={2} gap={1}  >
            <Typography variant='h1' fontSize={20}>
            Design Books
            </Typography>
          </ContainerBox>

          <SocialBox margin={2} gap={1} >
            <GitHub />
            <Avatar alt="Remy Sharp" id="profile_img" src="https://images.pexels.com/photos/11293719/pexels-photo-11293719.jpeg?auto=compress&cs=tinysrgb&w=600" />
            
          </SocialBox>

        </Stack>
   
  )
}

export default Homepage;