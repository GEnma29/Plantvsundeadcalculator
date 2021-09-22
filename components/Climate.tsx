import React from 'react'
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Box,
    Text,
  } from "@chakra-ui/react"

const Climate = () => {
    return (
        <Box p={2} mb={['8','6','2','2']} borderWidth="1px" borderRadius="lg" >
        <Text>Today:</Text>
        <StatGroup p={2}>
        <Stat>
          <StatLabel>Bonus</StatLabel>
          <StatHelpText>Metal, Electro</StatHelpText>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Malus</StatLabel>
          <StatHelpText>none</StatHelpText>
          <StatHelpText>
            <StatArrow type="decrease" />
            0%
          </StatHelpText>
        </Stat>
      </StatGroup>
      </Box>
    )
}

export default Climate
