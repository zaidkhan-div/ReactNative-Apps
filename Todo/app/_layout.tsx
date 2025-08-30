import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import { store } from "../app/store"

export default function RootLayout() {
  return (
    <Provider store={store} >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}


// <Provider store={store}>
//   <Stack screenOptions={{ headerShown: false }} >
//     <Stack.Screen name="index" />
//     </Stack>
//    <Stack.Screen
//   name="modal"
//   options={{
//     presentation: 'modal',
//   }}
// />
// </Provider>
