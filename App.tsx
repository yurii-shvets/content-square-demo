import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

const Main = () => {
  const navigation = useNavigation();
  const navigateToCheckout = () => {
    navigation.navigate('WebView');
  };
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.button} onPress={navigateToCheckout}>
        <Text>Go to webview</Text>
      </Pressable>
    </View>
  );
};

const WebView = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Webview</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export const RootNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Group key="stacks">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="WebView" component={WebView} />
    </Stack.Group>
  </Stack.Navigator>
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: 120,
    borderColor: 'blue',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
