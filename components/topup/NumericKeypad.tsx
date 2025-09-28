import { Delete } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export interface KeypadKey {
  label: string;
  value: string;
  type?: "number" | "decimal" | "backspace";
}

interface NumericKeypadProps {
  onKeyPress: (value: string, type?: KeypadKey["type"]) => void;
  enableDecimal?: boolean;
  accentColorClass?: string;
}

const NumericKeypad: React.FC<NumericKeypadProps> = ({
  onKeyPress,
  enableDecimal = true,
  accentColorClass = "bg-primary-50",
}) => {
  const keys: KeypadKey[] = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: enableDecimal ? "." : "", value: ".", type: "decimal" },
    { label: "0", value: "0" },
    { label: "", value: "backspace", type: "backspace" },
  ];

  const handlePress = (key: KeypadKey) => {
    if (key.type === "decimal" && !enableDecimal) {
      return;
    }

    onKeyPress(key.value, key.type);
  };

  const rows = [
    keys.slice(0, 3),
    keys.slice(3, 6),
    keys.slice(6, 9),
    keys.slice(9, 12),
  ];

  return (
    <View className="w-full">
      <View className="bg-white p-10">
        <View className="space-y-6">
          {rows.map((row, rowIndex) => (
            <View
              key={`row-${rowIndex}`}
              className="flex-row items-center justify-between gap-6"
            >
              {row.map((key, index) => {
                const isBackspace = key.type === "backspace";
                const isDecimal = key.type === "decimal";
                const isDisabled = isDecimal && !enableDecimal;

                return (
                  <TouchableOpacity
                    key={`${key.value}-${rowIndex}-${index}`}
                    onPress={() => handlePress(key)}
                    disabled={isDisabled}
                    activeOpacity={0.7}
                    className={`flex-1 h-20 items-center justify-center ${
                      isDisabled ? "opacity-30" : ""
                    }`}
                  >
                    {isBackspace ? (
                      <Delete size={24} color="#5E2BFF" />
                    ) : (
                      <Text className="text-3xl font-poppins-semibold text-gray-900">
                        {key.label}
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default NumericKeypad;
