import { Stack } from "expo-router";

export default function Authlayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" />
            <Stack.Screen name="Signup" />
        </Stack>
    )
}