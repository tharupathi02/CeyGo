export type FareClass = 'normal' | 'semiLuxury' | 'superLuxury' | 'sleeperLuxury' | 'express' | 'expressAC'

type FareDetail = {
  adult: number
  child: number
  student: number
  senior: number
}

type FareBreakdown = Partial<Record<FareClass, FareDetail>>

type Amenities = Partial<Record<FareClass, string[]>>

export type RouteFare = {
  id: string
  routeNumber: string
  routeName: string
  fromStation: string
  toStation: string
  distance: number
  duration: string
  operator: string
  fareBreakdown: FareBreakdown
  peakHourSurcharge: number
  weekendDiscount: number
  nfcCardDiscount: number
  frequency: string
  operatingHours: string
  stops: string[]
  amenities: Amenities
}

export const routeFares: RouteFare[] = [
  // Colombo - Kandy Routes
  {
    id: 'ROUTE-001',
    routeNumber: '1-1',
    routeName: 'Colombo - Kandy Express',
    fromStation: 'CMB-001',
    toStation: 'KDY-001',
    distance: 115,
    duration: '3h 15m',
    operator: 'SLTB Central',
    fareBreakdown: {
      normal: {
        adult: 450,
        child: 225,
        student: 225,
        senior: 360
      },
      semiLuxury: {
        adult: 650,
        child: 325,
        student: 325,
        senior: 520
      },
      superLuxury: {
        adult: 850,
        child: 425,
        student: 425,
        senior: 680
      }
    },
    peakHourSurcharge: 50,
    weekendDiscount: 10,
    nfcCardDiscount: 5,
    frequency: 'Every 30 minutes',
    operatingHours: '04:00 AM - 10:00 PM',
    stops: ['Kadawatha', 'Warakapola', 'Kegalle', 'Mawanella'],
    amenities: {
      normal: ['Standard Seating'],
      semiLuxury: ['Air Conditioning', 'Reclining Seats'],
      superLuxury: ['WiFi', 'USB Charging', 'Air Conditioning', 'Reclining Seats']
    }
  },

  // Colombo - Galle Routes
  {
    id: 'ROUTE-002',
    routeNumber: '2',
    routeName: 'Colombo - Galle Expressway',
    fromStation: 'CMB-003',
    toStation: 'GLE-001',
    distance: 119,
    duration: '2h 30m',
    operator: 'Southern Transport',
    fareBreakdown: {
      normal: {
        adult: 380,
        child: 190,
        student: 190,
        senior: 304
      },
      semiLuxury: {
        adult: 580,
        child: 290,
        student: 290,
        senior: 464
      },
      superLuxury: {
        adult: 780,
        child: 390,
        student: 390,
        senior: 624
      }
    },
    peakHourSurcharge: 40,
    weekendDiscount: 15,
    nfcCardDiscount: 8,
    frequency: 'Every 20 minutes',
    operatingHours: '04:30 AM - 11:00 PM',
    stops: ['Panadura', 'Kalutara', 'Aluthgama', 'Hikkaduwa'],
    amenities: {
      normal: ['Standard Seating'],
      semiLuxury: ['Air Conditioning', 'Music System'],
      superLuxury: ['WiFi', 'USB Charging', 'Air Conditioning', 'Reclining Seats', 'Entertainment']
    }
  },

  // Colombo - Jaffna Routes
  {
    id: 'ROUTE-003',
    routeNumber: '15',
    routeName: 'Colombo - Jaffna Intercity',
    fromStation: 'CMB-002',
    toStation: 'JAF-001',
    distance: 396,
    duration: '9h 30m',
    operator: 'Northern Express',
    fareBreakdown: {
      semiLuxury: {
        adult: 1450,
        child: 725,
        student: 725,
        senior: 1160
      },
      superLuxury: {
        adult: 1850,
        child: 925,
        student: 925,
        senior: 1480
      },
      sleeperLuxury: {
        adult: 2350,
        child: 1175,
        student: 1175,
        senior: 1880
      }
    },
    peakHourSurcharge: 0,
    weekendDiscount: 5,
    nfcCardDiscount: 10,
    frequency: '3 departures daily',
    operatingHours: '06:00 PM - 08:00 PM',
    stops: ['Vavuniya', 'Omanthai', 'Kilinochchi', 'Elephant Pass'],
    amenities: {
      semiLuxury: ['Air Conditioning', 'Reclining Seats', 'Rest Stops'],
      superLuxury: ['WiFi', 'USB Charging', 'Air Conditioning', 'Reclining Seats', 'Water Bottles'],
      sleeperLuxury: ['WiFi', 'USB Charging', 'Sleeper Berths', 'Air Conditioning', 'Blankets', 'Meals']
    }
  },

  // Kandy - Nuwara Eliya Routes
  {
    id: 'ROUTE-004',
    routeNumber: '47',
    routeName: 'Kandy - Nuwara Eliya Hill Country',
    fromStation: 'KDY-001',
    toStation: 'NWE-001',
    distance: 77,
    duration: '3h 30m',
    operator: 'Hill Country Transport',
    fareBreakdown: {
      normal: {
        adult: 320,
        child: 160,
        student: 160,
        senior: 256
      },
      semiLuxury: {
        adult: 480,
        child: 240,
        student: 240,
        senior: 384
      }
    },
    peakHourSurcharge: 30,
    weekendDiscount: 0,
    nfcCardDiscount: 5,
    frequency: 'Every 45 minutes',
    operatingHours: '05:00 AM - 07:00 PM',
    stops: ['Gampola', 'Nawalapitiya', 'Ramboda', 'Pussellawa'],
    amenities: {
      normal: ['Standard Seating', 'Scenic Route'],
      semiLuxury: ['Air Conditioning', 'Scenic Route', 'Blankets Available']
    }
  },

  // Colombo - Anuradhapura Routes
  {
    id: 'ROUTE-005',
    routeNumber: '15-1',
    routeName: 'Colombo - Anuradhapura Cultural Triangle',
    fromStation: 'CMB-001',
    toStation: 'ADP-001',
    distance: 206,
    duration: '5h 30m',
    operator: 'North Central Express',
    fareBreakdown: {
      normal: {
        adult: 580,
        child: 290,
        student: 290,
        senior: 464
      },
      semiLuxury: {
        adult: 680,
        child: 340,
        student: 340,
        senior: 544
      },
      superLuxury: {
        adult: 880,
        child: 440,
        student: 440,
        senior: 704
      }
    },
    peakHourSurcharge: 40,
    weekendDiscount: 8,
    nfcCardDiscount: 7,
    frequency: 'Every 1 hour',
    operatingHours: '04:30 AM - 09:00 PM',
    stops: ['Kurunegala', 'Galgamuwa', 'Dambulla', 'Habarana'],
    amenities: {
      normal: ['Standard Seating'],
      semiLuxury: ['Air Conditioning', 'Reclining Seats'],
      superLuxury: ['WiFi', 'USB Charging', 'Air Conditioning', 'Reclining Seats', 'Water Bottles']
    }
  },

  // Colombo - Trincomalee Routes
  {
    id: 'ROUTE-006',
    routeNumber: '45',
    routeName: 'Colombo - Trincomalee East Coast',
    fromStation: 'CMB-002',
    toStation: 'TRR-001',
    distance: 257,
    duration: '7h 30m',
    operator: 'Eastern Express',
    fareBreakdown: {
      semiLuxury: {
        adult: 980,
        child: 490,
        student: 490,
        senior: 784
      },
      superLuxury: {
        adult: 1250,
        child: 625,
        student: 625,
        senior: 1000
      }
    },
    peakHourSurcharge: 0,
    weekendDiscount: 10,
    nfcCardDiscount: 8,
    frequency: '2 departures daily',
    operatingHours: '08:00 PM - 09:30 PM',
    stops: ['Kurunegala', 'Dambulla', 'Habarana', 'Polonnaruwa'],
    amenities: {
      semiLuxury: ['Air Conditioning', 'Reclining Seats', 'Rest Stops'],
      superLuxury: ['WiFi', 'USB Charging', 'Air Conditioning', 'Reclining Seats', 'Reading Lights']
    }
  },

  // Colombo - Batticaloa Routes
  {
    id: 'ROUTE-007',
    routeNumber: '92',
    routeName: 'Colombo - Batticaloa Lagoon Express',
    fromStation: 'CMB-002',
    toStation: 'BTC-001',
    distance: 314,
    duration: '8h 30m',
    operator: 'East Coast Lines',
    fareBreakdown: {
      semiLuxury: {
        adult: 1150,
        child: 575,
        student: 575,
        senior: 920
      },
      superLuxury: {
        adult: 1450,
        child: 725,
        student: 725,
        senior: 1160
      }
    },
    peakHourSurcharge: 0,
    weekendDiscount: 8,
    nfcCardDiscount: 10,
    frequency: '1 departure daily',
    operatingHours: '07:00 PM - 07:30 PM',
    stops: ['Kadawatha', 'Kegalle', 'Kandy', 'Mahiyangana', 'Chenkaladi'],
    amenities: {
      semiLuxury: ['Air Conditioning', 'Reclining Seats'],
      superLuxury: ['WiFi', 'USB Charging', 'Air Conditioning', 'Reclining Seats', 'Water Bottles']
    }
  },

  // Matara - Colombo Routes
  {
    id: 'ROUTE-008',
    routeNumber: '2-1',
    routeName: 'Matara - Colombo Coastal Express',
    fromStation: 'MTR-001',
    toStation: 'CMB-001',
    distance: 160,
    duration: '3h 45m',
    operator: 'Southern Transport',
    fareBreakdown: {
      normal: {
        adult: 420,
        child: 210,
        student: 210,
        senior: 336
      },
      semiLuxury: {
        adult: 620,
        child: 310,
        student: 310,
        senior: 496
      }
    },
    peakHourSurcharge: 35,
    weekendDiscount: 12,
    nfcCardDiscount: 7,
    frequency: 'Every 30 minutes',
    operatingHours: '04:00 AM - 10:00 PM',
    stops: ['Weligama', 'Galle', 'Hikkaduwa', 'Ambalangoda', 'Kalutara'],
    amenities: {
      normal: ['Standard Seating', 'Coastal Views'],
      semiLuxury: ['Air Conditioning', 'Music System', 'Coastal Views']
    }
  },

  // Ratnapura - Colombo Routes
  {
    id: 'ROUTE-009',
    routeNumber: '122',
    routeName: 'Ratnapura - Colombo Gem City Express',
    fromStation: 'RTP-001',
    toStation: 'CMB-003',
    distance: 101,
    duration: '3h 15m',
    operator: 'Sabaragamuwa Transport',
    fareBreakdown: {
      normal: {
        adult: 280,
        child: 140,
        student: 140,
        senior: 224
      },
      semiLuxury: {
        adult: 420,
        child: 210,
        student: 210,
        senior: 336
      }
    },
    peakHourSurcharge: 25,
    weekendDiscount: 5,
    nfcCardDiscount: 5,
    frequency: 'Every 40 minutes',
    operatingHours: '04:30 AM - 09:30 PM',
    stops: ['Pelmadulla', 'Balangoda', 'Kahawatta', 'Avissawella', 'Homagama'],
    amenities: {
      normal: ['Standard Seating'],
      semiLuxury: ['Air Conditioning', 'Comfortable Seats']
    }
  },

  // Badulla - Colombo Routes
  {
    id: 'ROUTE-010',
    routeNumber: '99',
    routeName: 'Badulla - Colombo Uva Express',
    fromStation: 'BDL-001',
    toStation: 'CMB-001',
    distance: 232,
    duration: '6h 30m',
    operator: 'Uva Province Transport',
    fareBreakdown: {
      semiLuxury: {
        adult: 680,
        child: 340,
        student: 340,
        senior: 544
      },
      superLuxury: {
        adult: 850,
        child: 425,
        student: 425,
        senior: 680
      }
    },
    peakHourSurcharge: 40,
    weekendDiscount: 10,
    nfcCardDiscount: 8,
    frequency: 'Every 2 hours',
    operatingHours: '04:00 AM - 08:00 PM',
    stops: ['Ella', 'Wellawaya', 'Buttala', 'Monaragala', 'Bibila'],
    amenities: {
      semiLuxury: ['Air Conditioning', 'Mountain Views'],
      superLuxury: ['WiFi', 'USB Charging', 'Air Conditioning', 'Reclining Seats', 'Scenic Mountain Route']
    }
  },

  // Negombo - Colombo Routes
  {
    id: 'ROUTE-011',
    routeNumber: '240',
    routeName: 'Negombo - Colombo Airport Express',
    fromStation: 'NGB-001',
    toStation: 'CMB-002',
    distance: 37,
    duration: '1h 30m',
    operator: 'Western Express',
    fareBreakdown: {
      express: {
        adult: 150,
        child: 75,
        student: 75,
        senior: 120
      },
      expressAC: {
        adult: 220,
        child: 110,
        student: 110,
        senior: 176
      }
    },
    peakHourSurcharge: 20,
    weekendDiscount: 0,
    nfcCardDiscount: 10,
    frequency: 'Every 15 minutes',
    operatingHours: '04:00 AM - 11:00 PM',
    stops: ['Katunayake Airport', 'Ja-Ela', 'Wattala'],
    amenities: {
      express: ['Express Service', 'Luggage Storage'],
      expressAC: ['Air Conditioning', 'Express Service', 'WiFi', 'Luggage Storage']
    }
  },

  // Polonnaruwa - Batticaloa Routes
  {
    id: 'ROUTE-012',
    routeNumber: '87',
    routeName: 'Polonnaruwa - Batticaloa Historical Route',
    fromStation: 'PLN-001',
    toStation: 'BTC-001',
    distance: 128,
    duration: '4h 30m',
    operator: 'Eastern Province Transport',
    fareBreakdown: {
      normal: {
        adult: 350,
        child: 175,
        student: 175,
        senior: 280
      },
      semiLuxury: {
        adult: 420,
        child: 210,
        student: 210,
        senior: 336
      }
    },
    peakHourSurcharge: 30,
    weekendDiscount: 5,
    nfcCardDiscount: 5,
    frequency: 'Every 2 hours',
    operatingHours: '05:00 AM - 07:00 PM',
    stops: ['Welikanda', 'Bakiella', 'Eravur'],
    amenities: {
      normal: ['Standard Seating'],
      semiLuxury: ['Air Conditioning', 'Comfortable Seats']
    }
  },

  // Additional Short Routes
  {
    id: 'ROUTE-013',
    routeNumber: '138',
    routeName: 'Colombo - Kalutara Coastal',
    fromStation: 'CMB-001',
    toStation: 'KLT-001',
    distance: 42,
    duration: '1h 30m',
    operator: 'Western Express',
    fareBreakdown: {
      normal: {
        adult: 120,
        child: 60,
        student: 60,
        senior: 96
      },
      semiLuxury: {
        adult: 180,
        child: 90,
        student: 90,
        senior: 144
      }
    },
    peakHourSurcharge: 15,
    weekendDiscount: 10,
    nfcCardDiscount: 8,
    frequency: 'Every 20 minutes',
    operatingHours: '04:30 AM - 11:00 PM',
    stops: ['Moratuwa', 'Panadura'],
    amenities: {
      normal: ['Standard Seating'],
      semiLuxury: ['Air Conditioning', 'Express Stops']
    }
  },

  {
    id: 'ROUTE-014',
    routeNumber: '1-2',
    routeName: 'Kandy - Matale Temple Route',
    fromStation: 'KDY-001',
    toStation: 'MTL-001',
    distance: 26,
    duration: '1h 15m',
    operator: 'Central Province Transport',
    fareBreakdown: {
      normal: {
        adult: 85,
        child: 43,
        student: 43,
        senior: 68
      }
    },
    peakHourSurcharge: 10,
    weekendDiscount: 5,
    nfcCardDiscount: 5,
    frequency: 'Every 30 minutes',
    operatingHours: '05:00 AM - 09:00 PM',
    stops: ['Peradeniya', 'Katugastota'],
    amenities: {
      normal: ['Standard Seating', 'Temple Route']
    }
  },

  {
    id: 'ROUTE-015',
    routeNumber: '350',
    routeName: 'Galle - Hikkaduwa Beach Express',
    fromStation: 'GLE-001',
    toStation: 'HKD-001',
    distance: 18,
    duration: '45m',
    operator: 'Southern Coastal Transport',
    fareBreakdown: {
      normal: {
        adult: 60,
        child: 30,
        student: 30,
        senior: 48
      },
      express: {
        adult: 90,
        child: 45,
        student: 45,
        senior: 72
      }
    },
    peakHourSurcharge: 10,
    weekendDiscount: 0,
    nfcCardDiscount: 5,
    frequency: 'Every 15 minutes',
    operatingHours: '05:00 AM - 11:00 PM',
    stops: ['Dodanduwa', 'Boossa'],
    amenities: {
      normal: ['Standard Seating', 'Beach Route'],
      express: ['Air Conditioning', 'Limited Stops', 'Beach Route']
    }
  }
]
