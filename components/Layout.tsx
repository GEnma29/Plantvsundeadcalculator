import React from 'react'
import {Flex,Box} from '@chakra-ui/react'
import Navbar from './Navbar'
export const Layout = ({children}) => {
    return (
        <Flex 
        flexDirection="column"
        minH="100vh"
        w="100vw"
        >
            <Navbar />
            <Flex 
            align="center"
            justify="center"
            w="100vw"
            h="90vh"
            >
            {children}
            </Flex>
        </Flex>
    )
}
