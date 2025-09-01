import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import { store } from "../app/store"
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function RootLayout() {

  const isloggedIn = false;

  return (
    <Provider store={store} >
      <SafeAreaProvider>
        <Stack screenOptions={{ headerShown: false }}>
          {
            isloggedIn ?
              <Stack.Screen name="(tabs)" />
              :
              <Stack.Screen name="(auth)" />
          }
        </Stack>
      </SafeAreaProvider>
      <Toast />
    </Provider>
  );
}

//    <Stack.Screen
//   name="modal"
//   options={{
//     presentation: 'modal',
//   }}
// />

