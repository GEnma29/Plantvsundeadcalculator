import React from 'react'
import {Flex,Box,ColorMode,Text} from '@chakra-ui/react'
import Darkmode  from '../components/Darkmode'
const Navbar = () => {
    return (
        <Flex
        align="center"
        justifyContent="space-between"
        h="10vh"
        w="100vw"
        bg="gray.900"
        >
           <Text p={2} color="white">PlantvsUndeadCalculator</Text>
           <Darkmode />
        </Flex>
    )
}

export default Navbar
