import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import hackerLogo from '../public/assets/44171-hacker.json';
import { Box, Text } from '@chakra-ui/layout';

const NoAccess = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector('#hacker'),
            animationData: hackerLogo
        });
    }, []);
    return (
        <Box textAlign="center" width="100%" height="100vh">
            <div id="hacker" style={{ width: 250, height: 250, margin: '1% auto' }} />
            <Text mt={0}>{"You're not supposed to be here"}</Text>
            <Text>If you already have an account login first</Text>
        </Box>
    );
};

export default NoAccess;
