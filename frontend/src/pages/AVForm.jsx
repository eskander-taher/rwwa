import { Button, Card, CardContent, Typography, Box, Input } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'


const AVForm = () => {

const inputStyle={
  sx: {
      borderRadius:'20px', 
      backgroundColor:'#F1F3F5',
      textAlign:'right',
      p:'15px'

  }
}
  return (
    <Stack  direction={{xs:'column', md:'row'}} height={{xs:'900px',md:'700px'}} justifyContent='center' alignItems='center' spacing={{xs:10, md:30}}>
      
      <Card sx={{height:'500px', width:{md:'424px'}, borderRadius:'50px', boxShadow:'5px 5px 20px  lightgray'}}>
          <CardContent  sx={{display:'flex', flexDirection:'column',  justifyContent:'center', alignItems:'center', p:'30px 0'}}>
            <Typography fontSize='22px' color='#343A40' textAlign='center'>اضافة اصدار</Typography>
            <Box sx={{
              width: '100px',
              height: '10px',
              background: '#256C86',
              borderRadius: '50px',
              mb:'20px'}}></Box>
            <Box component="form"
      sx={{
        '& > :not(style)': { m: 1, width: {xs:'250px', md:'300px'} }, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
              <Input  id="" placeholder='رقم الاصدار' type="text"  fullWidth inputProps={inputStyle} disableUnderline/>
              <Input id=""  type="file"  fullWidth inputProps={inputStyle} disableUnderline/>
              <Input id="" placeholder='الوصف'  type="text"   fullWidth  minRows={4}  multiline inputProps={inputStyle} disableUnderline/>
            </Box>
            
            <Button  sx={{ height:'50px', width:'100px', backgroundColor:'#DF5E60', color:'#fff', borderRadius:'50px', fontSize:'22px', mt:'20px', '&:hover':{
              backgroundColor:'#1C6580'
            }}}>اضافة</Button>
          </CardContent>
      </Card>
    </Stack>
  )
}

export default AVForm