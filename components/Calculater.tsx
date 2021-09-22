import React from "react";
import {
  Flex,
  Box,
  Button,
  Input,
  Heading,
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  FormHelperText,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
//import PlantItem from "./PlantItem";
import Climate from "../components/Climate";
import { Formik, Form, Field } from "formik";
import PlantItem from "./PlantItem";
const Calculater = () => {
  const typeofBonus= "increase"
  const Bonus= 0.30

  const Plants = [];

  const Frombackground = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex flexWrap="wrap" justify="center" m={4} >
      <Box m={2} minW="250px">
      <Climate />
      {Plants.map((Plant,index)=>{
        <PlantItem index={index} gain={Plant.GainsperHour} typeofbonus={typeofBonus} bonus={Bonus}  />

      })}
      </Box>
      <Formik
        initialValues={{
          le: 250,
          hour: 72,
          element:"",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const LEXhour = values.le / values.hour;
            const LEXDay = LEXhour * 24;
            const Plant = {
              GainsperHour: LEXhour.toFixed(2),
              GainperDay: Math.round(LEXDay),
              LE: values.le,
              Hours: values.hour,
              Element: values.element,
            };
            Plants.push(Plant);
            console.log(Plants);
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Box flexDirection="column" bg={Frombackground} p={4} rounded={8}>
              <Heading mb={6}>Calculate PVU </Heading>
              <Box mt={2}>
                <Field name="le">
                  {({ field, form }) => (
                    <FormControl isRequired>
                      <FormLabel p={2} htmlFor="le">
                        LE
                      </FormLabel>
                      <Input {...field} id="le" placeholder="250" />
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Box m={2}>
                <Field name="hour">
                  {({ field, form }) => (
                    <FormControl isRequired>
                      <FormLabel p={2} htmlFor="hour">
                        Hours
                      </FormLabel>
                      <Input
                        {...field}
                        id="hour"
                        placeholder="hour"
                        onChange={props.handleChange}
                      />
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Text m={2}>Plant Element</Text>
              <Select
                name="element"
                value={props.values.element}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              >
                <option value="dark">Dark</option>
                <option value="electro">Electro</option>
                <option value="fire">Fire</option>
                <option value="water">water</option>
                <option value="ligth">Ligth</option>
                <option value="Parasite">Parasite</option>
                <option value="metal">Metal</option>
                <option value="wind">Wind</option>
              </Select>
              <Flex justify="center">
                <Button
                  mt={4}
                  colorScheme="teal"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Add Plant
                </Button>
              </Flex>
            </Box>
          </Form>
        )}
      </Formik>
      <Box mt={2}>
      {Plants.map((Plant,index)=>{
        <PlantItem index={index} gain={Plant.GainsperHour} typeofbonus={typeofBonus} bonus={Bonus}  />

      })}
      </Box>
    </Flex>
  );
};

export default Calculater;
