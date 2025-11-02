import AppTopBar from "@/components/appbar/AppTopBar";
import AppColors from "@/constant/Colors";
import { historyEntries, type HistoryEntryIcon } from "@/sample/history";
import { formatCurrency } from "@/utils/formatters";
import { formatHistoryHeading, formatHistoryTime } from "@/utils/history-utils";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  ArrowUpRight,
  Bus,
  CalendarDays,
  Clock,
  CreditCard,
  Gift,
  MapPin,
  Percent,
  Plane,
  QrCode,
  RefreshCw,
  RotateCcw,
  Smartphone,
  Star,
  Store,
  Tag,
  Ticket,
  TrainFront,
  Users,
  Wallet,
  Building2,
  Banknote,
} from "lucide-react-native";
import React, { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const statusBadgeStyle: Record<
  string,
  { background: string; text: string; border: string }
> = {
  Completed: {
    background: "bg-emerald-500/10",
    text: "text-emerald-700",
    border: "border-emerald-200",
  },
  Pending: {
    background: "bg-amber-500/10",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  Failed: {
    background: "bg-rose-500/10",
    text: "text-rose-700",
    border: "border-rose-200",
  },
  Reversed: {
    background: "bg-sky-500/10",
    text: "text-sky-700",
    border: "border-sky-200",
  },
};

const InfoRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <View className="flex-row items-start justify-between">
    <Text className="text-sm text-gray-500 font-poppins-regular">{label}</Text>
    <Text className="text-sm font-poppins-medium text-gray-900 text-right max-w-[60%]">
      {value}
    </Text>
  </View>
);

const HistoryDetailsScreen: React.FC = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();

  const entry = useMemo(
    () => historyEntries.find((item) => item.id === id),
    [id]
  );

  const isCredit = entry?.direction === "credit";
  const iconColor = isCredit ? "#22C55E" : "#F87171";
  const badgeStyle = entry
    ? statusBadgeStyle[entry.status] ?? statusBadgeStyle.Completed
    : statusBadgeStyle.Completed;

  const IconComponent = useMemo(() => {
    if (!entry) {
      return isCredit ? CreditCard : ArrowUpRight;
    }

    const map: Record<
      HistoryEntryIcon,
      React.ComponentType<{ size?: number; color?: string }>
    > = {
      "credit-card": CreditCard,
      train: TrainFront,
      bus: Bus,
      cash: Banknote,
      transfer: ArrowUpRight,
      plane: Plane,
      gift: Gift,
      mobile: Smartphone,
      store: Store,
      ticket: Ticket,
      star: Star,
      users: Users,
      "qr-code": QrCode,
      percent: Percent,
      refund: RotateCcw,
      "google-pay": CreditCard,
      bank: Building2,
      paypal: Wallet,
    };

    return entry.icon && map[entry.icon]
      ? map[entry.icon]
      : isCredit
      ? CreditCard
      : ArrowUpRight;
  }, [entry, isCredit]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <AppTopBar
        title={
          entry?.title
            .substring(0, 24)
            .concat(entry?.title.length > 24 ? "…" : "") ?? ""
        }
        showBackButton
        onBackPress={() => router.back()}
      />

      {entry ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 36, paddingTop: 0 }}
        >
          <LinearGradient
            colors={isCredit ? ["#22C55E", "#16A34A"] : ["#F97316", "#EA580C"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="mx-6 mt-6 px-6 pt-8 pb-10 shadow-xl shadow-indigo-500/20"
            style={{
              borderRadius: 24,
            }}
          >
            <View className="flex flex-col items-start justify-between">
              <View className="flex-1 pr-4">
                <View
                  className={`self-start rounded-full border px-3 py-1 ${badgeStyle.background} ${badgeStyle.border}`}
                >
                  <Text className="text-[11px] font-poppins-semibold uppercase tracking-[1.4px] text-white">
                    {entry.status}
                  </Text>
                </View>

                <Text className="text-xs font-poppins-medium text-white/80 mt-4 uppercase tracking-[1.6px]">
                  {entry.category}
                </Text>
                <Text className="text-2xl font-poppins-semibold text-white mt-2">
                  {entry.title}
                </Text>
                <Text className="text-sm text-white/80 mt-2">
                  {entry.subtitle}
                </Text>
              </View>

              <View className="flex-col gap-4 mt-3">
                <View className="flex-row gap-2">
                  <View className="rounded-3xl bg-white/10 p-3">
                    {isCredit ? (
                      <ArrowDownCircle size={28} color="white" />
                    ) : (
                      <ArrowUpCircle size={28} color="white" />
                    )}
                  </View>
                  <View className="rounded-3xl bg-white/10 p-3">
                    <IconComponent size={28} color="white" />
                  </View>
                </View>
                <Text className="text-3xl font-poppins-bold text-white">
                  {isCredit ? "+" : "-"}
                  {formatCurrency(Math.abs(entry.amount), entry.currency)}
                </Text>
              </View>
            </View>

            <View className="mt-6 flex-row flex-wrap gap-3">
              <View className="flex-row items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                <CalendarDays size={14} color="#FFFFFF" />
                <Text className="text-xs font-poppins-medium text-white">
                  {formatHistoryHeading(entry.occurredAt)}
                </Text>
              </View>
              <View className="flex-row items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                <Clock size={14} color="#FFFFFF" />
                <Text className="text-xs font-poppins-medium text-white">
                  {formatHistoryTime(entry.occurredAt)}
                </Text>
              </View>
              {entry.paymentMethod ? (
                <View className="flex-row items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                  <CreditCard size={14} color="#FFFFFF" />
                  <Text className="text-xs font-poppins-medium text-white">
                    {entry.paymentMethod}
                  </Text>
                </View>
              ) : null}
              {entry.transactionId ? (
                <View className="flex-row items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                  <RefreshCw size={14} color="#FFFFFF" />
                  <Text className="text-xs font-poppins-medium text-white">
                    #{entry.transactionId}
                  </Text>
                </View>
              ) : null}
            </View>

            {entry.tags && entry.tags.length > 0 ? (
              <View className="mt-6 flex-row flex-wrap gap-2">
                {entry.tags.slice(0, 4).map((tag) => (
                  <View
                    key={`${entry.id}-tag-${tag}`}
                    className="flex-row items-center gap-1 rounded-full bg-white/15 px-3 py-1"
                  >
                    <Tag size={12} color="#FFFFFF" />
                    <Text className="text-[11px] font-poppins-medium text-white">
                      #{tag}
                    </Text>
                  </View>
                ))}
                {entry.tags.length > 4 ? (
                  <View className="rounded-full bg-white/20 px-3 py-1">
                    <Text className="text-[11px] font-poppins-medium text-white">
                      +{entry.tags.length - 4}
                    </Text>
                  </View>
                ) : null}
              </View>
            ) : null}
          </LinearGradient>

          <View className="px-6 mt-6 gap-6">
            <View className="rounded-3xl border border-gray-100 bg-white px-6 py-6 shadow-sm shadow-indigo-50/50 gap-5">
              <Text className="text-sm font-poppins-semibold text-gray-900">
                Activity summary
              </Text>
              <View className="gap-4">
                {entry.balanceBefore !== undefined ? (
                  <InfoRow
                    label="Balance before"
                    value={formatCurrency(entry.balanceBefore, entry.currency)}
                  />
                ) : null}
                {entry.balanceAfter !== undefined ? (
                  <InfoRow
                    label="Balance after"
                    value={formatCurrency(entry.balanceAfter, entry.currency)}
                  />
                ) : null}
                <InfoRow label="Status" value={entry.status} />
                <InfoRow
                  label="Recorded on"
                  value={`${formatHistoryHeading(
                    entry.occurredAt
                  )} • ${formatHistoryTime(entry.occurredAt)}`}
                />
                {entry.location ? (
                  <InfoRow label="Location" value={entry.location} />
                ) : null}
                {entry.transactionId ? (
                  <InfoRow
                    label="Transaction ID"
                    value={`#${entry.transactionId}`}
                  />
                ) : null}
                {entry.paymentMethod ? (
                  <InfoRow label="Payment method" value={entry.paymentMethod} />
                ) : null}
              </View>
            </View>

            {(entry.route || entry.from || entry.to) && (
              <View className="rounded-3xl border border-gray-100 bg-white px-6 py-6 shadow-sm shadow-indigo-50/50 gap-4">
                <Text className="text-sm font-poppins-semibold text-gray-900">
                  Journey details
                </Text>
                <View className="gap-3">
                  {entry.route ? (
                    <InfoRow label="Route" value={entry.route} />
                  ) : null}
                  {entry.from && entry.to ? (
                    <InfoRow
                      label="Origin → Destination"
                      value={`${entry.from} → ${entry.to}`}
                    />
                  ) : null}
                  {entry.distance ? (
                    <InfoRow label="Distance" value={entry.distance} />
                  ) : null}
                  {entry.duration ? (
                    <InfoRow label="Expected duration" value={entry.duration} />
                  ) : null}
                  {entry.vehicleNumber ? (
                    <InfoRow label="Vehicle" value={entry.vehicleNumber} />
                  ) : null}
                </View>
              </View>
            )}

            {entry.meta && entry.meta.length > 0 ? (
              <View className="rounded-3xl border border-gray-100 bg-white px-6 py-6 shadow-sm shadow-indigo-50/50 gap-4">
                <Text className="text-sm font-poppins-semibold text-gray-900">
                  Additional details
                </Text>
                <View className="flex-row flex-wrap gap-3">
                  {entry.meta.map((item) => (
                    <View
                      key={`${entry.id}-${item.label}`}
                      className="min-w-[48%] flex-1 rounded-2xl border border-indigo-100 bg-indigo-50/40 px-4 py-3"
                    >
                      <Text className="text-[11px] font-poppins-medium uppercase tracking-[1.2px] text-indigo-500">
                        {item.label}
                      </Text>
                      <Text className="text-sm font-poppins-semibold text-indigo-900 mt-1">
                        {item.value}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            ) : null}

            {entry.notes ? (
              <View className="rounded-3xl border border-indigo-100 bg-indigo-50/60 px-6 py-6 shadow-sm shadow-indigo-100/40">
                <Text className="text-sm font-poppins-semibold text-indigo-700 uppercase tracking-[1.4px]">
                  Notes
                </Text>
                <Text className="text-sm text-indigo-900 mt-3 leading-6">
                  {entry.notes}
                </Text>
              </View>
            ) : null}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-1 items-center justify-center px-10">
          <Text className="text-lg font-poppins-semibold text-gray-900">
            History entry not found
          </Text>
          <Text className="text-sm text-gray-500 mt-2 text-center">
            We couldn’t load this entry. Please go back and try again.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HistoryDetailsScreen;
