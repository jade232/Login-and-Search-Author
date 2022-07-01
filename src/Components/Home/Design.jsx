import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'


function Design({ inputs }) {

    return (
        <Container>
            <Box sx={{ flexGrow: 2 }} align="center">
                <AppBar position="static" sx={{ p: -1 }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* <Button variant="text">Subscribe</Button> */}
                        {/* <Typography align='center' gutterBottom variant="h5">Blog</Typography> */}
                        <Typography align='center' gutterBottom variant="h5">Welcome {inputs.userName} ..!</Typography>
                        <Box sx={{ p: 2 }}>
                            {/* <Button color="info"><SearchIcon sx={{ '&:hover': { borderRadius : '50%' , color : 'grey'}}} /></Button> */}
                            <Link to="/"><Button variant="outlined">LogOut</Button></Link>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Divider />
            </Box>
        </Container>
    )
}

export default Design
