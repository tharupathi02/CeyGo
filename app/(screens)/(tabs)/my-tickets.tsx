import AppTopBar from "@/components/appbar/AppTopBar"
import TicketCard, { ticketStatusStyles } from "@/components/cards/TicketCard"
import AppColors from "@/constant/Colors"
import { tickets, TicketStatus } from "@/sample/tickets"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { Armchair, Clock, Route, Timer } from "lucide-react-native"
import React, { useMemo } from "react"
import { FlatList, Pressable, Text, View } from "react-native"

const statusOrder: Record<TicketStatus, number> = {
  active: 0,
  completed: 1,
  cancelled: 2,
}

const MyTicketsScreen: React.FC = () => {
  const router = useRouter()

  const sortedTickets = useMemo(
    () => [...tickets].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]),
    [tickets]
  )

  const activeTicket = useMemo(() => sortedTickets.find((ticket) => ticket.status === "active"), [sortedTickets])

  const handleTicketPress = (id: string) => {
    router.push({
      pathname: "/(screens)/my-tickets/ticket-details",
      params: { id },
    })
  }

  const renderHeader = () => (
    <View className="pb-4">
      {activeTicket ? (
        <Pressable onPress={() => handleTicketPress(activeTicket.id)} className="mt-6 active:opacity-95 rounded-3xl">
          <LinearGradient
            colors={[AppColors.primary, "#312E81"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="px-6 py-6"
            style={{ borderRadius: 20 }}
          >
            <View className="flex-row justify-between items-start">
              <View className="flex-1 pr-4">
                <Text className="text-xs uppercase text-indigo-100 font-poppins-medium tracking-wide">
                  Upcoming journey
                </Text>
                <Text className="font-poppins-bold text-3xl text-white">
                  {activeTicket.from.code} → {activeTicket.to.code}
                </Text>
                <Text className="font-poppins-medium text-sm text-indigo-100 mt-2">
                  {activeTicket.from.name} to {activeTicket.to.name}
                </Text>

                <View className="flex-row flex-wrap mt-4">
                  <View className="px-3 py-1 rounded-full bg-indigo-100/20 mr-2 mb-2">
                    <Text className="text-[11px] font-poppins-medium text-indigo-50">
                      {activeTicket.busType}
                    </Text>
                  </View>
                  <View className="px-3 py-1 rounded-full bg-indigo-100/15 mr-2 mb-2">
                    <Text className="text-[11px] font-poppins-medium text-indigo-100">
                      {activeTicket.operator}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
              >
                <Text className="text-xs font-poppins-medium text-white uppercase">
                  {ticketStatusStyles[activeTicket.status].label}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between mt-6">
              <View>
                <Text className="text-xs uppercase text-indigo-100 font-poppins-medium">Departure</Text>
                <Text className="font-poppins-semibold text-white">
                  {activeTicket.travelDate}
                </Text>
                <View className="flex-row items-center mt-1">
                  <Clock size={16} color="white" />
                  <Text className="text-indigo-100 ml-2 font-poppins-medium">
                    {activeTicket.departureTime}
                  </Text>
                </View>
                <View className="flex-row items-center mt-2">
                  <Timer size={16} color="white" />
                  <Text className="text-indigo-100 ml-2 text-xs font-poppins-medium">
                    {activeTicket.duration}
                  </Text>
                </View>
              </View>

              <View className="items-end">
                <Text className="text-xs uppercase text-indigo-100 font-poppins-medium">Amount</Text>
                <Text className="font-poppins-semibold text-white text-2xl">
                  {activeTicket.currency} {activeTicket.amount.toLocaleString()}
                </Text>
                <View className="flex-row items-center mt-3">
                  <Route size={16} color="white" />
                  <Text className="text-indigo-100 ml-2 text-xs font-poppins-medium">
                    {activeTicket.distance}
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex-row items-center justify-between mt-6">
              <View className="flex-row items-center">
                <Armchair size={16} color="white" />
                <Text className="text-indigo-100 ml-2 text-xs font-poppins-medium">
                  Seat {activeTicket.seat} • {activeTicket.seatType}
                </Text>
              </View>

              <Text className="text-[11px] text-indigo-200 font-poppins-medium">
                Tap to view ticket details
              </Text>
            </View>
          </LinearGradient>
        </Pressable>
      ) : null}

      <Text className="text-sm uppercase text-gray-400 font-poppins-medium mt-4">Ticket history</Text>
    </View>
  )

  return (
    <View className="flex-1 bg-white">
      <AppTopBar title="My Tickets" showBackButton={false} />

      <FlatList
        data={sortedTickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TicketCard ticket={item} onPress={() => handleTicketPress(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40 }}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={
          <View className="items-center justify-center py-24">
            <Text className="font-poppins-semibold text-base text-gray-700">
              No tickets yet
            </Text>
            <Text className="text-sm text-gray-500 mt-2 text-center px-6">
              Your purchased metro tickets will appear here once you have journeys booked.
            </Text>
          </View>
        }
      />
    </View>
  )
}

export default MyTicketsScreen
