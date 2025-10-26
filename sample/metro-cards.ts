export interface MetroCardAutoReload {
  enabled: boolean
  threshold: number | null
  amount: number | null
  paymentMethod: string | null
}

export interface MetroCardBenefits {
  discountRate: number
  priorityBoarding: boolean
  loungeAccess: boolean
  monthlyPassDiscount: number
  airportExpressAccess?: boolean
  offPeakBonus?: number
  groupTravelBonus?: number
  weekendSpecial?: number
}

export interface MetroCardStatistics {
  totalTrips: number
  totalSpent: number
  averageTripCost: number
  mostUsedRoute: string
  favoriteStation: string
  carbonSaved: string
}

export interface MetroCardRecentTransaction {
  date: string
  time: string
  type: 'Trip' | 'Reload'
  route?: string
  from?: string
  to?: string
  method?: string
  location?: string
  amount: number
  balance: number
  passengers?: number
}

export interface MetroCardLinkedAccounts {
  bankCard?: string | null
  mobileWallet?: string | null
  loyaltyProgram?: string | null
  studentID?: string | null
}

export interface MetroCardSecuritySettings {
  pinEnabled: boolean
  biometricEnabled: boolean
  lostCardProtection: boolean
  transactionAlerts: boolean
  dailyLimit: number
}

export interface MetroCardPhysicalCard {
  serialNumber: string
  chipType: string
  manufacturer: string
  deliveryAddress: string
}

export interface MetroCardSpecialFeatures {
  airportLoungeDiscount?: number
  expressLaneAccess?: boolean
  parkAndRide?: boolean
}

export interface MetroCardFamilyMember {
  name: string
  relation: string
  age: number
  discountEligible: boolean
  childDiscount?: number
}

export interface MetroCardStudentVerification {
  institution: string
  studentID: string
  validUntil: string
  faculty: string
}

export interface MetroCard {
  id: string
  nickname: string
  cardNumber: string
  cardType: string
  balance: number
  currency: string
  lastUsed: string
  validThrough: string
  issueDate: string
  holder: string
  holderNIC: string
  holderPhone: string
  holderEmail: string
  gradient: [string, string]
  status: string
  cardStatus: string
  autoReload: MetroCardAutoReload
  benefits: MetroCardBenefits
  statistics: MetroCardStatistics
  recentTransactions: MetroCardRecentTransaction[]
  linkedAccounts: MetroCardLinkedAccounts
  securitySettings: MetroCardSecuritySettings
  physicalCard: MetroCardPhysicalCard
  specialFeatures?: MetroCardSpecialFeatures
  familyMembers?: MetroCardFamilyMember[]
  studentVerification?: MetroCardStudentVerification
}

export const metroCards: MetroCard[] = [
  {
    id: 'colombo-express',
    nickname: 'Colombo Express',
    cardNumber: '732184619234',
    cardType: 'Premium',
    balance: 1825.5,
    currency: 'LKR',
    lastUsed: 'Today • 09:15 AM',
    validThrough: '12/27',
    issueDate: '12/2023',
    holder: 'Deshan Tharupathi',
    holderNIC: '199512345678',
    holderPhone: '+94 77 123 4567',
    holderEmail: 'tharupathi02@gmail.com',
    gradient: ['#6366F1', '#4338CA'],
    status: 'Primary',
    cardStatus: 'Active',
    autoReload: {
      enabled: true,
      threshold: 500,
      amount: 2000,
      paymentMethod: 'Credit Card ending in 4532',
    },
    benefits: {
      discountRate: 15,
      priorityBoarding: true,
      loungeAccess: true,
      monthlyPassDiscount: 20,
    },
    statistics: {
      totalTrips: 142,
      totalSpent: 18450.5,
      averageTripCost: 129.93,
      mostUsedRoute: 'ME-204 (Colombo Metro Express)',
      favoriteStation: 'Colombo Fort Central',
      carbonSaved: '45.2 kg',
    },
    recentTransactions: [
      {
        date: '2025-10-26',
        time: '09:15 AM',
        type: 'Trip',
        route: 'ME-204',
        from: 'Colombo Fort Central',
        to: 'Kaduwela Metro Hub',
        amount: -320,
        balance: 1825.5,
      },
      {
        date: '2025-10-25',
        time: '06:30 PM',
        type: 'Trip',
        route: 'CS-112',
        from: 'Mount Lavinia City',
        to: 'Dehiwala Junction',
        amount: -180,
        balance: 2145.5,
      },
      {
        date: '2025-10-24',
        time: '11:20 AM',
        type: 'Reload',
        method: 'Auto-reload via Visa',
        amount: 2000,
        balance: 2325.5,
      },
    ],
    linkedAccounts: {
      bankCard: 'Commercial Bank - **** 4532',
      mobileWallet: 'eZ Cash - 077 123 4567',
      loyaltyProgram: 'Metro Rewards - Gold Member',
    },
    securitySettings: {
      pinEnabled: true,
      biometricEnabled: true,
      lostCardProtection: true,
      transactionAlerts: true,
      dailyLimit: 5000,
    },
    physicalCard: {
      serialNumber: 'CE-2023-142567',
      chipType: 'NFC Type A (ISO 14443A)',
      manufacturer: 'NXP MIFARE',
      deliveryAddress: '123/5A, Galle Road, Colombo 03',
    },
  },
  {
    id: 'city-link',
    nickname: 'City Link',
    cardNumber: '981245670123',
    cardType: 'Standard',
    balance: 940.75,
    currency: 'LKR',
    lastUsed: 'Yesterday • 07:45 PM',
    validThrough: '05/26',
    issueDate: '05/2024',
    holder: 'Deshan Tharupathi',
    holderNIC: '199512345678',
    holderPhone: '+94 77 123 4567',
    holderEmail: 'tharupathi02@gmail.com',
    gradient: ['#0EA5E9', '#2563EB'],
    status: 'Active',
    cardStatus: 'Active',
    autoReload: {
      enabled: false,
      threshold: null,
      amount: null,
      paymentMethod: null,
    },
    benefits: {
      discountRate: 5,
      priorityBoarding: false,
      loungeAccess: false,
      monthlyPassDiscount: 0,
    },
    statistics: {
      totalTrips: 67,
      totalSpent: 7820.25,
      averageTripCost: 116.72,
      mostUsedRoute: '1-1 (Colombo - Kandy Express)',
      favoriteStation: 'Kadawatha Junction',
      carbonSaved: '21.8 kg',
    },
    recentTransactions: [
      {
        date: '2025-10-25',
        time: '07:45 PM',
        type: 'Trip',
        route: '240',
        from: 'Wattala Central',
        to: 'Pettah Central',
        amount: -150,
        balance: 940.75,
      },
      {
        date: '2025-10-24',
        time: '08:30 AM',
        type: 'Trip',
        route: '1-1',
        from: 'Kadawatha',
        to: 'Colombo Central',
        amount: -210,
        balance: 1090.75,
      },
      {
        date: '2025-10-22',
        time: '03:15 PM',
        type: 'Reload',
        method: 'Cash at Kiosk',
        location: 'Colombo Fort Station',
        amount: 1000,
        balance: 1300.75,
      },
    ],
    linkedAccounts: {
      bankCard: null,
      mobileWallet: 'Dialog eZ Cash - 077 123 4567',
      loyaltyProgram: 'Metro Rewards - Silver Member',
    },
    securitySettings: {
      pinEnabled: true,
      biometricEnabled: false,
      lostCardProtection: true,
      transactionAlerts: false,
      dailyLimit: 3000,
    },
    physicalCard: {
      serialNumber: 'CL-2024-089234',
      chipType: 'NFC Type A (ISO 14443A)',
      manufacturer: 'NXP MIFARE',
      deliveryAddress: '123/5A, Galle Road, Colombo 03',
    },
  },
  {
    id: 'airport-shuttle',
    nickname: 'Airport Shuttle',
    cardNumber: '672310984512',
    cardType: 'Express',
    balance: 360,
    currency: 'LKR',
    lastUsed: 'Mon • 11:45 AM',
    validThrough: '09/26',
    issueDate: '09/2024',
    holder: 'Deshan Tharupathi',
    holderNIC: '199512345678',
    holderPhone: '+94 77 123 4567',
    holderEmail: 'tharupathi02@gmail.com',
    gradient: ['#F97316', '#EA580C'],
    status: 'Backup',
    cardStatus: 'Active',
    autoReload: {
      enabled: true,
      threshold: 300,
      amount: 1000,
      paymentMethod: 'eZ Cash Wallet',
    },
    benefits: {
      discountRate: 10,
      priorityBoarding: true,
      loungeAccess: false,
      monthlyPassDiscount: 10,
      airportExpressAccess: true,
    },
    statistics: {
      totalTrips: 28,
      totalSpent: 4680,
      averageTripCost: 167.14,
      mostUsedRoute: '240 (Negombo - Colombo Airport Express)',
      favoriteStation: 'Katunayake Airport Terminal',
      carbonSaved: '12.5 kg',
    },
    recentTransactions: [
      {
        date: '2025-10-21',
        time: '11:45 AM',
        type: 'Trip',
        route: '240',
        from: 'Colombo Fort',
        to: 'Katunayake Airport',
        amount: -150,
        balance: 360,
      },
      {
        date: '2025-10-18',
        time: '05:30 PM',
        type: 'Trip',
        route: '240',
        from: 'Katunayake Airport',
        to: 'Negombo',
        amount: -120,
        balance: 510,
      },
      {
        date: '2025-10-17',
        time: '02:10 PM',
        type: 'Reload',
        method: 'Auto-reload via eZ Cash',
        amount: 1000,
        balance: 630,
      },
    ],
    linkedAccounts: {
      bankCard: null,
      mobileWallet: 'eZ Cash - 077 123 4567',
      loyaltyProgram: 'Metro Rewards - Silver Member',
    },
    securitySettings: {
      pinEnabled: true,
      biometricEnabled: true,
      lostCardProtection: true,
      transactionAlerts: true,
      dailyLimit: 2500,
    },
    physicalCard: {
      serialNumber: 'AS-2024-156789',
      chipType: 'NFC Type A (ISO 14443A)',
      manufacturer: 'NXP MIFARE',
      deliveryAddress: '123/5A, Galle Road, Colombo 03',
    },
    specialFeatures: {
      airportLoungeDiscount: 25,
      expressLaneAccess: true,
      parkAndRide: true,
    },
  },
  {
    id: 'student-saver',
    nickname: 'Student Saver',
    cardNumber: '458923671045',
    cardType: 'Student',
    balance: 625.3,
    currency: 'LKR',
    lastUsed: '3 days ago • 04:20 PM',
    validThrough: '12/25',
    issueDate: '01/2024',
    holder: 'Deshan Tharupathi',
    holderNIC: '199512345678',
    holderPhone: '+94 77 123 4567',
    holderEmail: 'tharupathi02@gmail.com',
    gradient: ['#10B981', '#059669'],
    status: 'Active',
    cardStatus: 'Active',
    autoReload: {
      enabled: false,
      threshold: null,
      amount: null,
      paymentMethod: null,
    },
    benefits: {
      discountRate: 50,
      priorityBoarding: false,
      loungeAccess: false,
      monthlyPassDiscount: 40,
      offPeakBonus: 10,
    },
    statistics: {
      totalTrips: 185,
      totalSpent: 9250.5,
      averageTripCost: 50,
      mostUsedRoute: 'ME-204 (Colombo Metro Express)',
      favoriteStation: 'University Junction',
      carbonSaved: '62.3 kg',
    },
    recentTransactions: [
      {
        date: '2025-10-23',
        time: '04:20 PM',
        type: 'Trip',
        route: 'ME-204',
        from: 'University Junction',
        to: 'Colombo Fort',
        amount: -160,
        balance: 625.3,
      },
      {
        date: '2025-10-23',
        time: '08:10 AM',
        type: 'Trip',
        route: 'ME-204',
        from: 'Kaduwela Metro Hub',
        to: 'University Junction',
        amount: -160,
        balance: 785.3,
      },
      {
        date: '2025-10-20',
        time: '10:30 AM',
        type: 'Reload',
        method: 'Bank Transfer',
        amount: 500,
        balance: 945.3,
      },
    ],
    linkedAccounts: {
      bankCard: 'Student Account - BOC **** 8901',
      mobileWallet: null,
      loyaltyProgram: 'Metro Rewards - Bronze Member',
      studentID: 'UNIV/2023/0456',
    },
    securitySettings: {
      pinEnabled: true,
      biometricEnabled: false,
      lostCardProtection: true,
      transactionAlerts: true,
      dailyLimit: 1500,
    },
    physicalCard: {
      serialNumber: 'ST-2024-023456',
      chipType: 'NFC Type A (ISO 14443A)',
      manufacturer: 'NXP MIFARE',
      deliveryAddress: '123/5A, Galle Road, Colombo 03',
    },
    studentVerification: {
      institution: 'University of Colombo',
      studentID: 'UNIV/2023/0456',
      validUntil: '12/2025',
      faculty: 'Engineering',
    },
  },
  {
    id: 'family-pass',
    nickname: 'Family Pass',
    cardNumber: '234567890156',
    cardType: 'Family',
    balance: 3420.9,
    currency: 'LKR',
    lastUsed: '2 days ago • 06:35 PM',
    validThrough: '08/27',
    issueDate: '08/2023',
    holder: 'Deshan Tharupathi',
    holderNIC: '199512345678',
    holderPhone: '+94 77 123 4567',
    holderEmail: 'tharupathi02@gmail.com',
    gradient: ['#8B5CF6', '#7C3AED'],
    status: 'Active',
    cardStatus: 'Active',
    autoReload: {
      enabled: true,
      threshold: 1000,
      amount: 5000,
      paymentMethod: 'Bank Account - HNB **** 2341',
    },
    benefits: {
      discountRate: 20,
      priorityBoarding: false,
      loungeAccess: false,
      monthlyPassDiscount: 25,
      groupTravelBonus: 15,
      weekendSpecial: 10,
    },
    statistics: {
      totalTrips: 312,
      totalSpent: 28940.75,
      averageTripCost: 92.76,
      mostUsedRoute: '2 (Colombo - Galle Expressway)',
      favoriteStation: 'Kalutara Junction',
      carbonSaved: '124.8 kg',
    },
    recentTransactions: [
      {
        date: '2025-10-24',
        time: '06:35 PM',
        type: 'Trip',
        route: '2',
        from: 'Panadura',
        to: 'Colombo Fort',
        amount: -280,
        balance: 3420.9,
        passengers: 3,
      },
      {
        date: '2025-10-24',
        time: '09:15 AM',
        type: 'Trip',
        route: 'CS-112',
        from: 'Colombo',
        to: 'Mount Lavinia',
        amount: -240,
        balance: 3700.9,
        passengers: 2,
      },
      {
        date: '2025-10-22',
        time: '02:45 PM',
        type: 'Reload',
        method: 'Auto-reload via Bank Account',
        amount: 5000,
        balance: 3940.9,
      },
    ],
    linkedAccounts: {
      bankCard: 'Hatton National Bank - **** 2341',
      mobileWallet: 'FriMi Wallet - 077 123 4567',
      loyaltyProgram: 'Metro Rewards - Platinum Member',
    },
    securitySettings: {
      pinEnabled: true,
      biometricEnabled: true,
      lostCardProtection: true,
      transactionAlerts: true,
      dailyLimit: 8000,
    },
    physicalCard: {
      serialNumber: 'FM-2023-098765',
      chipType: 'NFC Type A (ISO 14443A)',
      manufacturer: 'NXP MIFARE',
      deliveryAddress: '123/5A, Galle Road, Colombo 03',
    },
    familyMembers: [
      {
        name: 'Deshan Tharupathi',
        relation: 'Primary',
        age: 30,
        discountEligible: true,
      },
      {
        name: 'Nethmi Gunasekara',
        relation: 'Spouse',
        age: 28,
        discountEligible: true,
      },
      {
        name: 'Sahan Gunasekara',
        relation: 'Child',
        age: 8,
        discountEligible: true,
        childDiscount: 50,
      },
    ],
  },
]

export const metroNFCCards = metroCards

export const cardUtils = {
  getCardById: (cardId: string) => metroCards.find((card) => card.id === cardId),
  getPrimaryCard: () => metroCards.find((card) => card.status === 'Primary'),
  getTotalBalance: () => metroCards.reduce((sum, card) => sum + card.balance, 0),
  getCardsByStatus: (status: string) => metroCards.filter((card) => card.cardStatus === status),
  getLowBalanceCards: (threshold: number = 500) => metroCards.filter((card) => card.balance < threshold),
  getTotalTrips: () => metroCards.reduce((sum, card) => sum + card.statistics.totalTrips, 0),
  getTotalCarbonSaved: () => {
    const total = metroCards.reduce((sum, card) => sum + (parseFloat(card.statistics.carbonSaved) || 0), 0)
    return parseFloat(total.toFixed(1))
  },
}
