import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {WebView as NativeWebView} from 'react-native-webview';
import {CSWebView} from '@contentsquare/react-native-bridge';
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
    <CSWebView
      url="https://www.google.com.ua"
      renderWebView={(onLayout, webViewUrl) => {
        return (
          <NativeWebView
            onLayout={onLayout}
            style={styles.wrapper}
            source={{uri: webViewUrl}}
          />
        );
      }}
    />
  );
};

const Stack = createStackNavigator();

export const RootNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={Main} />
    <Stack.Screen name="WebView" component={WebView} />
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
