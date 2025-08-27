import { Stack } from "expo-router";
import { Provider } from 'react-redux'
import { store } from "../app/store"

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="index" />
        {/* <Stack.Screen
          name="modal"
          options={{
            presentation: 'modal',
          }}
        /> */}
      </Stack>
    </Provider>
  );
}
