import { format, parseISO } from 'date-fns';
import { ArrowRight, CreditCard, Ticket } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AppColors from '../../constant/Colors';
import { Activity } from '../../types/activity';

interface ActivityCardProps {
  activity: Activity;
  onPress?: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, onPress }) => {
  // Format date to display
  const formattedDate = format(parseISO(activity.date), 'MMM dd');

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600';
      case 'pending':
        return 'text-orange-500';
      case 'cancelled':
        return 'text-red-500';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBgColor = (status: Activity['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50';
      case 'pending':
        return 'bg-orange-50';
      case 'cancelled':
        return 'bg-red-50';
      default:
        return 'bg-gray-50';
    }
  };

  const renderTicketActivity = () => {
    const ticketActivity = activity as Extract<Activity, { type: 'ticket' }>;
    
    return (
      <View className="flex-1">
        <View className="flex-row justify-between mb-1">
          <Text className="font-poppins-medium text-gray-900">
            Route {ticketActivity.routeNumber}
          </Text>
          <Text className="font-poppins-medium text-gray-900">
            {ticketActivity.passengers} {ticketActivity.passengers > 1 ? 'Passengers' : 'Passenger'}
          </Text>
        </View>
        
        <View className="flex-row items-center mb-3">
          <View className="flex-1">
            <View className="flex-row items-center">
              <View className="h-2 w-2 rounded-full bg-blue-600 mr-2" />
              <Text className="text-xs text-gray-600">{ticketActivity.from.name}</Text>
            </View>
            
            <View className="h-6 border-l border-dashed border-gray-300 ml-1 my-0.5" />
            
            <View className="flex-row items-center">
              <View className="h-2 w-2 rounded-full bg-blue-600 mr-2" />
              <Text className="text-xs text-gray-600">{ticketActivity.to.name}</Text>
            </View>
          </View>
          
          <Text className="text-base font-poppins-semibold text-[#4F46E5]">
            {ticketActivity.amount.toLocaleString()} LKR
          </Text>
        </View>
      </View>
    );
  };

  const renderTopUpActivity = () => {
    const topupActivity = activity as Extract<Activity, { type: 'topup' }>;
    
    return (
      <View className="flex-1">
        <View className="flex-row justify-between mb-1">
          <Text className="font-poppins-medium text-gray-900">Wallet Top Up</Text>
          <Text className="font-poppins-medium text-gray-900">{topupActivity.method.toUpperCase()}</Text>
        </View>
        
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-xs text-gray-600">Ref: {topupActivity.reference}</Text>
          <Text className="text-base font-poppins-semibold text-[#4F46E5]">
            +{topupActivity.amount.toLocaleString()} LKR
          </Text>
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity 
      className="bg-white rounded-xl p-4 mb-3 border border-gray-100 shadow-sm"
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center mb-2">
        {/* Icon and date */}
        <View className={`w-10 h-10 rounded-full items-center justify-center ${activity.type === 'ticket' ? 'bg-blue-50' : 'bg-green-50'}`}>
          {activity.type === 'ticket' ? (
            <Ticket size={18} color={AppColors.primary} />
          ) : (
            <CreditCard size={18} color="#388E3C" />
          )}
        </View>
        
        <View className="ml-3">
          <Text className="text-xs text-gray-500">{formattedDate}</Text>
          <Text className="text-xs font-poppins-medium">{activity.time}</Text>
        </View>
        
        <View className="flex-1 items-end">
          <View className={`px-2.5 py-1 rounded-full ${getStatusBgColor(activity.status)}`}>
            <Text className={`text-xs font-poppins-medium capitalize ${getStatusColor(activity.status)}`}>
              {activity.status}
            </Text>
          </View>
        </View>
      </View>
      
      {/* Activity details based on type */}
      {activity.type === 'ticket' ? renderTicketActivity() : renderTopUpActivity()}
      
      {/* Bottom section - View details */}
      <View className="flex-row justify-end items-center mt-2">
        <Text className="text-xs font-poppins-medium text-[#4F46E5] mr-1">View details</Text>
        <ArrowRight size={14} color={AppColors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default ActivityCard;
