import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { X } from 'lucide-react-native';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export interface BottomSheetAction {
  key: string;
  label: string;
  icon: React.ReactNode;
  onPress: () => void;
  destructive?: boolean;
  disabled?: boolean;
}

interface ActionBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  actions: BottomSheetAction[];
  cancelLabel?: string;
}

const ActionBottomSheet: React.FC<ActionBottomSheetProps> = ({
  visible,
  onClose,
  title,
  actions,
  cancelLabel = 'Cancel'
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  
  // Calculate snap points based on content
  const snapPoints = useMemo(() => {
    const handleHeight = 20; // Handle bar area
    const titleHeight = title ? 60 : 0;
    const headerPadding = 24; // Top and bottom padding
    const actionHeight = 80; // Each action item height including margins
    const cancelHeight = 72; // Cancel button height
    const bottomPadding = 40; // Bottom padding
    
    const totalHeight = handleHeight + titleHeight + headerPadding + (actions.length * actionHeight) + cancelHeight + bottomPadding;
    
    // Convert to percentage of screen height, with min 25% and max 85%
    const screenPercentage = Math.max(25, Math.min(85, (totalHeight / 800) * 100));
    
    return [`${screenPercentage}%`];
  }, [actions.length, title]);

  // Handle sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      onClose();
    }
  }, [onClose]);

  // Render backdrop
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
      />
    ),
    []
  );

  // Handle action press
  const handleActionPress = useCallback((action: BottomSheetAction) => {
    if (action.disabled) return;
    action.onPress();
    bottomSheetRef.current?.close();
  }, []);

  // Control sheet visibility
  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [visible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      enableContentPanningGesture={false}
      backgroundStyle={{
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
      handleIndicatorStyle={{
        backgroundColor: '#D1D5DB',
        width: 48,
        height: 4,
      }}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: -4,
        },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 16,
      }}
    >
        <BottomSheetView style={{ paddingHorizontal: 24, paddingBottom: 24, minHeight: 200 }}>
          {/* Header */}
          {title && (
            <View className="flex-row items-center justify-between pb-6 pt-2">
              <Text className="font-poppins-bold text-xl text-gray-900">
                {title}
              </Text>
            </View>
          )}

          {/* Actions List */}
          <View>
            {actions.map((action, index) => (
              <TouchableOpacity
                key={action.key}
                onPress={() => handleActionPress(action)}
                disabled={action.disabled}
                className={`
                  flex-row items-center py-4 px-4 rounded-2xl mb-3
                  ${action.disabled ? 'opacity-50' : 'active:bg-gray-50'}
                `}
                activeOpacity={action.disabled ? 1 : 0.7}
              >
                <View className={`
                  w-12 h-12 rounded-full items-center justify-center mr-4
                  ${action.destructive 
                    ? 'bg-red-50' 
                    : 'bg-blue-50'
                  }
                `}>
                  {action.icon}
                </View>
                <Text className={`
                  font-poppins-medium text-base flex-1
                  ${action.destructive 
                    ? 'text-red-600' 
                    : 'text-gray-900'
                  }
                  ${action.disabled ? 'text-gray-400' : ''}
                `}>
                  {action.label}
                </Text>
              </TouchableOpacity>
            ))}

            {/* Cancel Button */}
            <TouchableOpacity
              onPress={() => bottomSheetRef.current?.close()}
              className="flex-row items-center justify-center py-4 px-4 rounded-2xl bg-gray-100 mt-2"
              activeOpacity={0.7}
            >
              <Text className="font-poppins-semibold text-base text-gray-700">
                {cancelLabel}
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
    </BottomSheet>
  );
};

export default ActionBottomSheet;