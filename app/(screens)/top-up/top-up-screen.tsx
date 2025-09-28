import AppTopBar from "@/components/appbar/AppTopBar";
import TopUpPaymentSheet from "@/components/bottom-sheets/TopUpPaymentSheet";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import NumericKeypad, { KeypadKey } from "@/components/topup/NumericKeypad";
import QuickAmountSelector, {
  QuickAmountOption,
} from "@/components/topup/QuickAmountSelector";
import TopUpAmountDisplay from "@/components/topup/TopUpAmountDisplay";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { toast } from "sonner-native";

const TopUpScreen: React.FC = () => {
  const router = useRouter();
  const [amount, setAmount] = useState<string>("");
  const [selectedQuickAmount, setSelectedQuickAmount] = useState<string | null>(
    null
  );
  const [paymentSheetVisible, setPaymentSheetVisible] = useState<boolean>(false);

  const quickAmountOptions = useMemo<QuickAmountOption[]>(
    () => [
      { label: "LKR 200", value: "200" },
      { label: "LKR 500", value: "500" },
      { label: "LKR 1,000", value: "1000" },
      { label: "LKR 2,500", value: "2500" },
      { label: "LKR 5,000", value: "5000" },
      { label: "LKR 10,000", value: "10000" },
    ],
    []
  );

  const handleQuickAmountSelect = (value: string) => {
    setAmount(value);
    setSelectedQuickAmount(value);
  };

  const handleKeypadPress = (value: string, type?: KeypadKey["type"]) => {
    setSelectedQuickAmount(null);

    setAmount((prev) => {
      if (type === "backspace") {
        if (prev.length === 0) {
          return "";
        }
        const nextValue = prev.slice(0, -1);
        return nextValue;
      }

      if (type === "decimal") {
        if (prev.includes(".")) {
          return prev;
        }
        if (prev.length === 0) {
          return "0.";
        }
        return `${prev}.`;
      }

      if (prev.includes(".")) {
        const [, decimals = ""] = prev.split(".");
        if (decimals.length >= 2) {
          return prev;
        }
        return `${prev}${value}`;
      }

      if (prev === "0") {
        return value === "0" ? prev : value;
      }

      return prev.length === 0 ? value : `${prev}${value}`;
    });
  };

  const isAmountValid = useMemo(() => {
    if (amount.length === 0) {
      return false;
    }
    const numericValue = parseFloat(amount);
    if (Number.isNaN(numericValue)) {
      return false;
    }
    return numericValue > 0;
  }, [amount]);

  const hasAmountInput = useMemo(() => {
    return amount.replace(/[^0-9]/g, "").length > 0;
  }, [amount]);

  const handleProceedToPayment = () => {
    if (!isAmountValid) {
      toast.info("Please enter a valid amount", {
        description: "Please enter an amount greater than LKR 0.00 before continuing.",
      });
      return;
    }
    setPaymentSheetVisible(true);
  };

  const formatAmountForAlert = (rawAmount: string) => {
    if (!rawAmount) {
      return "0.00";
    }

    let sanitized = rawAmount;
    if (sanitized.endsWith(".")) {
      sanitized = sanitized.slice(0, -1);
    }

    if (sanitized.length === 0) {
      return "0.00";
    }

    const [wholePart = "0", fractionalPart] = sanitized.split(".");
    const normalizedWhole = wholePart.length > 0 ? wholePart : "0";
    const formattedWhole = normalizedWhole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    if (fractionalPart !== undefined) {
      const trimmedFraction = fractionalPart.padEnd(2, "0").slice(0, 2);
      return `${formattedWhole}.${trimmedFraction}`;
    }

    return `${formattedWhole}.00`;
  };

  const paymentMethodLabels: Record<string, string> = useMemo(
    () => ({
      "card": "Debit / Credit Card",
      "apple-pay": "Apple Pay",
      "google-pay": "Google Pay",
    }),
    []
  );

  const handlePaymentMethodSelect = (methodKey: string) => {
    const formattedAmount = formatAmountForAlert(amount);
    const methodLabel = paymentMethodLabels[methodKey] ?? "Selected method";

    router.replace({
      pathname: "/(screens)/payment-success/payment-success-screen",
      params: {
        status: "success",
        amount: formattedAmount,
        method: methodLabel,
        reference: `TXN-${Math.floor(Math.random() * 900000 + 100000)}`,
        date: new Date().toLocaleString(),
      },
    });

    setPaymentSheetVisible(false);
    setAmount("");
    setSelectedQuickAmount(null);
  };

  return (
    <View className="flex-1 bg-white">
      <AppTopBar
        title="Top Up Wallet"
        showBackButton={true}
      />

      <View className="flex-1">
        <View className="px-4 pt-2 pb-2">
          <Text className="text-sm text-gray-500 font-poppins-medium text-center">
            Enter the amount you want to add
          </Text>

          <View className="mt-2">
            <TopUpAmountDisplay currency="LKR" amount={amount} placeholder="0.00" />
          </View>

          <View className="mt-6">
            <Text className="text-[11px] uppercase text-gray-400 font-poppins-semibold text-center">
              Quick picks
            </Text>
            <View className="mt-3">
              <QuickAmountSelector
                options={quickAmountOptions}
                selectedValue={selectedQuickAmount ?? undefined}
                onSelect={handleQuickAmountSelect}
              />
            </View>
          </View>
        </View>

        <View className="flex-1 justify-end">
          <NumericKeypad onKeyPress={handleKeypadPress} />
        </View>
      </View>

      <View className="px-6 pb-6 pt-4 border-t border-gray-100">
        <Text className="text-center text-xs text-gray-400 mb-3 font-poppins-regular">
          Secure payment powered by CeyGo Pay
        </Text>
        <PrimaryButton
          label="Proceed to payment"
          onPress={handleProceedToPayment}
          disabled={!hasAmountInput}
        />
      </View>

      <TopUpPaymentSheet
        visible={paymentSheetVisible}
        onClose={() => setPaymentSheetVisible(false)}
        onMethodSelect={handlePaymentMethodSelect}
      />
    </View>
  );
};

export default TopUpScreen;
