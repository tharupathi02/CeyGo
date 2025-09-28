import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";

interface PaymentOption {
  key: string;
  label: string;
  description: string;
  image: ImageSourcePropType;
}

interface TopUpPaymentSheetProps {
  visible: boolean;
  onClose: () => void;
  onMethodSelect: (methodKey: string) => void;
}

const TopUpPaymentSheet: React.FC<TopUpPaymentSheetProps> = ({
  visible,
  onClose,
  onMethodSelect,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const paymentOptions = useMemo<PaymentOption[]>(
    () => [
      {
        key: "card",
        label: "Debit / Credit Card",
        description: "Use your Visa, Mastercard or AMEX",
        image: {
          uri: "https://corporate.visa.com/content/dam/VCOM/corporate/about-visa/images/visa-brandmark-blue-1960x622.png",
        },
      },
      {
        key: "apple-pay",
        label: "Apple Pay",
        description: "Pay securely with your Apple devices",
        image: {
          uri: "https://img.icons8.com/cotton/1080/apple-pay.png",
        },
      },
      {
        key: "google-pay",
        label: "Google Pay",
        description: "Checkout fast with Google Wallet",
        image: {
          uri: "https://img.icons8.com/fluency/1080/google-pay.png",
        },
      },
    ],
    []
  );

  const snapPoints = useMemo(() => {
    const baseHeight = 200;
    const itemHeight = 96;
    const totalHeight = baseHeight + paymentOptions.length * itemHeight;
    const percentage = Math.max(35, Math.min(75, (totalHeight / 800) * 100));
    return [`${percentage}%`];
  }, [paymentOptions.length]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    []
  );

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [visible]);

  const handleSelect = useCallback(
    (option: PaymentOption) => {
      onMethodSelect(option.key);
      bottomSheetRef.current?.close();
    },
    [onMethodSelect]
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      enableContentPanningGesture={false}
      backgroundStyle={{
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
      }}
      handleIndicatorStyle={{
        backgroundColor: "#D1D5DB",
        width: 48,
        height: 4,
      }}
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 16,
      }}
    >
      <BottomSheetView style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
        <View className="pt-2 pb-4">
          <Text className="font-poppins-bold text-lg text-gray-900 text-center">
            Choose Payment Method
          </Text>
          <Text className="font-poppins-regular text-sm text-gray-500 text-center mt-1">
            Select how you would like to complete the top-up.
          </Text>
        </View>

        <View>
          {paymentOptions.map((option) => (
            <TouchableOpacity
              key={option.key}
              onPress={() => handleSelect(option)}
              activeOpacity={0.85}
              className="flex-row items-center py-2 px-4 rounded-2xl mb-3"
            >
              <View className="w-14 h-14 rounded-2xl items-center justify-center mr-4">
                <Image
                  source={option.image}
                  style={{ width: 36, height: 36, resizeMode: "contain" }}
                />
              </View>
              <View className="flex-1">
                <Text className="font-poppins-semibold text-base text-gray-900">
                  {option.label}
                </Text>
                <Text className="font-poppins-regular text-xs text-gray-500 mt-1">
                  {option.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.close()}
          activeOpacity={0.85}
          className="mt-2 py-3 rounded-2xl bg-gray-100"
        >
          <Text className="text-center font-poppins-medium text-base text-gray-600">
            Cancel
          </Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default TopUpPaymentSheet;
