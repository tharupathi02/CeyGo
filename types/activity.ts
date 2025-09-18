export interface Location {
  name: string;
  code?: string;
}

export interface ActivityBase {
  id: string;
  date: string;
  time: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled';
}

export interface TicketActivity extends ActivityBase {
  type: 'ticket';
  routeNumber: string;
  from: Location;
  to: Location;
  passengers: number;
}

export interface TopUpActivity extends ActivityBase {
  type: 'topup';
  method: 'card' | 'cash' | 'bank';
  reference: string;
}

export type Activity = TicketActivity | TopUpActivity;