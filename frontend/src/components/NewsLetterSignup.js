import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from "axios"

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/subscribe', { email });
            setSubscribed(true);
        } catch (error) {
            console.error('Error subscribing:', error);
        }
    };


    return (
        <Box  p={4} display="flex" alignItems="center" justifyContent="center">
            {subscribed ? (
                <Typography variant="h6">Thank you for subscribing!</Typography>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center',backgroundColor:"#F7F9FA",padding:"48px",width:"75%",boxShadow:
                "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset" }}>
                    <Typography variant="subtitle1" sx={{ marginRight: '16px' }}>Subscribe to get notifications</Typography>
                    <TextField
                        size='small'
                        type="email" 
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{ flexGrow: 4, marginRight: '16px' }}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Subscribe
                    </Button>
                </form>
            )}
        </Box>
    );
};

export default NewsletterSignup;
