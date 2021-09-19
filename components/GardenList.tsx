import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
const GardenList = ({Plants}) => {
  return (
    <List spacing={3}>
      {Plants.map((Plant) => {
        <ListItem>
          <ListIcon as={Plant.icon} color={Plant.color} />
          {Plant.gain}
        </ListItem>;
      })}
    </List>
  );
};

export default GardenList;
