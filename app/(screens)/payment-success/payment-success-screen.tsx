import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useRouter, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import LottieView from "lottie-react-native";
import { StatusBar, Text, View } from "react-native";
import Assets from "@/constant/Assets";

type StatusVariant = "success" | "failed";

const PaymentSuccessScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const status = (params.status as StatusVariant) ?? "success";
  const isSuccess = status !== "failed";

  const amount = params.amount ?? "";
  const method = params.method ?? "";
  const reference = params.reference ?? "";
  const date = params.date ?? "";

  const title = isSuccess ? "Payment Successful" : "Payment Failed";
  const subtitle = isSuccess
    ? "Your wallet has been topped up successfully."
    : "We couldn't complete your payment. Please try another method.";
  const buttonLabel = isSuccess ? "Complete" : "Try Again";
  const backgroundTintClass = isSuccess ? "bg-green-50" : "bg-red-50";
  const statusBarColor = isSuccess ? "#E8FBF3" : "#FDECEE";
  const barStyle = isSuccess ? "dark-content" : "dark-content";
  const animationSource = isSuccess
    ? Assets.animations.success
    : Assets.animations.success;
  const accentBorderColor = isSuccess ? "border-emerald-200" : "border-red-200";
  const accentHeaderBgClass = isSuccess ? "bg-emerald-500" : "bg-red-500";
  const accentHeaderTextClass = isSuccess ? "text-emerald-100" : "text-red-100";

  const details = useMemo(
    () => [
      { label: "Amount", value: `LKR ${amount}` },
      { label: "Payment Method", value: method },
      { label: "Reference", value: reference },
      { label: "Date & Time", value: date },
    ],
    [amount, method, reference, date]
  );

  const handleComplete = () => {
    if (isSuccess) {
      router.replace("/(screens)/(tabs)");
    } else {
      router.back();
    }
  };

  return (
    <View className={`flex-1 ${backgroundTintClass}`}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />

      <View className="flex-1 px-6 pb-8">
        <View className="items-center">
          <LottieView
            source={animationSource}
            autoPlay
            style={{ width: 200, height: 200 }}
          />
          <Text className={`font-poppins-bold text-[26px]`}>{title}</Text>
          <Text className="font-poppins-regular text-base text-gray-600 text-center">
            {subtitle}
          </Text>
        </View>

        <View className="mt-10">
          <View
            className={`bg-white rounded-[32px] px-6 pt-10 pb-8 shadow-xl border ${accentBorderColor}`}
            style={{
              shadowColor: "#000",
              shadowOpacity: 0.08,
              shadowRadius: 24,
              elevation: 16,
            }}
          >
            <View
              className={`-mt-16 px-6 py-4 rounded-3xl shadow-lg ${accentHeaderBgClass}`}
            >
              <Text className="font-poppins-bold text-xl text-white">
                {title}
              </Text>
              <Text
                className={`font-poppins-medium text-sm ${accentHeaderTextClass} mt-2`}
              >
                #{reference}
              </Text>
            </View>

            <View>
              {details.map((item) => (
                <View
                  key={item.label}
                  className="flex-row justify-between items-center px-4 py-4 rounded-2xl"
                >
                  <Text className="font-poppins-medium text-sm text-gray-500 uppercase">
                    {item.label}
                  </Text>
                  <Text className="font-poppins-semibold text-base text-gray-900">
                    {item.value}
                  </Text>
                </View>
              ))}
            </View>

            <View className="mt-4">
              <View className={`rounded-3xl px-6 py-3 ${accentHeaderBgClass}`}>
                <Text className="font-poppins-bold text-3xl text-white text-center">
                  LKR {amount}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-1 justify-center mt-10">
          <PrimaryButton
            label={buttonLabel}
            onPress={handleComplete}
            className="bg-emerald-500"
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccessScreen;
