import AppColors from "@/constant/Colors"
import { Ticket, TicketStatus } from "@/sample/tickets"
import { LinearGradient } from "expo-linear-gradient"
import { Armchair, BusFront, Clock, MapPin, QrCode, Route, Timer } from "lucide-react-native"
import React from "react"
import { Pressable, Text, View } from "react-native"

export const ticketStatusStyles: Record<TicketStatus, { label: string; textClass: string; bgClass: string }> = {
  active: {
    label: "Active",
    textClass: "text-emerald-700",
    bgClass: "bg-emerald-100",
  },
  completed: {
    label: "Completed",
    textClass: "text-blue-600",
    bgClass: "bg-blue-100",
  },
  cancelled: {
    label: "Cancelled",
    textClass: "text-red-600",
    bgClass: "bg-red-100",
  },
}

export interface TicketCardProps {
  ticket: Ticket
  onPress?: () => void
  highlight?: boolean
}

const TicketCard: React.FC<TicketCardProps> = ({ ticket, onPress, highlight = false }) => {
  const statusStyle = ticketStatusStyles[ticket.status]

  return (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      className="mb-5"
      android_ripple={
        onPress ? { color: "rgba(79,70,229,0.08)", borderless: false } : undefined
      }
    >
      <View
        className={`bg-white rounded-3xl border shadow-lg overflow-hidden ${highlight ? "border-indigo-200" : "border-gray-100"}`}
      >
        <View className="absolute inset-0" style={{ opacity: 0.015 }}>
          {highlight ? (
            <LinearGradient
              colors={["#6366F1", "#818CF8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="flex-1"
            />
          ) : null}
        </View>

        <View className="px-5 py-5">
          <View className="flex-row justify-between items-start">
            <View className="flex-1 pr-4">
              <Text className="text-xs uppercase text-gray-400 font-poppins-medium tracking-wide">
                Route {ticket.routeNumber}
              </Text>
              <Text className="font-poppins-semibold text-xl text-gray-900 mt-2">
                {ticket.routeName}
              </Text>

              <View className="flex-row flex-wrap mt-3">
                <View className="px-3 py-1 rounded-full bg-indigo-50 mr-2 mb-2">
                  <Text className="text-[11px] font-poppins-medium text-indigo-700">
                    {ticket.busType}
                  </Text>
                </View>
                <View className="px-3 py-1 rounded-full bg-purple-50 mr-2 mb-2">
                  <Text className="text-[11px] font-poppins-medium text-purple-700">
                    {ticket.operator}
                  </Text>
                </View>
              </View>
            </View>

            <View className={`px-3 py-1 rounded-full ${statusStyle.bgClass}`}>
              <Text className={`text-xs font-poppins-medium uppercase ${statusStyle.textClass}`}>
                {statusStyle.label}
              </Text>
            </View>
          </View>

          <View className="flex-row mt-6">
            <View className="items-center mr-3">
              <View className="h-3 w-3 rounded-full bg-indigo-500" />
              <View className="flex-1 w-0.5 bg-indigo-200 mt-1 mb-1" />
              <View className="h-3 w-3 rounded-full bg-purple-500" />
            </View>

            <View className="flex-1">
              <View className="flex-row justify-between">
                <View className="flex-1 pr-4">
                  <Text className="text-xs uppercase text-gray-400 font-poppins-medium">From</Text>
                  <Text className="font-poppins-semibold text-lg text-gray-900 mt-1">
                    {ticket.from.name}
                  </Text>
                  {ticket.from.platform ? (
                    <Text className="text-xs text-gray-500 mt-1">{ticket.from.platform}</Text>
                  ) : null}
                  <View className="flex-row items-center mt-2">
                    <Clock size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">{ticket.departureTime}</Text>
                  </View>
                  <View className="flex-row items-center mt-2">
                    <Timer size={16} color="#6366F1" />
                    <Text className="text-xs text-gray-500 ml-2">
                      {ticket.duration}
                    </Text>
                  </View>
                </View>

                <View className="flex-1 items-end">
                  <Text className="text-xs uppercase text-gray-400 font-poppins-medium">To</Text>
                  <Text className="font-poppins-semibold text-lg text-gray-900 mt-1 text-right">
                    {ticket.to.name}
                  </Text>
                  {ticket.to.gate ? (
                    <Text className="text-xs text-gray-500 mt-1 text-right">{ticket.to.gate}</Text>
                  ) : null}
                  <View className="flex-row items-center mt-2 justify-end">
                    <Clock size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">{ticket.arrivalTime}</Text>
                  </View>
                  <View className="flex-row items-center mt-2 justify-end">
                    <Route size={16} color="#6366F1" />
                    <Text className="text-xs text-gray-500 ml-2">
                      {ticket.distance}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-6">
            <View className="flex-row items-center">
              <MapPin size={16} color={AppColors.secondary} />
              <Text className="text-sm text-gray-600 ml-2">
                {ticket.from.code} → {ticket.to.code}
              </Text>
            </View>

            <View className="items-end">
              <Text className="text-[11px] uppercase text-gray-400 font-poppins-medium">Amount</Text>
              <Text className="font-poppins-semibold text-xl text-gray-900">
                {ticket.currency} {ticket.amount.toLocaleString()}
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-4">
            <View className="flex-row items-center">
              <BusFront size={16} color="#6B7280" />
              <Text className="text-xs text-gray-500 ml-2">{ticket.busNumber}</Text>
            </View>
            <View className="flex-row items-center">
              <Armchair size={16} color="#6B7280" />
              <Text className="text-xs text-gray-500 ml-2">Seat {ticket.seat} • {ticket.seatType}</Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-4 pt-4 border-t border-dashed border-gray-200">
            <View className="flex-row items-center">
              <QrCode size={16} color="#4F46E5" />
              <Text className="text-xs text-gray-500 ml-2">{ticket.bookingReference}</Text>
            </View>
            <Text className="text-xs text-gray-400">{ticket.purchasedAt}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default TicketCard
