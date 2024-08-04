import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h4">
                    Welcome to the Home Page
                </Typography>
            </Box>
        </Container>
    );
};

export default HomePage;
