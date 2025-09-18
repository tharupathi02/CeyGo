import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BanknoteArrowUp, Bus, ClipboardClock, CreditCard, HeartHandshake, History, MapPin, Ticket } from 'lucide-react-native';
import React, { useCallback, useMemo } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import recentActivities from '../../constant/mockData/activities';
import ServiceButton from '../buttons/ServiceButton';
import ActivityCard from '../cards/ActivityCard';

interface HomeBottomSheetProps {
    bottomSheetRef: React.RefObject<BottomSheet | null>;
}

const HomeBottomSheet: React.FC<HomeBottomSheetProps> = ({ bottomSheetRef }) => {
    // Variables
    const snapPoints = useMemo(() => ['60%', '95%'], []);

    // Callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            enablePanDownToClose={false}
            enableOverDrag={false}
            animateOnMount={true}
            handleIndicatorStyle={{
                backgroundColor: '#D1D5DB',
                width: 80,
                height: 8,
            }}
            backgroundStyle={{
                backgroundColor: '#FFFFFF',
                borderRadius: 24,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: -4,
                },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 12,
            }}
        >
            <BottomSheetView style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: 24,
                        paddingBottom: 40
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Service List Header */}
                    <View className='flex-row justify-between items-center mb-6 mt-2'>
                        <Text className='text-lg font-bold text-gray-800'>Service List</Text>
                        <TouchableOpacity>
                            <Text className='text-[#4F46E5] text-sm'>See all</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Services Grid */}
                    <View className='flex-row flex-wrap justify-between mb-6'>
                        {/* First Row */}
                        <View className='flex-row w-full justify-between mb-4'>
                            <ServiceButton
                                icon={Bus}
                                title="Bus Tickets"
                                backgroundColorClass="bg-blue-50"
                                iconColor="#1976D2"
                                onPress={() => console.log('Bus Tickets pressed')}
                            />
                            <ServiceButton
                                icon={CreditCard}
                                title="Top Up"
                                backgroundColorClass="bg-orange-50"
                                iconColor="#F57C00"
                                onPress={() => console.log('Top Up pressed')}
                            />
                            <ServiceButton
                                icon={Ticket}
                                title="My Tickets"
                                backgroundColorClass="bg-pink-50"
                                iconColor="#C2185B"
                                onPress={() => console.log('My Tickets pressed')}
                            />
                            <ServiceButton
                                icon={BanknoteArrowUp}
                                title="Fare Info"
                                backgroundColorClass="bg-indigo-50"
                                iconColor="#3F51B5"
                                onPress={() => console.log('Fare Information pressed')}
                            />
                        </View>

                        {/* Second Row */}
                        <View className='flex-row w-full justify-between'>
                            <ServiceButton
                                icon={MapPin}
                                title="Route Map"
                                backgroundColorClass="bg-yellow-50"
                                iconColor="#FBC02D"
                                onPress={() => console.log('Route Map pressed')}
                            />
                            <ServiceButton
                                icon={ClipboardClock}
                                title="Timetables"
                                backgroundColorClass="bg-green-50"
                                iconColor="#388E3C"
                                onPress={() => console.log('Timetables pressed')}
                            />
                            <ServiceButton
                                icon={History}
                                title="History"
                                backgroundColorClass="bg-purple-50"
                                iconColor="#7B1FA2"
                                onPress={() => console.log('History pressed')}
                            />
                            <ServiceButton
                                icon={HeartHandshake}
                                title="Support"
                                backgroundColorClass="bg-red-50"
                                iconColor="#D32F2F"
                                onPress={() => console.log('Support pressed')}
                            />
                        </View>
                    </View>

                    {/* Recent Activity */}
                    <View className='mt-4'>
                        <View className='flex-row justify-between items-center mb-3'>
                            <Text className='text-base font-semibold text-gray-800'>Recent Activity</Text>
                            <TouchableOpacity>
                                <Text className='text-[#4F46E5] text-sm'>See all</Text>
                            </TouchableOpacity>
                        </View>

                        {recentActivities.length > 0 ? (
                            <View>
                                {recentActivities.map((item, index) => (
                                    <ActivityCard
                                        key={item.id}
                                        activity={item}
                                        onPress={() => console.log('Activity pressed:', item.id)}
                                    />
                                ))}
                            </View>
                        ) : (
                            <View className='bg-gray-50 rounded-xl p-4'>
                                <Text className='text-gray-500 text-center text-sm'>No recent activity</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </BottomSheetView>
        </BottomSheet>
    );
};

export default HomeBottomSheet;
