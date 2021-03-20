import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExampleFive  from './ExampleFive'

export default function App() {
  return (
      <>
      <ExampleFive/>
      <Text>Milan tanzt im Ballett!</Text>
      <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({

});
