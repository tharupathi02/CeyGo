import AppColors from '@/constant/Colors';
import { Tabs } from 'expo-router';
import { CreditCard, Home, Ticket, User } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';

const TabIconRenderer = ({
    focused,
    iconName,
    label,
    size = 24,
    activeColor = AppColors.primary,
    inactiveColor = AppColors.textSecondary,
}: {
    focused: boolean;
    iconName: 'home' | 'cards' | 'tickets' | 'user';
    label: string;
    size?: number;
    activeColor?: string;
    inactiveColor?: string;
}) => {
    const color = focused ? `${activeColor}` : inactiveColor;

    const renderIcon = () => {
        switch (iconName) {
            case 'home':
                return <Home size={size} color={color} strokeWidth={focused ? 1.5 : 1} />;
            case 'cards':
                return <CreditCard size={size} color={color} strokeWidth={focused ? 1.5 : 1} />;
            case 'tickets':
                return <Ticket size={size} color={color} strokeWidth={focused ? 1.5 : 1} />;
            case 'user':
                return <User size={size} color={color} strokeWidth={focused ? 1.5 : 1} />;
            default:
                return <Home size={size} color={color} strokeWidth={focused ? 1.5 : 1} />;
        }
    };

    return (
        <View className="flex-1 mt-3 flex flex-col items-center">
            {renderIcon()}
            <Text
                style={{
                    color: focused ? `${activeColor}` : inactiveColor,
                }}
                className={`${focused ? "font-poppins-bold" : "font-poppins-regular"
                    } w-full text-center mt-1 text-sm`}
            >
                {label}
            </Text>
        </View>
    );
};

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    minHeight: 70,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIconRenderer
                            focused={focused}
                            iconName="home"
                            label="Home"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="my-cards"
                options={{
                    title: 'My Cards',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIconRenderer
                            focused={focused}
                            iconName="cards"
                            label="Cards"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="my-tickets"
                options={{
                    title: 'My Tickets',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIconRenderer
                            focused={focused}
                            iconName="tickets"
                            label="Tickets"
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIconRenderer
                            focused={focused}
                            iconName="user"
                            label="Profile"
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default _layout