import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, Image, ImageSourcePropType } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BlankScreen from './screens/BlankScreen';
import Dashboard from './screens/DashboardScreen';
import Login from './screens/LoginScreen';
import NewDeliveryScreen from './screens/NewDeliveryScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const reportsIcon = require("../assets/reports-icon.png");
const homeIcon = require("../assets/home-icon.png");
const profileIcon = require("../assets/user.png")

function DashboardTabs() {
    return (
        <Tab.Navigator initialRouteName='Visão geral' screenOptions={({ route }) => ({
            headerTitleAlign: "center",
            headerTintColor: '#222222',
            headerTitleStyle: {
                fontFamily: "Poppins_500Medium",
                fontSize: 18,
            },
            headerShadowVisible: false,
            tabBarInactiveTintColor: "",
            tabBarActiveTintColor: "",
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: ImageSourcePropType;

                if (route.name === 'Visão geral') {
                    iconName = focused
                        ? homeIcon
                        : homeIcon;
                } else if (route.name === 'Perfil') {
                    iconName = focused ? profileIcon : profileIcon;
                }
                else if (route.name === 'Relatórios') {
                    iconName = focused ? reportsIcon : reportsIcon;
                }

                
                return <Image source={iconName} style={{width: 28, height: 28}}/>;
            },
        })}>
            <Tab.Screen name="Relatórios" component={BlankScreen} />
            <Tab.Screen name="Visão geral" component={Dashboard} />
            <Tab.Screen name="Perfil" component={BlankScreen} />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Login'
            screenOptions={({navigation}) => ({
                headerTitleAlign: "center",
                headerTintColor: '#222222',
                headerTitleStyle: {
                    fontFamily: "Poppins_500Medium",
                    fontSize: 18,
                },
                headerShadowVisible: false,
                headerLeft: () => (
                    <TouchableOpacity
                    
                    onPress={() => navigation.goBack()}
                 >
                   <Feather name='arrow-left' size={22} color={"#fa641e"}/>
                 </TouchableOpacity>
                )
            })}
        > 
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={DashboardTabs} options={{headerTitle: "Visão geral"}}/>
            <Stack.Screen name="NewDelivery" component={NewDeliveryScreen} options={{headerTitle: "Nova entrega"}}/>
        </Stack.Navigator>
    );
}