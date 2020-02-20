import React, { Component } from 'react';
 import {StyleSheet,View} from 'react-native'

import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from 'native-base';

export default class Login  extends Component {
  render() {
    return (
      <Container  >
        {/* <Header>
          <Body>
            <Title>Besy  
              
               App Ever!</Title>
          </Body>
        </Header> */}
        <Form>
          <FormItem floatingLabel>
            <Label>Email  </Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>

          <Button  style={{ paddingBottom: 4 }}>
            <Text> Login </Text>
          </Button>
  
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

   
  main: {
    flex: 1,
    textAlign:'center',
   margin:  '10px',
  }

});