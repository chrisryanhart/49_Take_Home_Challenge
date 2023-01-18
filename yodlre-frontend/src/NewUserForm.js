import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import YodlrApi from './api';

const useStyles = makeStyles({
    root: {
        minWidth: 350,
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

    const history = useHistory();

    const INITIAL_STATE = {email:'',password:'',firstName:'',lastName:''}

    const [newUserFormData,setNewUserFormData] = useState(INITIAL_STATE);


    const onSubmit = async (e) => {
        e.preventDefault();
        let res = await YodlrApi.register(newUserFormData);
        setNewUserFormData(INITIAL_STATE);

        let userId = res.id;
        // change to redirect to user profile if time permits
        history.push(`/users`);
    }

    const handleChange = (e) => {
        const {value,name} = e.target;
        setNewUserFormData(data => ({...data, [name]:value}));
    }

    return (
        <Box style={{ display:'flex', justifyContent:'center' }} mt={5} ml={20} mr={20}>
            
            <Card  className={classes.root}>
                <CardContent >
                    <h5><b>New User Signup:</b></h5>
                    <form>
                        <div>
                            <label htmlFor='email'>Email: </label>
                            <input onChange={handleChange} value={newUserFormData.email} name='email' id='email'/>
                        </div>
                        <div>
                            <label htmlFor='password'>Password: </label>
                            <input onChange={handleChange} value={newUserFormData.password} name='password' id='password'/>
                        </div>
                        <div>
                            <label htmlFor='firstName'>First Name: </label>
                            <input onChange={handleChange} value={newUserFormData.firstName} name='firstName' id='firstName'/>
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last Name: </label>
                            <input onChange={handleChange} value={newUserFormData.lastName} name='lastName' id='lastName'/>
                        </div>
                        <Button onClick={onSubmit} variant='contained' size="small">Submit</Button>
                    </form >
                </CardContent>
            </Card>
        </Box>

    );
}
