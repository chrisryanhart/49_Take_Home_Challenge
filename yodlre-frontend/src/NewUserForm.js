import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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

export default function NewUserForm() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Box mt={5} ml={20} mr={20}>
        
        <Card className={classes.root}>
            <CardContent>
            <h6>Signup below:</h6>
                <form>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        <input name='email' id='email'/>
                    </div>
                    <div>
                        <label htmlFor='email'>Password: </label>
                        <input name='email' id='email'/>
                    </div>

                </form>


            </CardContent>
            <CardActions>
                <Button variant='contained' size="small">Submit</Button>
            </CardActions>
        </Card>
    </Box>

  );
}
