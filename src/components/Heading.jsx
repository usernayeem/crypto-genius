import React from 'react'
import style from './heading.module.css'
import { Typography } from '@mui/material'

const Heading = () => {
  return (
    <>
      <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 25, textAlign: 'center', mt: 1 }}><span className={style.mania}>CRTPTO GENIUS</span>
      </Typography>
    </>
  )
}

export default Heading
