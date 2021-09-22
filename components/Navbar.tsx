import React from 'react'
import {Flex,Box,ColorMode,Text} from '@chakra-ui/react'
import Darkmode  from '../components/Darkmode'
const Navbar = () => {
    return (
        <Flex
        align="center"
        justifyContent="space-between"
        h="50px"
        w="100vw"
        bg="gray.900"
        p={2}
        >
           <Text p={2} color="white">PlantvsUndeadCalculator</Text>
           <Darkmode />
        </Flex>
    )
}

export default Navbar
