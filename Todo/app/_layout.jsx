import { RootState } from "@reduxjs/toolkit/query";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider, useSelector } from 'react-redux';
import { store } from "./store";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Theme from "@/utils/theme";

const AppContent = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // const { accessToken } = useSelector((state) => state.user);
  // const isloggedIn = !!accessToken;

  // const accessToken = AsyncStorage.getItem("accessToken").then((res) => setToken(res))
  useEffect(() => {
    const loadToken = async () => {
      const accessToken = await AsyncStorage.getItem("accessToken");
      setToken(accessToken);
      setLoading(false);
      console.log(accessToken, "response");
    }
    loadToken();
  }, [])

  if (loading) {
    return <ActivityIndicator animating={true} color={Theme.colors.primary} />
  }

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {token ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="(auth)" />}
      </Stack>
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store} >
      <AppContent />
      <Toast />
    </Provider>
  );
}


// export default function RootLayout() {

//   // const { accessToken } = useSelector((state) => state.user);
//   const isloggedIn = true;

//   return (
//     <Provider store={store} >
//       <SafeAreaProvider>
//         <Stack screenOptions={{ headerShown: false }}>
//           {
//             isloggedIn ?
//               <Stack.Screen name="(tabs)" />
//               :
//               <Stack.Screen name="(auth)" />
//           }
//         </Stack>
//       </SafeAreaProvider>
//       <Toast />
//     </Provider>
//   );
// }

//    <Stack.Screen
//   name="modal"
//   options={{
//     presentation: 'modal',
//   }}
// />

