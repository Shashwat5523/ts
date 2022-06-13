import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material'
import './formcc.css'


const Form = () => {
  return (
    <div className="Form"> 
      <Grid>
        <Card style={{ maxWidth: 800, padding: "20px 5px", margin: "0 auto" , maxHeight: 1000, color: "blue",background: "linear-gradient(180deg, rgb(163, 188, 163) 0%, aqua 100%)"}}>
          <CardContent>
            <Typography gutterBottom variant="h4">
              Details
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the necessary details and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

export default Form
