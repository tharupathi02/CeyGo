import AppTopBar from '@/components/appbar/AppTopBar'
import MetroNFCCard from '@/components/cards/MetroNFCCard'
import AppColors from '@/constant/Colors'
import { cardUtils } from '@/sample/metro-cards'
import { formatCurrency, formatNumber, formatPercentage } from '@/utils/formatters'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ArrowRightLeft, CreditCard, ShieldCheck, Smartphone, User } from 'lucide-react-native'
import React, { useMemo } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const renderBoolean = (value: boolean) => (value ? 'Enabled' : 'Disabled')

const CardDetails = () => {
  const { id } = useLocalSearchParams<{ id?: string }>()
  const router = useRouter()

  const card = useMemo(() => {
    if (!id || Array.isArray(id)) return undefined
    return cardUtils.getCardById(id)
  }, [id])

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <AppTopBar
        title={card ? `${card.nickname} Card` : 'Card details'}
        showBackButton
        onBackPress={() => router.back()}
      />

      {card ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32, paddingHorizontal: 24, paddingTop: 24 }}
        >
          <MetroNFCCard key={card.id} card={card} />

          <View className='mt-4 gap-10'>
            <View>
              <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Usage overview</Text>
              <View className='gap-y-3'>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Total trips</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>{formatNumber(card.statistics.totalTrips)}</Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Total spent</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {formatCurrency(card.statistics.totalSpent, card.currency)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Average trip cost</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {formatCurrency(card.statistics.averageTripCost, card.currency)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Carbon saved</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>{card.statistics.carbonSaved}</Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Most used route</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>{card.statistics.mostUsedRoute}</Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Favorite station</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>{card.statistics.favoriteStation}</Text>
                </View>
              </View>
            </View>

            <View>
              <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Auto reload</Text>
              <View className='gap-y-3'>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Status</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {card.autoReload.enabled ? 'Enabled' : 'Disabled'}
                  </Text>
                </View>

                {card.autoReload.enabled ? (
                  <>
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-gray-500'>Threshold</Text>
                      <Text className='text-sm font-poppins-medium text-gray-900'>
                        {formatCurrency(card.autoReload.threshold ?? 0, card.currency)}
                      </Text>
                    </View>
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-gray-500'>Reload amount</Text>
                      <Text className='text-sm font-poppins-medium text-gray-900'>
                        {formatCurrency(card.autoReload.amount ?? 0, card.currency)}
                      </Text>
                    </View>
                  </>
                ) : null}

                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Payment method</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                    {card.autoReload.paymentMethod ?? 'Not linked'}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Benefits</Text>
              <View className='gap-y-3'>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Discount rate</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {formatPercentage(card.benefits.discountRate)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Priority boarding</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {renderBoolean(card.benefits.priorityBoarding)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Lounge access</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {renderBoolean(card.benefits.loungeAccess)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Monthly pass discount</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {formatPercentage(card.benefits.monthlyPassDiscount)}
                  </Text>
                </View>

                {card.benefits.airportExpressAccess !== undefined ? (
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Airport express access</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900'>
                      {renderBoolean(card.benefits.airportExpressAccess)}
                    </Text>
                  </View>
                ) : null}

                {card.benefits.offPeakBonus !== undefined ? (
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Off-peak bonus</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900'>
                      {formatPercentage(card.benefits.offPeakBonus)}
                    </Text>
                  </View>
                ) : null}

                {card.benefits.groupTravelBonus !== undefined ? (
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Group travel bonus</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900'>
                      {formatPercentage(card.benefits.groupTravelBonus)}
                    </Text>
                  </View>
                ) : null}

                {card.benefits.weekendSpecial !== undefined ? (
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Weekend special</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900'>
                      {formatPercentage(card.benefits.weekendSpecial)}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>

            <View>
              <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Linked accounts</Text>
              <View className='gap-y-3'>
                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center'>
                    <Text className='text-sm text-gray-500'>Bank card</Text>
                  </View>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                    {card.linkedAccounts.bankCard ?? 'Not linked'}
                  </Text>
                </View>

                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center'>
                    <Text className='text-sm text-gray-500'>Mobile wallet</Text>
                  </View>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                    {card.linkedAccounts.mobileWallet ?? 'Not linked'}
                  </Text>
                </View>

                <View className='flex-row items-center justify-between'>
                  <View className='flex-row items-center'>
                    <Text className='text-sm text-gray-500'>Loyalty program</Text>
                  </View>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                    {card.linkedAccounts.loyaltyProgram ?? 'Not linked'}
                  </Text>
                </View>

                {card.linkedAccounts.studentID ? (
                  <View className='flex-row items-center justify-between'>
                    <View className='flex-row items-center'>
                      <User size={16} color={AppColors.primary} />
                      <Text className='text-sm text-gray-500 ml-2'>Student ID</Text>
                    </View>
                    <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                      {card.linkedAccounts.studentID}
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>

            <View>
              <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Security & limits</Text>
              <View className='gap-y-3'>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>PIN</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {renderBoolean(card.securitySettings.pinEnabled)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Biometrics</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {renderBoolean(card.securitySettings.biometricEnabled)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Lost card protection</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {renderBoolean(card.securitySettings.lostCardProtection)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Transaction alerts</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {renderBoolean(card.securitySettings.transactionAlerts)}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Daily limit</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>
                    {formatCurrency(card.securitySettings.dailyLimit, card.currency)}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Physical card</Text>
              <View className='gap-y-3'>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Serial number</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900'>{card.physicalCard.serialNumber}</Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Chip type</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                    {card.physicalCard.chipType}
                  </Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-sm text-gray-500'>Manufacturer</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                    {card.physicalCard.manufacturer}
                  </Text>
                </View>
                <View>
                  <Text className='text-sm text-gray-500'>Delivery address</Text>
                  <Text className='text-sm font-poppins-medium text-gray-900 mt-1'>{card.physicalCard.deliveryAddress}</Text>
                </View>
              </View>
            </View>

            {card.specialFeatures ? (
              <View>
                <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Special features</Text>
                <View className='gap-y-3'>
                  {card.specialFeatures.airportLoungeDiscount !== undefined ? (
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-gray-500'>Airport lounge discount</Text>
                      <Text className='text-sm font-poppins-medium text-gray-900'>
                        {formatPercentage(card.specialFeatures.airportLoungeDiscount)}
                      </Text>
                    </View>
                  ) : null}

                  {card.specialFeatures.expressLaneAccess !== undefined ? (
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-gray-500'>Express lane access</Text>
                      <Text className='text-sm font-poppins-medium text-gray-900'>
                        {renderBoolean(card.specialFeatures.expressLaneAccess)}
                      </Text>
                    </View>
                  ) : null}

                  {card.specialFeatures.parkAndRide !== undefined ? (
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-gray-500'>Park & ride</Text>
                      <Text className='text-sm font-poppins-medium text-gray-900'>
                        {renderBoolean(card.specialFeatures.parkAndRide)}
                      </Text>
                    </View>
                  ) : null}
                </View>
              </View>
            ) : null}

            {card.familyMembers ? (
              <View>
                <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Family members</Text>
                <View className='gap-y-3'>
                  {card.familyMembers.map((member) => (
                    <View key={member.name}>
                      <Text className='text-sm font-poppins-semibold text-gray-900'>{member.name}</Text>
                      <Text className='text-xs text-gray-500 mt-1'>
                        {member.relation} • {member.age} yrs
                      </Text>
                      <Text className='text-xs text-gray-500 mt-1'>
                        Discount eligible: {member.discountEligible ? 'Yes' : 'No'}
                      </Text>
                      {member.childDiscount !== undefined ? (
                        <Text className='text-xs text-gray-500 mt-1'>
                          Child discount: {formatPercentage(member.childDiscount)}
                        </Text>
                      ) : null}
                    </View>
                  ))}
                </View>
              </View>
            ) : null}

            {card.studentVerification ? (
              <View>
                <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Student verification</Text>
                <View className='gap-y-3'>
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Institution</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900 text-right'>
                      {card.studentVerification.institution}
                    </Text>
                  </View>
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Student ID</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900'>
                      {card.studentVerification.studentID}
                    </Text>
                  </View>
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Valid until</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900'>
                      {card.studentVerification.validUntil}
                    </Text>
                  </View>
                  <View className='flex-row justify-between'>
                    <Text className='text-sm text-gray-500'>Faculty</Text>
                    <Text className='text-sm font-poppins-medium text-gray-900'>
                      {card.studentVerification.faculty}
                    </Text>
                  </View>
                </View>
              </View>
            ) : null}

            <View>
              <Text className='text-base font-poppins-semibold text-gray-900 mb-3'>Recent activity</Text>
              <View className='gap-y-4'>
                {card.recentTransactions.map((transaction, index) => {
                  const isDebit = transaction.amount < 0
                  const badgeBackground = isDebit
                    ? 'bg-rose-500/10 border border-rose-100'
                    : 'bg-emerald-500/10 border border-emerald-100'
                  const badgeText = isDebit ? 'text-rose-600' : 'text-emerald-600'
                  const amountColor = isDebit ? 'text-rose-600' : 'text-emerald-600'
                  const accentTop = isDebit ? 'bg-rose-200/50' : 'bg-emerald-200/50'
                  const accentBottom = isDebit ? 'bg-rose-100/40' : 'bg-emerald-100/40'
                  const primaryLabel = transaction.route
                    ? `Route ${transaction.route}`
                    : transaction.method ?? transaction.type

                  return (
                    <View
                      key={`${transaction.date}-${index}`}
                      className='relative overflow-hidden rounded-3xl border border-gray-100 bg-white px-5 py-5 shadow-sm shadow-indigo-50/40'
                    >
                      <View className={`absolute -right-16 -top-16 h-36 w-36 rounded-full ${accentTop}`} />
                      <View className={`absolute -left-20 bottom-0 h-40 w-40 rounded-full ${accentBottom}`} />

                      <View className='flex-row justify-between items-start'>
                        <View className='flex-1 pr-4'>
                          <View className={`self-start px-3 py-1 rounded-full ${badgeBackground}`}>
                            <Text className={`text-[11px] font-poppins-medium uppercase tracking-[1px] ${badgeText}`}>
                              {transaction.type}
                            </Text>
                          </View>

                          <Text className='text-lg font-poppins-semibold text-gray-900 mt-3'>{primaryLabel.replace('-', ' ').toUpperCase()}</Text>

                          {transaction.from && transaction.to ? (
                            <View className='flex-row items-center mt-3'>
                              <View className='px-3 py-1 rounded-full bg-gray-100/80'>
                                <Text className='text-xs font-poppins-medium text-gray-600'>{transaction.from}</Text>
                              </View>
                              <ArrowRightLeft size={14} color={AppColors.primary} style={{ marginHorizontal: 8 }} />
                              <View className='px-3 py-1 rounded-full bg-gray-100/80'>
                                <Text className='text-xs font-poppins-medium text-gray-600'>{transaction.to}</Text>
                              </View>
                            </View>
                          ) : null}

                          {transaction.method ? (
                            <Text className='text-xs text-gray-500 mt-3'>Method: {transaction.method.replace('-', ' ').toUpperCase()}</Text>
                          ) : null}

                          {transaction.location ? (
                            <Text className='text-xs text-gray-500 mt-1'>Location: {transaction.location}</Text>
                          ) : null}

                          {transaction.passengers !== undefined ? (
                            <Text className='text-xs text-gray-500 mt-1'>Passengers: {transaction.passengers}</Text>
                          ) : null}

                          <Text className='text-xs text-gray-400 mt-4'>
                            {transaction.date} • {transaction.time}
                          </Text>
                        </View>

                        <View className='items-end'>
                          <Text className={`text-2xl font-poppins-semibold ${amountColor}`}>
                            {transaction.amount < 0 ? '-' : '+'}
                            {formatCurrency(Math.abs(transaction.amount), card.currency)}
                          </Text>
                          <Text className='text-xs text-gray-500 mt-3'>Balance after</Text>
                          <Text className='text-sm font-poppins-medium text-gray-900 mt-1'>
                            {formatCurrency(transaction.balance, card.currency)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  )
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View className='flex-1 items-center justify-center px-10'>
          <ShieldCheck size={48} color={AppColors.primary} />
          <Text className='text-lg font-poppins-semibold text-gray-900 mt-4 text-center'>Card not found</Text>
          <Text className='text-sm text-gray-500 mt-2 text-center'>
            We couldn’t load this card. Please go back and try again.
          </Text>
        </View>
      )}
    </SafeAreaView>
  )
}

export default CardDetails