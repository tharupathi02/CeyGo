import { BadgePercent, Clock, MapPin, Route, Sparkles } from 'lucide-react-native'
import React from 'react'
import { Text, View } from 'react-native'
import AppColors from '../../constant/Colors'
import type { BusStation } from '../../sample/bus-station'
import type { RouteFare } from '../../sample/route-fare'
import type { FareClassDetail } from '../../utils/route-utils'
import { formatNumber } from '../../utils/formatters'

type FareResultCardProps = {
  route: RouteFare
  fromStation: BusStation | null
  toStation: BusStation | null
  fareClasses: FareClassDetail[]
  formatter: (value: number, currency?: string) => string
}

const classLabelMap: Record<string, string> = {
  normal: 'Normal',
  semiLuxury: 'Semi Luxury',
  superLuxury: 'Super Luxury',
  sleeperLuxury: 'Sleeper Luxury',
  express: 'Express',
  expressAC: 'Express AC'
}

const FareResultCard: React.FC<FareResultCardProps> = ({
  route,
  fromStation,
  toStation,
  fareClasses,
  formatter
}) => {
  const fromLabel = fromStation ? `${fromStation.name} (${fromStation.code})` : route.fromStation
  const toLabel = toStation ? `${toStation.name} (${toStation.code})` : route.toStation
  const stopsPreview = route.stops.slice(0, 4)
  const extraStops = Math.max(route.stops.length - stopsPreview.length, 0)

  return (
    <View className='border-t border-dashed border-gray-300 pt-6'>
      <View className='flex-row justify-between items-start'>
        <View className='flex-1 pr-4'>
          <Text className='text-xs uppercase font-poppins-medium tracking-[2px] text-indigo-500'>{route.routeNumber}</Text>
          <Text className='text-xl font-poppins-semibold text-gray-900 mt-1'>{route.routeName}</Text>
          <View className='flex-row items-center mt-3'>
            <MapPin size={16} color={AppColors.primary} />
            <Text className='text-xs text-gray-500 ml-2 font-poppins-medium'>{fromLabel}</Text>
          </View>
          <View className='h-5 border-l border-dashed border-gray-300 ml-1 mt-1 mb-1' />
          <View className='flex-row items-center'>
            <MapPin size={16} color={AppColors.primary} />
            <Text className='text-xs text-gray-500 ml-2 font-poppins-medium'>{toLabel}</Text>
          </View>
        </View>

        <View className='px-3 py-1 rounded-full bg-indigo-50'>
          <Text className='text-[11px] font-poppins-semibold text-indigo-600 uppercase tracking-[1.4px]'>
            {route.operator}
          </Text>
        </View>
      </View>

      <View className='flex-row flex-wrap gap-2 mt-6'>
        <View className='px-3 py-1 rounded-full bg-gray-100'>
          <Text className='text-[11px] font-poppins-medium text-gray-600'>Distance • {formatNumber(route.distance)} km</Text>
        </View>
        <View className='px-3 py-1 rounded-full bg-gray-100'>
          <Text className='text-[11px] font-poppins-medium text-gray-600'>Duration • {route.duration}</Text>
        </View>
        <View className='px-3 py-1 rounded-full bg-gray-100'>
          <Text className='text-[11px] font-poppins-medium text-gray-600'>Frequency • {route.frequency}</Text>
        </View>
        <View className='px-3 py-1 rounded-full bg-gray-100'>
          <Text className='text-[11px] font-poppins-medium text-gray-600'>Hours • {route.operatingHours}</Text>
        </View>
      </View>

      <View className='mt-6 space-y-3'>
        {fareClasses.map(fareClass => {
          const amenities = (route.amenities?.[fareClass.key as keyof typeof route.amenities] ?? []) as string[]
          const label = classLabelMap[fareClass.key] ?? fareClass.key

          return (
            <View
              key={fareClass.key}
              className='rounded-2xl border border-gray-100 bg-gray-50/60 px-4 py-4 mt-4'
            >
              <View className='flex-row items-center justify-between'>
                <Text className='text-base font-poppins-semibold text-gray-900'>{label}</Text>
                <Text className='text-lg font-poppins-semibold text-indigo-600'>
                  {formatter(fareClass.adult)}
                </Text>
              </View>

              <View className='flex-row flex-wrap gap-2 mt-3'>
                {([
                  ['Adult', fareClass.adult],
                  ['Child', fareClass.child],
                  ['Student', fareClass.student],
                  ['Senior', fareClass.senior]
                ] as const).map(([ageLabel, amount]) => (
                  <View key={`${fareClass.key}-${ageLabel}`} className='px-3 py-1 rounded-full bg-white border border-gray-200'>
                    <Text className='text-[11px] font-poppins-medium text-gray-600'>
                      {ageLabel} • {formatter(amount)}
                    </Text>
                  </View>
                ))}
              </View>

              {amenities.length > 0 ? (
                <View className='mt-3'>
                  <View className='flex-row items-center mb-2'>
                    <Sparkles size={14} color={AppColors.primary} />
                    <Text className='text-xs font-poppins-medium text-gray-500 ml-2'>Amenities</Text>
                  </View>
                  <View className='flex-row flex-wrap gap-2'>
                    {amenities.slice(0, 4).map(amenity => (
                      <View key={`${fareClass.key}-${amenity}`} className='px-3 py-1 rounded-full bg-white border border-indigo-100'>
                        <Text className='text-[11px] font-poppins-medium text-indigo-600'>{amenity}</Text>
                      </View>
                    ))}
                    {amenities.length > 4 ? (
                      <View className='px-3 py-1 rounded-full bg-white border border-indigo-100'>
                        <Text className='text-[11px] font-poppins-medium text-indigo-600'>+{amenities.length - 4} more</Text>
                      </View>
                    ) : null}
                  </View>
                </View>
              ) : null}
            </View>
          )
        })}
      </View>

      <View className='mt-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 px-4 py-4'>
        <View className='flex-row items-center justify-between'>
          <View className='flex-row items-center'>
            <Clock size={16} color={AppColors.primary} />
            <Text className='text-xs font-poppins-medium text-gray-600 ml-2'>Peak hour surcharge</Text>
          </View>
          <Text className='text-xs font-poppins-semibold text-indigo-700'>
            {route.peakHourSurcharge > 0 ? formatter(route.peakHourSurcharge) : 'No surcharge'}
          </Text>
        </View>

        <View className='flex-row items-center justify-between mt-3'>
          <View className='flex-row items-center'>
            <BadgePercent size={16} color={AppColors.primary} />
            <Text className='text-xs font-poppins-medium text-gray-600 ml-2'>Weekend discount</Text>
          </View>
          <Text className='text-xs font-poppins-semibold text-indigo-700'>{route.weekendDiscount}%</Text>
        </View>

        <View className='flex-row items-center justify-between mt-3'>
          <View className='flex-row items-center'>
            <Route size={16} color={AppColors.primary} />
            <Text className='text-xs font-poppins-medium text-gray-600 ml-2'>NFC card discount</Text>
          </View>
          <Text className='text-xs font-poppins-semibold text-indigo-700'>{route.nfcCardDiscount}%</Text>
        </View>
      </View>

      <View className='mt-6'>
        <Text className='text-xs uppercase font-poppins-medium text-gray-400'>Key stops</Text>
        <View className='flex-row flex-wrap gap-2 mt-2'>
          {stopsPreview.map(stop => (
            <View key={stop} className='px-3 py-1 rounded-full bg-gray-100 border border-gray-200'>
              <Text className='text-[11px] font-poppins-medium text-gray-600'>{stop}</Text>
            </View>
          ))}
          {extraStops > 0 ? (
            <View className='px-3 py-1 rounded-full bg-gray-100 border border-gray-200'>
              <Text className='text-[11px] font-poppins-medium text-gray-600'>+{extraStops} more</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  )
}

export default FareResultCard
