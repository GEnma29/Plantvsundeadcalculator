import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
const PlantItem = ({
  index,
  gain,
  bonus,
  typeofbonus,
}) => {
  return (
    <Stat>
      <StatLabel>{`Plant ${index}`}</StatLabel>
      <StatNumber>{`Gain per Hour ${gain}`}</StatNumber>
      <StatHelpText>
        <StatArrow type={typeofbonus} />
        {bonus}%
      </StatHelpText>
    </Stat>
  );
};

export default PlantItem;
