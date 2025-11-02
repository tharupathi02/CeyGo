import {
  Activity,
  BadgeInfo,
  Bus,
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  Route,
  Ticket,
  Users
} from 'lucide-react-native'
import React, { useCallback } from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'
import AppColors from '@/constant/Colors'
import type { BusStation } from '@/sample/bus-station'
import type { BusTimetable } from '@/sample/bus-timetable'
import { formatCurrency, formatNumber } from '@/utils/formatters'

export type TimetableResultCardProps = {
  timetable: BusTimetable
  fromStation: BusStation | null
  toStation: BusStation | null
}

const formatStationLabel = (
  station: BusStation | null,
  fallbackName?: string,
  fallbackId?: string
) => {
  if (station) {
    return `${station.name} (${station.code})`
  }

  if (fallbackName) {
    return fallbackName
  }

  return fallbackId ?? 'Unknown terminal'
}

const formatTime = (time: string) => {
  const [hoursString, minutes] = time.split(':')
  const hours = Number(hoursString)
  const suffix = hours >= 12 ? 'PM' : 'AM'
  const normalizedHours = hours % 12 === 0 ? 12 : hours % 12
  return `${String(normalizedHours).padStart(2, '0')}:${minutes} ${suffix}`
}

const serviceClassBadgeStyle: Record<BusTimetable['departures'][number]['serviceClass'], string> = {
  Normal: 'bg-gray-100 text-gray-600',
  'Semi Luxury': 'bg-indigo-50 text-indigo-600',
  'Super Luxury': 'bg-purple-50 text-purple-600',
  Express: 'bg-emerald-50 text-emerald-600',
  'Express AC': 'bg-sky-50 text-sky-600',
  'Night Service': 'bg-slate-900/80 text-white'
}

const statusBadgeStyle: Record<string, string> = {
  'On Time': 'bg-emerald-50 text-emerald-600',
  'Filling Fast': 'bg-amber-50 text-amber-600',
  'Almost Full': 'bg-rose-50 text-rose-600',
  Delayed: 'bg-orange-50 text-orange-600',
  Cancelled: 'bg-rose-100 text-rose-700'
}

const MetaChip: React.FC<{ label: string }> = ({ label }) => (
  <View className='px-3 py-1 rounded-full bg-gray-100'>
    <Text className='text-[11px] font-poppins-medium text-gray-600'>{label}</Text>
  </View>
)

const TimetableResultCard: React.FC<TimetableResultCardProps> = ({
  timetable,
  fromStation,
  toStation
}) => {
  const fromLabel = formatStationLabel(fromStation, timetable.fromStationName, timetable.fromStation)
  const toLabel = formatStationLabel(toStation, timetable.toStationName, timetable.toStation)

  const fareRangeLabel = `${formatCurrency(timetable.fareRange.min, timetable.fareRange.currency)} - ${formatCurrency(
    timetable.fareRange.max,
    timetable.fareRange.currency
  )}`
  const operatingDaysLabel = timetable.operatingDays.join(', ')

  const handleOpenBooking = useCallback((url?: string) => {
    if (!url) {
      return
    }

    Linking.openURL(url).catch(() => {
      // In production we could surface a toast/logging – omitted for brevity
    })
  }, [])

  return (
    <View className='border border-gray-100 rounded-3xl bg-white px-5 py-6 shadow-sm shadow-indigo-100/30'>
      <View className='flex-row justify-between items-start'>
        <View className='flex-1 pr-4'>
          <Text className='text-xs uppercase font-poppins-medium tracking-[2px] text-indigo-500'>
            {timetable.routeNumber}
          </Text>
          <Text className='text-xl font-poppins-semibold text-gray-900 mt-1'>
            {timetable.serviceName}
          </Text>

          <View className='flex-row items-center mt-4'>
            <MapPin size={16} color={AppColors.primary} />
            <Text className='text-xs text-gray-500 ml-2 font-poppins-medium'>{fromLabel}</Text>
          </View>
          <View className='h-5 border-l border-dashed border-gray-300 ml-[7px] mt-1 mb-1' />
          <View className='flex-row items-center'>
            <Route size={16} color={AppColors.primary} />
            <Text className='text-xs text-gray-500 ml-2 font-poppins-medium'>{toLabel}</Text>
          </View>
        </View>

        <View className='items-end'>
          <View className='px-3 py-1 rounded-full bg-indigo-50'>
            <Text className='text-[11px] font-poppins-semibold text-indigo-600 uppercase tracking-[1.4px]'>
              {timetable.operator}
            </Text>
          </View>
          <View className='flex-row items-center mt-2'>
            <Activity size={14} color={timetable.isActive ? AppColors.primary : '#DC2626'} />
            <Text
              className={`text-xs font-poppins-medium ml-2 ${
                timetable.isActive ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {timetable.isActive ? 'Active service' : 'Temporarily unavailable'}
            </Text>
          </View>
        </View>
      </View>

      <View className='flex-row flex-wrap gap-2 mt-6'>
        <MetaChip label={`Duration • ${timetable.travelDuration}`} />
        <MetaChip label={`Frequency • ${timetable.frequency}`} />
        <MetaChip label={`Distance • ${timetable.distance}`} />
        <MetaChip label={`Route • ${timetable.routeType}`} />
        <MetaChip label={`Fare • ${fareRangeLabel}`} />
        {timetable.via.length > 0 ? (
          <MetaChip
            label={`Via • ${timetable.via
              .slice(0, 3)
              .join(', ')}${timetable.via.length > 3 ? ` +${timetable.via.length - 3}` : ''}`}
          />
        ) : null}
      </View>

      <View className='mt-4 space-y-2'>
        <View className='flex-row items-center'>
          <Phone size={14} color={AppColors.primary} />
          <Text className='text-xs font-poppins-medium text-gray-600 ml-2'>
            {timetable.operatorContact}
          </Text>
        </View>
        <View className='flex-row items-center'>
          <CalendarDays size={14} color={AppColors.primary} />
          <Text className='text-xs font-poppins-medium text-gray-600 ml-2 flex-1'>
            Operating days • {operatingDaysLabel}
          </Text>
        </View>
        <View className='flex-row items-center'>
          <Activity size={14} color={AppColors.primary} />
          <Text className='text-xs font-poppins-medium text-gray-600 ml-2 flex-1'>
            Last updated • {timetable.lastUpdated}
          </Text>
        </View>
      </View>

      <View className='mt-6'>
        {timetable.departures.map(departure => {
          const badgeStyle = serviceClassBadgeStyle[departure.serviceClass]
          const statusStyle = statusBadgeStyle[departure.status] ?? 'bg-gray-100 text-gray-600'
          const seatLabel = `${formatNumber(departure.availableSeats)}/${formatNumber(
            departure.totalSeats
          )} seats`
          const fareLabel = formatCurrency(departure.fare, timetable.fareRange.currency)

          return (
            <View
              key={departure.id}
              className='py-4 mb-2 border-b border-gray-200 border-dashed'
            >
              <View className='flex-row justify-between items-start'>
                <View className='flex-1 pr-3'>
                  <View className='flex-row items-center justify-between'>
                    <Text className='text-2xl font-poppins-semibold text-gray-900'>
                      {formatTime(departure.departureTime)}
                    </Text>
                    <View className={`px-3 py-1 rounded-full ${badgeStyle}`}>
                      <Text className='text-[11px] font-poppins-semibold uppercase tracking-[1.2px]'>
                        {departure.serviceClass}
                      </Text>
                    </View>
                  </View>

                  <Text className='text-xs font-poppins-medium text-gray-500 mt-1'>
                    Arrives {formatTime(departure.arrivalTime)} • {timetable.travelDuration}
                  </Text>
                </View>

                <View className={`px-3 py-1 rounded-full ${statusStyle}`}>
                  <Text className='text-[11px] font-poppins-semibold tracking-[1.1px] uppercase'>
                    {departure.status}
                  </Text>
                </View>
              </View>

              <View className='flex-row flex-wrap gap-2 mt-3'>
                <View className='px-3 py-1 rounded-full bg-white border border-gray-200 flex-row items-center'>
                  <Bus size={14} color={AppColors.primary} />
                  <Text className='text-[11px] font-poppins-medium text-gray-600 ml-2'>
                    {departure.busNumber}
                  </Text>
                </View>
                <View className='px-3 py-1 rounded-full bg-white border border-gray-200 flex-row items-center'>
                  <Clock size={14} color={AppColors.primary} />
                  <Text className='text-[11px] font-poppins-medium text-gray-600 ml-2'>
                    Platform {departure.platform}
                  </Text>
                </View>
                <View className='px-3 py-1 rounded-full bg-white border border-gray-200 flex-row items-center'>
                  <Users size={14} color={AppColors.primary} />
                  <Text className='text-[11px] font-poppins-medium text-gray-600 ml-2'>{seatLabel}</Text>
                </View>
                <View className='px-3 py-1 rounded-full bg-white border border-gray-200 flex-row items-center'>
                  <Ticket size={14} color={AppColors.primary} />
                  <Text className='text-[11px] font-poppins-medium text-gray-600 ml-2'>{fareLabel}</Text>
                </View>
              </View>

              {departure.amenities.length > 0 ? (
                <View className='mt-3'>
                  <Text className='text-xs font-poppins-medium text-gray-500 mb-2'>Amenities</Text>
                  <View className='flex-row flex-wrap gap-2'>
                    {departure.amenities.slice(0, 4).map(amenity => (
                      <View
                        key={`${departure.id}-${amenity}`}
                        className='px-3 py-1 rounded-full bg-white border border-indigo-100'
                      >
                        <Text className='text-[11px] font-poppins-medium text-indigo-600'>{amenity}</Text>
                      </View>
                    ))}
                    {departure.amenities.length > 4 ? (
                      <View className='px-3 py-1 rounded-full bg-white border border-indigo-100'>
                        <Text className='text-[11px] font-poppins-medium text-indigo-600'>
                          +{departure.amenities.length - 4} more
                        </Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              ) : null}

              <View className='mt-4 flex-row items-center justify-between'>
                <Text className='text-xs font-poppins-medium text-gray-500'>
                  Booking {departure.bookingAvailable ? 'available' : 'not available'}
                </Text>

                {departure.bookingAvailable ? (
                  <TouchableOpacity
                    onPress={() => handleOpenBooking(departure.bookingURL)}
                    activeOpacity={0.9}
                    className='px-4 py-2 rounded-full bg-indigo-500'
                  >
                    <Text className='text-xs font-poppins-semibold text-white uppercase tracking-[1.2px]'>
                      Book now
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View className='px-4 py-2 rounded-full bg-gray-200'>
                    <Text className='text-xs font-poppins-semibold text-gray-500 uppercase tracking-[1.2px]'>
                      Walk-in only
                    </Text>
                  </View>
                )}
              </View>

              {departure.notes ? (
                <View className='mt-3 px-3 py-2 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex-row'>
                  <BadgeInfo size={14} color={AppColors.primary} />
                  <Text className='text-xs font-poppins-medium text-indigo-700 ml-2 flex-1'>
                    {departure.notes}
                  </Text>
                </View>
              ) : null}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default TimetableResultCard
