import { Activity } from '../../types/activity';

const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'ticket',
    date: '2025-09-15',
    time: '09:45',
    amount: 450,
    status: 'completed',
    routeNumber: '101',
    from: {
      name: 'Colombo Fort',
      code: 'CMB'
    },
    to: {
      name: 'Kandy',
      code: 'KDY'
    },
    passengers: 1
  },
  {
    id: '2',
    type: 'topup',
    date: '2025-09-12',
    time: '14:30',
    amount: 2000,
    status: 'completed',
    method: 'card',
    reference: 'TXN45678912'
  },
  {
    id: '3',
    type: 'ticket',
    date: '2025-09-10',
    time: '07:15',
    amount: 380,
    status: 'completed',
    routeNumber: '202',
    from: {
      name: 'Colombo',
      code: 'CMB'
    },
    to: {
      name: 'Galle',
      code: 'GLE'
    },
    passengers: 2
  },
  {
    id: '4',
    type: 'ticket',
    date: '2025-09-05',
    time: '16:20',
    amount: 520,
    status: 'cancelled',
    routeNumber: '304',
    from: {
      name: 'Negombo',
      code: 'NGB'
    },
    to: {
      name: 'Nuwara Eliya',
      code: 'NWE'
    },
    passengers: 1
  },
];

export default recentActivities;