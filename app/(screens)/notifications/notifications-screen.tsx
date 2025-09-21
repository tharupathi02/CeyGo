import { Bell, Trash2 } from 'lucide-react-native';
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  View
} from 'react-native';
import AppTopBar, { TopBarAction } from '../../../components/appbar/AppTopBar';
import ActionBottomSheet, { BottomSheetAction } from '../../../components/bottom-sheets/ActionBottomSheet';
import NotificationCard from '../../../components/cards/NotificationCard';
import EmptyState from '../../../components/empty-state/EmptyState';
import mockNotifications, {
  getUnreadNotifications,
  markAllAsRead,
  markAsRead
} from '../../../constant/mockData/notifications';
import { useGlobalBottomSheet } from '../../../hooks/useGlobalBottomSheet';
import { Notification, NotificationFilter } from '../../../types/notification';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [selectedFilter, setSelectedFilter] = useState<NotificationFilter>('all');
  const [refreshing, setRefreshing] = useState(false);
  const { bottomSheetState, showBottomSheet, hideBottomSheet } = useGlobalBottomSheet();

  const unreadCount = getUnreadNotifications(notifications).length;

  const filteredNotifications = notifications.filter(notification => {
    switch (selectedFilter) {
      case 'unread':
        return !notification.isRead;
      case 'all':
        return true;
      default:
        return notification.type === selectedFilter;
    }
  }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

  const handleMarkAsRead = useCallback((id: string) => {
    setNotifications(prevNotifications => markAsRead(prevNotifications, id));
  }, []);

  const handleMarkAllAsRead = useCallback(() => {
    setNotifications(prevNotifications => markAllAsRead(prevNotifications));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const filterOptions: { key: NotificationFilter; label: string; color: string }[] = [
    { key: 'all', label: 'All', color: 'bg-gray-100 text-gray-700' },
    { key: 'unread', label: 'Unread', color: 'bg-blue-100 text-blue-700' },
    { key: 'success', label: 'Success', color: 'bg-green-100 text-green-700' },
    { key: 'promotion', label: 'Offers', color: 'bg-purple-100 text-purple-700' },
    { key: 'warning', label: 'Alerts', color: 'bg-amber-100 text-amber-700' },
    { key: 'system', label: 'System', color: 'bg-gray-100 text-gray-700' },
  ];

  const renderNotificationItem = ({ item }: { item: Notification }) => (
    <NotificationCard
      notification={item}
      onMarkAsRead={handleMarkAsRead}
      onPress={() => {
        // Handle navigation to specific screen if actionUrl exists
        console.log('Navigate to:', item.actionUrl);
      }}
    />
  );

  const handleRefreshNotifications = () => {
    onRefresh();
  };

  const handleMoreOptions = () => {
    // Handle more options like settings, clear all, etc.
    console.log('More options pressed');
  };

  const handleClearAll = () => {
    // Handle clearing all notifications
    setNotifications([]);
    console.log('Clear all notifications');
  };

  const handleTopBarActions = (actions: TopBarAction[]) => {
    const bottomSheetActions: BottomSheetAction[] = actions.map(action => ({
      key: action.key,
      label: action.label,
      icon: action.icon,
      onPress: action.onPress,
      destructive: action.destructive,
      disabled: action.disabled,
    }));

    showBottomSheet(bottomSheetActions, 'Notification Actions');
  };

  return (
    <View className="flex-1 bg-white">
      <AppTopBar
        title="Notifications"
        showBackButton={true}
        onActionsPress={handleTopBarActions}
        actions={[
          {
            key: 'clearAll',
            label: 'Clear All Notifications',
            icon: <Trash2 size={20} color="#EF4444" />,
            onPress: handleClearAll,
            destructive: true
          }
        ]}
      />

      {/* Notifications List */}
      {filteredNotifications.length > 0 ? (
        <FlatList
          data={filteredNotifications}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 8 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#3B82F6']}
              tintColor="#3B82F6"
            />
          }
        />
      ) : (
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#3B82F6']}
              tintColor="#3B82F6"
            />
          }
        >
          <EmptyState
            icon={<Bell size={48} color="#9CA3AF" />}
            title="No notifications"
            subtitle={
              selectedFilter === 'unread' 
                ? "You're all caught up! No unread notifications."
                : "You don't have any notifications yet."
            }
            actionLabel="Refresh"
            onActionPress={handleRefreshNotifications}
          />
        </ScrollView>
      )}

      {/* Global Action Bottom Sheet */}
      <ActionBottomSheet
        visible={bottomSheetState.visible}
        onClose={hideBottomSheet}
        title={bottomSheetState.title}
        actions={bottomSheetState.actions}
        cancelLabel={bottomSheetState.cancelLabel}
      />
    </View>
  );
};

export default NotificationScreen;