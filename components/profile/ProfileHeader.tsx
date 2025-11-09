import React from "react";
import { Image, Text, View } from "react-native";

export type ProfileHeaderProps = {
  name: string;
  email: string;
  phone: string;
  avatarUrl?: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  email,
  phone,
  avatarUrl,
}) => {
  return (
    <View className="items-center px-6 pt-8">
      <View className="w-36 h-36 rounded-full bg-white/20 border border-white/30 items-center justify-center overflow-hidden shadow-lg shadow-indigo-900/30">
        {avatarUrl ? (
          <Image
            source={{ uri: avatarUrl }}
            className="w-full h-full object-cover"
            resizeMode="cover"
          />
        ) : (
          <Text className="text-3xl font-poppins-semibold text-white">
            {name.charAt(0)}
          </Text>
        )}
      </View>

      <Text className="text-2xl font-poppins-semibold mt-4">{name}</Text>
      <Text className="text-sm text-gray-400 mt-1">{email}</Text>
      <Text className="text-sm text-gray-400 mt-1">{phone}</Text>
    </View>
  );
};

export default ProfileHeader;
