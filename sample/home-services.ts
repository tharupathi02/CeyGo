import { HomeService } from "@/types/home-service";

export const homeServices: HomeService[] = [
  {
    id: 'metro-plans',
    title: 'Metro Plans',
    subtitle: 'Passes & offers',
    icon: 'train',
    accentColor: '#4C6EF5',
    backgroundColor: '#EEF2FF',
    route: '/(screens)/metro-plans/metro-plans'
  },
  {
    id: 'top-up',
    title: 'Top Up',
    subtitle: 'Reload instantly',
    icon: 'credit-card',
    accentColor: '#F97316',
    backgroundColor: '#FEF3C7',
    route: '/(screens)/top-up/top-up-screen'
  },
  {
    id: 'tickets',
    title: 'My Tickets',
    subtitle: 'Upcoming trips',
    icon: 'ticket',
    accentColor: '#EC4899',
    backgroundColor: '#FFE4E6',
    route: '/(screens)/(tabs)/my-tickets'
  },
  {
    id: 'fare-info',
    title: 'Fare Info',
    subtitle: 'Find best fares',
    icon: 'wallet',
    accentColor: '#6366F1',
    backgroundColor: '#EDE9FE',
    route: '/(screens)/fare-info/fare-info'
  },
  {
    id: 'route-map',
    title: 'Route Map',
    subtitle: 'Plan your ride',
    icon: 'map',
    accentColor: '#10B981',
    backgroundColor: '#D1FAE5',
    route: '/(screens)/route-map/route-map-screen'
  },
  {
    id: 'time-table',
    title: 'Timetables',
    subtitle: 'Metro & bus',
    icon: 'clock',
    accentColor: '#22D3EE',
    backgroundColor: '#CFFAFE',
    route: '/(screens)/time-table/time-table'
  },
  {
    id: 'history',
    title: 'History',
    subtitle: 'Past rides',
    icon: 'history',
    accentColor: '#8B5CF6',
    backgroundColor: '#DDD6FE',
    route: '/(screens)/history/history'
  },
  {
    id: 'support',
    title: 'Support',
    subtitle: 'We are here',
    icon: 'lifebuoy',
    accentColor: '#F87171',
    backgroundColor: '#FEE2E2',
    route: '/(screens)/support/support-center'
  }
]
