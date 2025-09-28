import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface QuickAmountPillProps {
  label: string;
  onPress: () => void;
  selected?: boolean;
}

const QuickAmountPill: React.FC<QuickAmountPillProps> = ({
  label,
  onPress,
  selected = false,
}) => {
  const containerClasses = selected
    ? "bg-primary shadow-md"
    : "bg-white/90 border border-gray-200 shadow-sm";

  const textClasses = selected
    ? "text-white"
    : "text-gray-700";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`px-5 py-3 rounded-2xl ${containerClasses}`}
    >
      <Text className={`font-poppins-semibold text-base ${textClasses}`}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default QuickAmountPill;
