import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


function Design({ inputs }) {

    return (
        <>
            <Navbar inputs={inputs} />
        </>

    )
}

export default Design
