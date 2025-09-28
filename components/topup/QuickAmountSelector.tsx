import React from "react";
import { View } from "react-native";
import QuickAmountPill from "./QuickAmountPill";

export interface QuickAmountOption {
  label: string;
  value: string;
}

interface QuickAmountSelectorProps {
  options: QuickAmountOption[];
  selectedValue?: string;
  onSelect: (value: string) => void;
}

const QuickAmountSelector: React.FC<QuickAmountSelectorProps> = ({
  options,
  selectedValue,
  onSelect,
}) => {
  return (
    <View className="flex-row flex-wrap gap-2 justify-center">
      {options.map((option) => (
        <QuickAmountPill
          key={option.value}
          label={option.label}
          onPress={() => onSelect(option.value)}
          selected={selectedValue === option.value}
        />
      ))}
    </View>
  );
};

export default QuickAmountSelector;
