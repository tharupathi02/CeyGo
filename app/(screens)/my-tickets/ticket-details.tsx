import AppTopBar from '@/components/appbar/AppTopBar'
import AppColors from '@/constant/Colors'
import { getTicketById, TicketStatus } from '@/sample/tickets'
import { useLocalSearchParams } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { Armchair, BusFront, Building2, Clock, IdCard, MapPin, Phone, QrCode, Route, Stars, Tag, Timer, UserRound } from 'lucide-react-native'
import React, { useMemo } from 'react'
import { ScrollView, Text, View } from 'react-native'

const statusStyles: Record<TicketStatus, { label: string; textClass: string; bgClass: string }> = {
  active: {
    label: 'Active',
    textClass: 'text-emerald-700',
    bgClass: 'bg-emerald-100',
  },
  completed: {
    label: 'Completed',
    textClass: 'text-blue-600',
    bgClass: 'bg-blue-100',
  },
  cancelled: {
    label: 'Cancelled',
    textClass: 'text-red-600',
    bgClass: 'bg-red-100',
  },
}

const TicketDetailsScreen: React.FC = () => {
  const params = useLocalSearchParams<{ id?: string }>()
  const ticketId = Array.isArray(params.id) ? params.id[0] : params.id

  const ticket = useMemo(() => (ticketId ? getTicketById(ticketId) : undefined), [ticketId])

  if (!ticket) {
    return (
      <View className="flex-1 bg-white">
        <AppTopBar title="Ticket View" showBackButton />
        <View className="flex-1 items-center justify-center px-8">
          <Text className="font-poppins-semibold text-lg text-gray-800 text-center">
            Ticket unavailable
          </Text>
          <Text className="text-sm text-gray-500 text-center mt-2">
            We couldn’t find the ticket you’re looking for. Please go back and select a ticket again.
          </Text>
        </View>
      </View>
    )
  }

  const statusStyle = statusStyles[ticket.status]

  const detailItems: { label: string; value: string; icon: React.ReactNode; fullWidth?: boolean }[] = [
    {
      label: 'Passenger',
      value: ticket.passengerName,
      icon: <UserRound size={16} color={AppColors.secondary} />,
    },
    {
      label: 'Phone',
      value: ticket.passengerPhone,
      icon: <Phone size={16} color={AppColors.secondary} />,
    },
    {
      label: 'National ID',
      value: ticket.passengerNIC,
      icon: <IdCard size={16} color={AppColors.secondary} />,
      fullWidth: true,
    },
    {
      label: 'Seat',
      value: `${ticket.seat} • ${ticket.seatType}`,
      icon: <Armchair size={16} color={AppColors.secondary} />,
    },
    {
      label: 'Bus',
      value: `${ticket.busNumber} • ${ticket.busType}`,
      icon: <BusFront size={16} color={AppColors.secondary} />,
    },
    {
      label: 'Operator',
      value: ticket.operator,
      icon: <Building2 size={16} color={AppColors.secondary} />,
      fullWidth: true,
    },
    {
      label: 'Booking Ref',
      value: ticket.bookingReference,
      icon: <Tag size={16} color={AppColors.secondary} />,
    },
    {
      label: 'Purchased',
      value: ticket.purchasedAt,
      icon: <Clock size={16} color={AppColors.secondary} />,
      fullWidth: true,
    },
  ]

  return (
    <View className="flex-1 bg-white">
      <AppTopBar title={ticket.id} showBackButton />

      <ScrollView className="flex-1 mx-4 my-3" showsVerticalScrollIndicator={false}>
        <View className="rounded-3xl overflow-hidden bg-white border border-indigo-50 shadow-lg">
          <LinearGradient
            colors={[AppColors.primary, '#312E81']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="px-6 py-6"
          >
            <View className="flex-row justify-between items-start">
              <View className="flex-1 pr-4">
                <Text className="text-xs uppercase text-indigo-100 font-poppins-medium tracking-wider">
                  {ticket.routeName}
                </Text>
                <Text className="font-poppins-bold text-3xl text-white">
                  {ticket.from.code} → {ticket.to.code}
                </Text>
                <Text className="font-poppins-medium text-sm text-indigo-100">
                  {ticket.from.name} to {ticket.to.name}
                </Text>
              </View>

              <View className="items-end">
                <View className={`px-3 py-1 rounded-full ${statusStyle.bgClass}`}>
                  <Text className={`text-xs font-poppins-medium uppercase ${statusStyle.textClass}`}>
                    {statusStyle.label}
                  </Text>
                </View>

                <Text className="text-[11px] uppercase text-indigo-100 font-poppins-medium mt-2">
                  Amount
                </Text>
                <Text className="text-white font-poppins-semibold text-2xl">
                  LKR {ticket.amount.toLocaleString()}
                </Text>
              </View>
            </View>
          </LinearGradient>

          <View className="px-6 pt-4 pb-8">
            <View className="flex-row">
              <View className="items-center mr-4">
                <View className="h-3 w-3 rounded-full bg-indigo-500" />
                <View className="flex-1 w-0.5 bg-indigo-200 mt-1 mb-1" />
                <View className="h-3 w-3 rounded-full bg-purple-500" />
              </View>

              <View className="flex-1">
                <View className="mb-6">
                  <Text className="text-xs uppercase text-gray-400 font-poppins-medium">
                    Departure
                  </Text>
                  <Text className="font-poppins-semibold text-lg text-gray-900 mt-1">
                    {ticket.from.name}
                  </Text>

                  <View className="flex-row items-center mt-2">
                    <Clock size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">
                      {ticket.departureTime} • {ticket.travelDate}
                    </Text>
                  </View>

                  <View className="flex-row items-center mt-2">
                    <Timer size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">
                      {ticket.duration}
                    </Text>
                  </View>

                  {ticket.from.platform ? (
                    <View className="flex-row items-center mt-2">
                      <MapPin size={16} color="#6B7280" />
                      <Text className="text-sm text-gray-600 ml-2">
                        {ticket.from.platform}
                      </Text>
                    </View>
                  ) : null}

                  {ticket.from.address ? (
                    <Text className="text-xs text-gray-400 mt-2 leading-4">
                      {ticket.from.address}
                    </Text>
                  ) : null}
                </View>

                <View>
                  <Text className="text-xs uppercase text-gray-400 font-poppins-medium">
                    Arrival
                  </Text>
                  <Text className="font-poppins-semibold text-lg text-gray-900 mt-1">
                    {ticket.to.name}
                  </Text>

                  <View className="flex-row items-center mt-2">
                    <Clock size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">
                      {ticket.arrivalTime} • {ticket.travelDate}
                    </Text>
                  </View>

                  <View className="flex-row items-center mt-2">
                    <Route size={16} color="#6B7280" />
                    <Text className="text-sm text-gray-600 ml-2">
                      {ticket.distance}
                    </Text>
                  </View>

                  {ticket.to.gate ? (
                    <View className="flex-row items-center mt-2">
                      <MapPin size={16} color="#6B7280" />
                      <Text className="text-sm text-gray-600 ml-2">
                        {ticket.to.gate}
                      </Text>
                    </View>
                  ) : null}

                  {ticket.to.address ? (
                    <Text className="text-xs text-gray-400 mt-2 leading-4 text-right">
                      {ticket.to.address}
                    </Text>
                  ) : null}
                </View>
              </View>
            </View>

            <View className="border-t border-dashed border-gray-200 my-6" />

            <View className="flex-row flex-wrap -mx-2">
              {detailItems.map((item) => (
                <View
                  key={item.label}
                  className={`${item.fullWidth ? 'w-full' : 'w-1/2'} px-2 mb-5`}
                >
                  <View className="flex-row items-center">
                    <View className="w-8 h-8 rounded-xl bg-indigo-50 justify-center items-center mr-3">
                      {item.icon}
                    </View>
                    <View className="flex-1">
                      <Text className="text-[11px] uppercase text-gray-400 font-poppins-medium">
                        {item.label}
                      </Text>
                      <Text className="font-poppins-semibold text-base text-gray-900">
                        {item.value}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View className="bg-gray-900 rounded-2xl px-5 py-5">
              <View className="flex-row justify-between items-center">
                <View className="flex-1 pr-4">
                  <Text className="text-xs uppercase text-gray-400 font-poppins-medium">
                    Boarding QR
                  </Text>
                  <Text className="text-white font-poppins-semibold text-lg">
                    {ticket.id}
                  </Text>
                </View>

                <View
                  className="w-16 h-16 rounded-2xl justify-center items-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <QrCode size={36} color="white" />
                </View>
              </View>

              <View className="border-t border-dashed border-indigo-400/30 mt-4 pt-4">
                <Text className="text-xs uppercase text-indigo-200 font-poppins-medium">
                  Amenities
                </Text>
                <View className="flex-row flex-wrap mt-3 -mx-1">
                  {ticket.amenities.map((amenity) => (
                    <View key={amenity} className="px-3 py-1 m-1 rounded-full bg-indigo-500/20">
                      <Text className="text-[11px] text-indigo-100 font-poppins-medium">
                        {amenity}
                      </Text>
                    </View>
                  ))}
                </View>

                <View className="mt-4">
                  <Text className="text-xs uppercase text-indigo-200 font-poppins-medium">
                    Stops
                  </Text>
                  <Text className="text-sm text-indigo-100 mt-2 leading-6">
                    {ticket.stops.join(' • ')}
                  </Text>
                </View>

                {ticket.cancellationReason ? (
                  <View className="mt-4 bg-red-500/10 border border-red-400/40 rounded-xl px-3 py-3">
                    <Text className="text-xs uppercase text-red-200 font-poppins-medium">
                      Cancellation info
                    </Text>
                    <Text className="text-sm text-red-100 mt-1">
                      {ticket.cancellationReason}
                    </Text>
                    {ticket.refundAmount ? (
                      <Text className="text-xs text-red-100 mt-2">
                        Refund: {ticket.currency} {ticket.refundAmount.toLocaleString()} • {ticket.refundStatus}
                      </Text>
                    ) : null}
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default TicketDetailsScreen