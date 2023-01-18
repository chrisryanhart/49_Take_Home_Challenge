import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AccordionDetails } from '@material-ui/core';
import YodlrApi from './api';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



export default function UserStatusCard({userDetails, allUsers, deleteUser}) {
  const classes = useStyles();

  const accountStatus = userDetails.state === 'pending'? true : false;

  const [isPending, setIsPending] = useState(accountStatus);

  const handleDelete = async () => {

    await YodlrApi.deleteUser(userDetails.id);
    deleteUser(userDetails.id);
  }

  const handleApproval = async () => {
    
    await YodlrApi.approveUser(userDetails,userDetails.id);
    setIsPending(false);
  }

  return (
    <Box style={{ display:'flex', justifyContent:'center' }} mt={2} ml={20} mr={20}>
      <Card  style={{width: '50px', border: "1px solid black" }}  className={classes.root}>
        <CardContent>
          {isPending && <Typography variant="h5" component="h2">
            Action Required!  Approval pending!
          </Typography>}
          <Typography variant="body2" component="p">
            Email: {userDetails.email}
            <br />
            First Name: {userDetails.firstName}
            <br />
            Last Name: {userDetails.lastName}
            
          </Typography>
        </CardContent>
        <CardActions>
          {isPending && <Button onClick={handleApproval} variant='contained' size="small">Approve</Button>}
          <Button onClick={handleDelete} variant='contained' size="small">Delete</Button>
        </CardActions>
      </Card>

    </Box>
  );
}