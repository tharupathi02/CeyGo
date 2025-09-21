import { useState } from 'react';
import { BottomSheetAction } from '../components/bottom-sheets/ActionBottomSheet';

export interface BottomSheetState {
  visible: boolean;
  title?: string;
  actions: BottomSheetAction[];
  cancelLabel?: string;
}

export const useGlobalBottomSheet = () => {
  const [bottomSheetState, setBottomSheetState] = useState<BottomSheetState>({
    visible: false,
    title: undefined,
    actions: [],
    cancelLabel: 'Cancel'
  });

  const showBottomSheet = (
    actions: BottomSheetAction[],
    title?: string,
    cancelLabel?: string
  ) => {
    setBottomSheetState({
      visible: true,
      title,
      actions,
      cancelLabel
    });
  };

  const hideBottomSheet = () => {
    setBottomSheetState(prev => ({
      ...prev,
      visible: false
    }));
  };

  return {
    bottomSheetState,
    showBottomSheet,
    hideBottomSheet
  };
};