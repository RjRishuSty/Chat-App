import { Accordion, AccordionDetails, AccordionSummary, Chip, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { flexItemCenter } from '../defaultStyle';

const Accordions = () => {
  const account = [
    { label: "Member Since", id: "member", status: "Helo" },
    { label: "Account Status", id: "account", status: "Active" },
  ];
  return (
    <Accordion sx={{ width: '100%', backgroundColor: 'background.main', p: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span" variant="h5" sx={{ fontWeight: 700 }}>Account information</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {account.map((item) => (
            <React.Fragment key={item.id}>
              <Grid size={{ xs: 7, sm: 7, md: 7 }} sx={{ borderBottom: 1, p: 2 }}>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600 }}
                >
                  {item.label}
                </Typography>
              </Grid>
              <Grid size={{ xs: 5, sm: 5, md: 5 }} sx={{ borderBottom: 1, p: 2, ...flexItemCenter }}>
                <Chip label={item.status} variant='body1' sx={{ background: item.status === 'Active' ? "green" : "text.primary", color: item.status === 'Active' ? "white" : "text.primary", }} />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default Accordions