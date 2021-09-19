import React from "react";
import {
  Flex,
  Box,
  Button,
  Input,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import GardenList from "./GardenList";
const Calculater = () => {
  const Plants = [];

  const Frombackground = useColorModeValue("gray.200", "gray.700");

  function validateLE(LE: number) {
    let error;
    if (!LE) {
      error = "LE is required";
    } else if (LE < 100) {
      error = "the number will be > 100 LE😱";
    }
    return error;
  }
  return (
    <Flex flexDirection="column" p={4}>
      <Formik
        initialValues={{ 
          LE: 200,
          hour:72 
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            const Plant={
              'LE':values.LE,
              'Hours':values.hour
            }
            alert(JSON.stringify(Plant, null, 2))
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
         {(props) => (
        <Form  >
          <Box flexDirection="column" bg={Frombackground} p={4} rounded={8}>
            <Heading mb={6}>Calculate PVU </Heading>
            <Heading size="md">Plant</Heading>
            <Box display="flex" flexDirection="row">
              <Box display="flex" flexDir="column" p={2}>
                <Field name="LE" validate={validateLE}>
                  {({ field}) => (
                    <FormControl id="LE" isRequired>
                      <FormLabel htmlFor="LE">LE</FormLabel>
                      <Input {...field} id="LE" placeholder="250" />
                    </FormControl>
                  )}
                </Field>
              </Box>
              <Box display="flex" flexDir="column" p={2}>
              <Field name="hour" validate={validateLE}>
                  {({ field}) => (
                    <FormControl id="hour-plant" isRequired>
                      <FormLabel htmlFor="Hours">Hours</FormLabel>
                      <Input {...field} id="Hours" placeholder="72" />
                    </FormControl>
                  )}
                </Field>
              </Box>
            </Box>
            <Flex justify="center">
            <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
            </Flex>
          </Box>
        </Form>
        )}
      </Formik>
      <Box m={2}>
        <GardenList Plants={Plants} />
      </Box>
    </Flex>
  );
};

export default Calculater;
