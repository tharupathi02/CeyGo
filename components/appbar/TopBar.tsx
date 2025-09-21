import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const TopBar: React.FC = () => {

    const router = useRouter();

    const name = "Deshan Tharupathi";
    const greeting = "Good Morning";
    const profileImage = "https://randomuser.me/api/portraits/men/1.jpg";

    const onProfilePress = () => {
        console.log('Profile Pressed');
    }

    const onNotificationPress = () => {
        router.push('/(screens)/notifications/notifications-screen');
    }


    return (
        <View className="w-full flex-row justify-between items-center px-5 py-3">
            <TouchableOpacity
                className="flex-row items-center"
                onPress={onProfilePress}
            >
                <View className="h-14 w-14 rounded-full overflow-hidden mr-3 border-[1.5px] border-white">
                    {profileImage ? (
                        <Image
                            source={{ uri: profileImage }}
                            className="h-full w-full"
                            resizeMode="cover"
                        />
                    ) : (
                        <View className="h-full w-full bg-gray-300 justify-center items-center">
                            <Text className="text-white font-bold">
                                {name.charAt(0)}
                            </Text>
                        </View>
                    )}
                </View>
                <View>
                    <Text className="text-white text-xs opacity-80">{greeting}</Text>
                    <Text className="text-white font-bold text-lg">{name} 👋</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                className="h-10 w-10 rounded-full bg-white/20 justify-center items-center"
                onPress={onNotificationPress}
            >
                <Feather name="bell" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;
