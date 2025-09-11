import Theme from "@/utils/theme";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";

const AppContent = () => {
  const { currentUser, accessToken } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user.currentUser);
  console.log({ user }, "curentUser");
  console.log(accessToken, "AccessToken");

  // useEffect(() => {
  //   const loadToken = async () => {
  //     const accessToken = await AsyncStorage.getItem("accessToken");
  //     setToken(accessToken);
  //     setLoading(false);
  //   }
  //   loadToken();
  // }, [])

  // if (loading) {
  //   return <ActivityIndicator animating={true} color={Theme.colors.primary} />
  // }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          {accessToken ? <Stack.Screen name="(tabs)" /> : <Stack.Screen name="(auth)" />}
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store} >
      <PersistGate loading={<ActivityIndicator size="large" color={Theme.colors.primary} />} persistor={persistor}>
        <AppContent />
        <Toast />
      </PersistGate>
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

