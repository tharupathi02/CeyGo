import React from "react";
import { Text, View } from "react-native";

interface TopUpAmountDisplayProps {
  currency?: string;
  amount: string;
  placeholder?: string;
}

const TopUpAmountDisplay: React.FC<TopUpAmountDisplayProps> = ({
  currency = "LKR",
  amount,
  placeholder = "0.00",
}) => {
  const formatAmount = (value: string) => {
    if (!value) {
      return placeholder;
    }

    const [wholePart, decimalPart] = value.split(".");
    const formattedWhole = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (decimalPart !== undefined) {
      return `${formattedWhole}.${decimalPart}`;
    }

    return formattedWhole;
  };

  const displayAmount = formatAmount(amount);
  const isPlaceholder = amount.length === 0;

  return (
    <View className="w-full items-center">
      <Text className="text-primary font-poppins-semibold tracking-normal uppercase text-center">
        {currency}
      </Text>
      <View className="flex-row items-baseline justify-center mt-2">
        <Text
          className={`font-poppins-semibold text-7xl tracking-tight text-center ${
            isPlaceholder ? "text-gray-300" : "text-gray-900"
          }`}
        >
          {displayAmount}
        </Text>
      </View>
    </View>
  );
};

export default TopUpAmountDisplay;
