import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  trailingIcon?: React.ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onPress,
  disabled = false,
  loading = false,
  fullWidth = true,
  trailingIcon,
  className,
}) => {
  const isDisabled = disabled || loading;
  const backgroundClass = isDisabled ? "bg-primary-200" : "bg-primary-500";
  const textClass = isDisabled ? "text-primary-100" : "text-white";
  const indicatorColor = isDisabled ? "#4B22CC" : "#FFFFFF";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      className={`rounded-2xl ${backgroundClass} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      <View className="flex-row items-center justify-center px-6 py-4">
        {loading ? (
          <ActivityIndicator color={indicatorColor} />
        ) : (
          <>
            <Text
              className={`${textClass} font-poppins-semibold text-base`}
            >
              {label}
            </Text>
            {trailingIcon && <View className="ml-2">{trailingIcon}</View>}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
