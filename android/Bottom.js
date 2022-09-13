import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SortScreen from './SORT'
import FilterScreen from './FILTER'
import ViewMoreScreen from './ViewMore';

const Tab = createBottomTabNavigator();
const Bottom = () => {
    return (
        <Tab.Navigator  >
            <Tab.Screen
                name='SORT'
                component={SortScreen}

                options={{
                    headerShown: false,
                    tabBarLabel: () => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                // backgroundColor:"red",
                                height: '100%',
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image
                                    style={{ tintColor: "grey" }}
                                    source={require("../components/assets/icons8-sort-30.png")}
                                />
                                <Text style={{ fontSize: 18, fontWeight: "300", color: "grey" }}>
                                    SORT
                                </Text>

                            </View>
                        )
                    }
                }
                }
            />
            <Tab.Screen
                name='FILTER'
                component={FilterScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: () => {
                        return (
                            <View style={{
                                flexDirection: "row",
                                // backgroundColor:"red",
                                height: '100%',
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Image
                                    style={{ tintColor: "grey", height: 20, marginHorizontal: 2 }}
                                    source={require("../components/assets/icons8-filter-16.png")}
                                />
                                <Text style={{ fontSize: 18, fontWeight: "300", color: "grey" }}>
                                    FILTER
                                </Text>

                            </View>
                        )
                    }
                }
                }
            />
        </Tab.Navigator>
    )
}

export default Bottom;