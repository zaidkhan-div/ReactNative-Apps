import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Theme from '../../utils/theme'
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    height: 55,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }
            }}
            initialRouteName='index'>
            <Tabs.Screen
                name='Menu'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: 100,
                        }}
                        >
                            <Ionicons
                                name={focused ? "menu" : "menu-outline"}
                                color={focused ? Theme.colors.primary : "menu-outline"}
                                size={24}
                            />
                            <Text style={{
                                color: focused ? Theme.colors.primary : "gray",
                                marginTop: 4,
                                fontSize: 12,
                            }}>
                                Menu
                            </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name='index'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: 100
                        }}
                        >
                            <Ionicons
                                name={focused ? "home" : "home-outline"}
                                color={focused ? Theme.colors.primary : "home-outline"}
                                size={24}
                            />
                            <Text style={{
                                color: focused ? Theme.colors.primary : "gray",
                                marginTop: 4,
                                fontSize: 12
                            }}>
                                Home
                            </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name='Dms'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: 100
                        }}
                        >
                            <Ionicons
                                name={focused ? "mail-unread-outline" : "mail-unread-outline"}
                                color={focused ? Theme.colors.primary : "analytics-outline"}
                                size={24}
                            />
                            <Text style={{
                                color: focused ? Theme.colors.primary : "gray",
                                marginTop: 4,
                                fontSize: 12
                            }}>
                                Dms
                            </Text>
                        </View>
                    )
                }}
            />
            <Tabs.Screen
                name='Analytics'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: "center",
                            paddingTop: 10,
                            width: 100
                        }}
                        >
                            <Ionicons
                                name={focused ? "analytics" : "analytics-outline"}
                                color={focused ? Theme.colors.primary : "analytics-outline"}
                                size={24}
                            />
                            <Text style={{
                                color: focused ? Theme.colors.primary : "gray",
                                marginTop: 4,
                                fontSize: 12
                            }}>
                                Analytics
                            </Text>
                        </View>
                    )
                }}
            />


        </Tabs>
    )
}
export default TabLayout