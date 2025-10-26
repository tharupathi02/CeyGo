type LooseRecord = Record<string, unknown>

export type PlanPerk = {
  title: string
  icon: string
  description: string
}

export type PlanFaq = {
  question: string
  answer: string
}

type Pricing = {
  pricePerMonth: number
  currency: string
  originalPrice: number
  discount: number
  paymentOptions: string[]
  refundPolicy: string
  pricePerYear?: number
  pricePerQuarter?: number
  savingsPerMonth?: number
  savingsPerYear?: number
  perPersonCost?: number
  trialPeriod?: {
    available: boolean
    duration: string
    cost: number
  }
  employerSubsidy?: {
    available: boolean
    partnersIndustries: string[]
    subsidyRange: string
  }
} & LooseRecord

type PlanUsage = {
  ridesPerMonth?: number
  ridesPerDay?: number
  unlimitedWeekdays?: boolean
  unlimitedWeekends?: boolean
  unlimitedHolidays?: boolean
  weekendRides?: string
  weekdayRides?: string
  unlimitedNightHours?: boolean | string
  nightRoutes?: boolean
  dayTimeRides?: string
  peakHourAccess?: boolean
  expiryDays: number
  rolloverRides?: boolean
  rolloverLimit?: number
  additionalRideCost?: number
} & LooseRecord

export type MetroPlan = {
  id: string
  name: string
  tagline: string
  description: string
  longDescription: string
  targetAudience: string
  status: string
  popularity: string
  pricing: Pricing
  usage: PlanUsage
  perks: PlanPerk[]
  highlights: string[]
  eligibility: LooseRecord
  recommendedFor: string
  idealUser?: LooseRecord
  coverage: LooseRecord
  features: LooseRecord
  terms: LooseRecord
  accentColor: string
  gradient: [string, string]
  iconSet: string
  bannerImage: string
  testimonials?: LooseRecord[]
  stats?: LooseRecord
  comparison?: LooseRecord
  promotions?: LooseRecord
  faqs?: PlanFaq[]
  relatedPlans: string[]
  upgradeOptions: string[]
  downgradeOptions: string[]
  partnerBenefits?: LooseRecord[]
  travelPackages?: LooseRecord[]
  employerPartnerships?: LooseRecord[]
  wellnessSupport?: LooseRecord
  meta: {
    createdAt: string
    lastUpdated: string
    version: string
    planCode: string
    category: string
    tags: string[]
  }
}

export const metroBusPlans: MetroPlan[] = [
  {
    id: 'student-plus',
    name: 'Student Plus',
    tagline: 'Study Smart, Travel Smarter',
    description: 'Unlimited weekday rides with weekend half fares for university and school students.',
    longDescription: 'Designed specifically for students who need reliable, affordable transportation between home, campus, libraries, and study groups. Get unlimited weekday access to all routes with special weekend pricing and exclusive student perks.',
    targetAudience: 'Full-time students with valid ID',
    status: 'Active',
    popularity: 'Most Popular',

    // Pricing Details
    pricing: {
      pricePerMonth: 2750,
      currency: 'LKR',
      pricePerYear: 29700, // 10% annual discount
      pricePerQuarter: 7800, // 5% quarterly discount
      originalPrice: 3500,
      discount: 21, // percentage
      savingsPerMonth: 750,
      savingsPerYear: 9000,
      paymentOptions: ['Monthly Auto-renewal', 'Quarterly', 'Annual'],
      refundPolicy: 'Pro-rated refund within first 14 days',
      trialPeriod: {
        available: true,
        duration: '7 days',
        cost: 0
      }
    },

    // Usage Limits
    usage: {
      ridesPerMonth: 90,
      ridesPerDay: 6,
      unlimitedWeekdays: true,
      weekendRides: 'Half fare on all routes',
      peakHourAccess: true,
      expiryDays: 30,
      rolloverRides: false,
      additionalRideCost: 120 // if exceeded
    },

    // Perks & Benefits
    perks: [
      {
        title: '50% off weekend leisure routes',
        icon: 'weekend',
        description: 'Explore Sri Lanka every weekend at half price on all scenic and coastal routes'
      },
      {
        title: 'Priority boarding during peak hours',
        icon: 'priority',
        description: 'Skip the queue during morning and evening rush hours with dedicated student lanes'
      },
      {
        title: 'FREE WiFi access at major terminals',
        icon: 'wifi',
        description: 'Stay connected while waiting with high-speed internet at 25+ major bus stations'
      },
      {
        title: 'Study lounge access',
        icon: 'lounge',
        description: 'Quiet study spaces with charging points at Colombo Fort, Kandy, and Galle terminals'
      },
      {
        title: 'Group booking discounts',
        icon: 'group',
        description: '20% off when booking for 5+ students on field trips or educational tours'
      }
    ],

    highlights: [
      'Linked to student ID for seamless validation',
      'Access to study lounge areas in select hubs',
      'Early access to revision night express services',
      'Book exam special late-night services during finals',
      'Complimentary route planning for internship commutes',
      'Partner discounts at campus food courts (10-15% off)'
    ],

    // Eligibility & Requirements
    eligibility: {
      minAge: 16,
      maxAge: 35,
      requiredDocuments: [
        'Valid student ID card',
        'University/School enrollment letter (current semester)',
        'National Identity Card or Birth Certificate',
        'Recent passport-size photograph'
      ],
      verificationProcess: 'Upload documents via app or visit any metro service center',
      renewalRequired: 'Every 6 months with updated student ID',
      institutionsAccepted: [
        'All state universities',
        'Recognized private universities',
        'Government schools (Grades 6-13)',
        'Vocational training institutes',
        'International schools with local registration'
      ]
    },

    recommendedFor: 'Daily campus commuters balancing lectures, labs and evening classes.',
    idealUser: {
      profile: 'University student commuting 40-60 minutes each way',
      averageDailyTrips: 2,
      averageMonthlySpending: 3500,
      potentialSavings: 750
    },

    // Routes & Coverage
    coverage: {
      allRoutes: true,
      expressRoutes: true,
      nightRoutes: true,
      airportShuttle: false,
      intercityAccess: true,
      blackoutDates: [],
      peakRestrictions: 'None'
    },

    // Additional Features
    features: {
      mobileApp: {
        realTimeTracking: true,
        seatReservation: true,
        digitalPass: true,
        tripHistory: true,
        budgetTracker: true,
        friendSharing: 'Split fare with 3 friends'
      },
      nfcCard: {
        included: true,
        replacementCost: 150,
        design: 'Student themed with institution logo option',
        deliveryTime: '3-5 business days'
      },
      customerSupport: {
        hours: '8:00 AM - 8:00 PM',
        channels: ['Phone', 'Email', 'Live Chat', 'In-app'],
        responseTime: 'Within 2 hours',
        dedicatedStudentLine: true
      }
    },

    // Terms & Conditions
    terms: {
      minimumCommitment: '1 month',
      cancellationNotice: '7 days',
      suspensionPolicy: 'Up to 1 month for semester breaks (one-time per year)',
      sharingPolicy: 'Non-transferable, ID verification required',
      violationPenalty: 'Plan suspension and fine of LKR 5000'
    },

    // Marketing & Visuals
    accentColor: '#6366F1',
    gradient: ['#4F46E5', '#A855F7'],
    iconSet: 'student',
    bannerImage: '/images/plans/student-plus-banner.jpg',
    testimonials: [
      {
        name: 'Nimesh Fernando',
        institution: 'University of Colombo',
        rating: 5,
        comment: 'Saved over 10,000 rupees in my first semester. The priority boarding is a lifesaver during exam season!'
      },
      {
        name: 'Sandali Perera',
        institution: 'SLIIT Campus',
        rating: 5,
        comment: 'Study lounges at terminals are perfect for group projects between classes.'
      }
    ],

    // Statistics
    stats: {
      activeSubscribers: 12450,
      averageRating: 4.8,
      satisfactionRate: 94,
      renewalRate: 87,
      averageTripsSaved: 850 // per month across all users
    },

    // Comparison with alternatives
    comparison: {
      regularFare: {
        perTrip: 180,
        monthlyEstimate: 3600,
        annualEstimate: 43200
      },
      savings: {
        monthly: 850,
        annual: 10200,
        percentageSaved: 24
      }
    },

    // Special Offers
    promotions: {
      currentOffer: {
        title: 'Semester Starter Special',
        description: 'First month at 50% off for new university students',
        validUntil: '2025-11-30',
        code: 'STUDENT2025',
        discountAmount: 1375
      },
      referralBonus: {
        referrerReward: 500,
        refereeDiscount: 300,
        description: 'Refer a classmate and both get rewards'
      },
      loyaltyProgram: {
        pointsPerRide: 10,
        pointsValue: '1 point = LKR 1',
        redeemableAfter: 500
      }
    },

    // FAQs
    faqs: [
      {
        question: 'Can I use this pass during semester breaks?',
        answer: 'Yes! You can request a one-time suspension for up to 1 month during semester breaks without losing your subscription.'
      },
      {
        question: 'What if I graduate mid-year?',
        answer: 'You can convert to City Commuter plan with a smooth transition discount of 20% for the first 3 months.'
      },
      {
        question: 'Are part-time students eligible?',
        answer: 'Yes, as long as you have a valid student ID from a recognized institution with at least 12 credit hours per semester.'
      },
      {
        question: 'Can I share my pass with friends?',
        answer: 'No, the pass is non-transferable and requires ID verification. However, you can book group tickets at discounted rates.'
      }
    ],

    // Related Plans
    relatedPlans: ['city-commuter', 'weekender-escape'],
    upgradeOptions: ['city-commuter'],
    downgradeOptions: [],

    // Meta Information
    meta: {
      createdAt: '2024-01-15',
      lastUpdated: '2025-10-20',
      version: '2.1',
      planCode: 'SP-2025-Q4',
      category: 'Education',
      tags: ['student', 'university', 'school', 'education', 'youth', 'discount']
    }
  },

  {
    id: 'city-commuter',
    name: 'City Commuter',
    tagline: 'Your Daily Business Express',
    description: 'Designed for weekday professionals who travel between key business districts.',
    longDescription: 'Streamline your daily commute with guaranteed seats, express lanes, and premium support. Perfect for professionals who value time, comfort, and reliability in their journey to work.',
    targetAudience: 'Office goers, business owners and consultants',
    status: 'Active',
    popularity: 'Best for Professionals',

    pricing: {
      pricePerMonth: 3200,
      currency: 'LKR',
      pricePerYear: 34560, // 10% annual discount
      pricePerQuarter: 9120, // 5% quarterly discount
      originalPrice: 4200,
      discount: 24,
      savingsPerMonth: 1000,
      savingsPerYear: 12000,
      paymentOptions: ['Monthly Auto-renewal', 'Quarterly', 'Annual', 'Corporate Billing'],
      refundPolicy: 'Pro-rated refund within first 7 days',
      trialPeriod: {
        available: true,
        duration: '5 days',
        cost: 500
      }
    },

    usage: {
      ridesPerMonth: 110,
      ridesPerDay: 8,
      unlimitedWeekdays: true,
      weekendRides: 'Full fare, priority booking available',
      peakHourAccess: true,
      expiryDays: 30,
      rolloverRides: true,
      rolloverLimit: 20,
      additionalRideCost: 150
    },

    perks: [
      {
        title: 'Express lane check-in before 9am',
        icon: 'express',
        description: 'Dedicated fast-track boarding lanes at all major business district terminals'
      },
      {
        title: 'Complimentary monthly lounge access',
        icon: 'lounge',
        description: 'Relax in premium lounges with coffee, snacks, and workspaces at 15 locations'
      },
      {
        title: 'Priority customer support',
        icon: 'support',
        description: '24/7 dedicated hotline with average response time under 5 minutes'
      },
      {
        title: 'Guaranteed seat reservations',
        icon: 'seat',
        description: 'Reserve your preferred seat up to 48 hours in advance on select routes'
      },
      {
        title: 'Corporate expense reports',
        icon: 'report',
        description: 'Automated monthly invoices and expense reports for easy reimbursement'
      },
      {
        title: 'Multi-city access',
        icon: 'city',
        description: 'Seamless travel between Colombo, Kandy, Galle, and Negombo business districts'
      }
    ],

    highlights: [
      'Dynamic QR for seamless tap-in across depots',
      'Guaranteed seat reservations on selected routes',
      'Corporate billing support with invoices',
      'Free parking at park-and-ride facilities',
      'Complimentary newspaper/magazine access in lounges',
      'VIP lane during peak hours (7-9 AM, 5-7 PM)',
      'Meeting room booking at major terminals (1 hour/month free)'
    ],

    eligibility: {
      minAge: 18,
      maxAge: null,
      requiredDocuments: [
        'Valid National Identity Card',
        'Employment verification letter or business registration',
        'Recent passport-size photograph',
        'Corporate email (for corporate billing)'
      ],
      verificationProcess: 'Online application with document upload or in-person at service centers',
      renewalRequired: 'Automatic with payment confirmation',
      corporatePackages: {
        available: true,
        minimumEmployees: 10,
        corporateDiscount: 15,
        billingCycle: 'Monthly consolidated invoice',
        managementPortal: 'Track all employee passes online'
      }
    },

    recommendedFor: 'Professionals moving between Colombo, Kandy, and tech corridors daily.',
    idealUser: {
      profile: 'Business professional with 60-90 minute commute, attending meetings across city',
      averageDailyTrips: 3,
      averageMonthlySpending: 4500,
      potentialSavings: 1300
    },

    coverage: {
      allRoutes: true,
      expressRoutes: true,
      nightRoutes: true,
      airportShuttle: true,
      intercityAccess: true,
      blackoutDates: [],
      peakRestrictions: 'None',
      premiumRoutes: [
        'Colombo Fort - Rajagiriya IT Corridor',
        'Colombo - Kandy Business Express',
        'Colombo - Galle Financial District',
        'Airport - City Center Executive'
      ]
    },

    features: {
      mobileApp: {
        realTimeTracking: true,
        seatReservation: true,
        digitalPass: true,
        tripHistory: true,
        expenseReporting: true,
        calendarIntegration: 'Sync with Google Calendar/Outlook',
        meetingReminders: true
      },
      nfcCard: {
        included: true,
        replacementCost: 200,
        design: 'Premium black card with name engraving',
        deliveryTime: '2-3 business days',
        expressDelivery: 'Next day delivery available (LKR 500)'
      },
      customerSupport: {
        hours: '24/7',
        channels: ['Phone', 'Email', 'Live Chat', 'WhatsApp', 'In-app'],
        responseTime: 'Within 5 minutes',
        dedicatedAccountManager: 'For corporate accounts with 50+ employees'
      }
    },

    terms: {
      minimumCommitment: '1 month',
      cancellationNotice: '5 days',
      suspensionPolicy: 'Up to 2 weeks for business travel (twice per year)',
      sharingPolicy: 'Non-transferable, photo ID verification required',
      violationPenalty: 'Plan suspension and fine of LKR 10000'
    },

    accentColor: '#0EA5E9',
    gradient: ['#0EA5E9', '#22D3EE'],
    iconSet: 'business',
    bannerImage: '/images/plans/city-commuter-banner.jpg',
    testimonials: [
      {
        name: 'Rohan Wickramasinghe',
        occupation: 'Senior Manager, Tech Company',
        rating: 5,
        comment: 'The guaranteed seat reservation changed my life. I can work on my laptop during my 90-minute commute stress-free.'
      },
      {
        name: 'Thilini Jayawardena',
        occupation: 'Financial Consultant',
        rating: 5,
        comment: 'Corporate billing makes expense reporting so easy. My company reimburses me within days.'
      }
    ],

    stats: {
      activeSubscribers: 8920,
      averageRating: 4.9,
      satisfactionRate: 96,
      renewalRate: 92,
      corporateClients: 147
    },

    comparison: {
      regularFare: {
        perTrip: 200,
        monthlyEstimate: 4800,
        annualEstimate: 57600
      },
      savings: {
        monthly: 1600,
        annual: 19200,
        percentageSaved: 33
      }
    },

    promotions: {
      currentOffer: {
        title: 'New Job Celebration',
        description: 'First 2 months at 30% off for professionals starting new positions',
        validUntil: '2025-12-31',
        code: 'NEWJOB2025',
        discountAmount: 960
      },
      referralBonus: {
        referrerReward: 800,
        refereeDiscount: 500,
        description: 'Refer colleagues and earn rewards'
      },
      loyaltyProgram: {
        pointsPerRide: 15,
        pointsValue: '1 point = LKR 1',
        redeemableAfter: 1000,
        tierBenefits: {
          silver: 'After 3 months - Extra lounge visit/month',
          gold: 'After 6 months - Free airport transfer/month',
          platinum: 'After 12 months - Personal concierge service'
        }
      }
    },

    faqs: [
      {
        question: 'Can I use this for airport transfers?',
        answer: 'Yes! Airport shuttle access is included. You can book premium airport express routes at no additional cost.'
      },
      {
        question: 'What if I travel for work?',
        answer: 'You can suspend your plan for up to 2 weeks twice a year for business travel without penalty.'
      },
      {
        question: 'Is seat reservation guaranteed?',
        answer: 'Yes, on designated premium routes during peak hours. Reserve up to 48 hours in advance via the app.'
      },
      {
        question: 'Can my company pay directly?',
        answer: 'Absolutely! We offer corporate billing with consolidated monthly invoices for companies with 10+ employees.'
      }
    ],

    relatedPlans: ['student-plus', 'night-owl'],
    upgradeOptions: ['executive-elite'],
    downgradeOptions: ['weekender-escape'],

    meta: {
      createdAt: '2024-01-15',
      lastUpdated: '2025-10-25',
      version: '2.3',
      planCode: 'CC-2025-Q4',
      category: 'Professional',
      tags: ['business', 'professional', 'corporate', 'express', 'premium', 'commuter']
    }
  },

  {
    id: 'family-connect',
    name: 'Family Connect',
    tagline: 'Travel Together, Save Together',
    description: 'Shareable rides for parents and children with bundled weekend travel benefits.',
    longDescription: 'The ultimate family transportation solution with multiple linked cards, family zones, and comprehensive safety features. Perfect for households managing school runs, grocery trips, weekend outings, and family visits.',
    targetAudience: 'Families with children and caretakers',
    status: 'Active',
    popularity: 'Best Value for Families',

    pricing: {
      pricePerMonth: 5400,
      currency: 'LKR',
      pricePerYear: 58320, // 10% annual discount
      pricePerQuarter: 15390, // 5% quarterly discount
      originalPrice: 7200,
      discount: 25,
      savingsPerMonth: 1800,
      savingsPerYear: 21600,
      perPersonCost: 1350, // for 4 members
      paymentOptions: ['Monthly Auto-renewal', 'Quarterly', 'Annual'],
      refundPolicy: 'Pro-rated refund within first 14 days',
      trialPeriod: {
        available: true,
        duration: '10 days',
        cost: 800
      }
    },

    usage: {
      ridesPerMonth: 180,
      ridesPerDay: 12, // combined for all family members
      individualLimit: 6, // per person per day
      unlimitedWeekdays: true,
      weekendRides: 'Unlimited with 20% discount on excursion routes',
      peakHourAccess: true,
      expiryDays: 30,
      rolloverRides: true,
      rolloverLimit: 40,
      additionalRideCost: 100
    },

    perks: [
      {
        title: '4 linked family member NFC cards',
        icon: 'cards',
        description: 'Each family member gets their own card with personalized design and tracking'
      },
      {
        title: 'Free rides for children under 6 years',
        icon: 'child',
        description: 'Toddlers and young children travel completely free when accompanied by cardholders'
      },
      {
        title: 'Weekend discounts for excursions',
        icon: 'weekend',
        description: '30% off on scenic routes to beaches, historical sites, and national parks'
      },
      {
        title: 'Family priority seating zones',
        icon: 'seat',
        description: 'Reserved family sections with extra space on all buses'
      },
      {
        title: 'Emergency support hotline',
        icon: 'emergency',
        description: '24/7 family helpline with GPS tracking for kids traveling alone'
      },
      {
        title: 'School route guarantees',
        icon: 'school',
        description: 'Guaranteed seats on school-time routes for children (6 AM - 8 AM, 1 PM - 4 PM)'
      }
    ],

    highlights: [
      'Family priority seating zones',
      'Shared ride tracking via the mobile app',
      'Complimentary emergency support hotline',
      'Kids safety GPS tracking (optional for children 6-16)',
      'Partner discounts at family attractions (zoos, museums, theme parks)',
      'Free stroller and wheelchair accessibility on all routes',
      'Monthly family fun day with special tour packages',
      'Grocery shopping shuttle on weekends (major supermarkets)'
    ],

    eligibility: {
      minAge: 18, // for primary cardholder
      maxAge: null,
      familyMembers: {
        minimum: 2,
        maximum: 6,
        childrenUnder6: 'Unlimited (free)',
        primaryCardholder: 'Must be parent or legal guardian'
      },
      requiredDocuments: [
        'Primary cardholder National ID',
        'Birth certificates for children',
        'Marriage certificate (if applicable)',
        'Guardianship papers (if applicable)',
        'Family photograph'
      ],
      verificationProcess: 'In-person application at family service centers with all documents',
      renewalRequired: 'Annual verification with updated documents',
      addingMembers: {
        cost: 800, // per additional member
        limit: 'Up to 6 total',
        processingTime: '3-5 business days'
      }
    },

    recommendedFor: 'Households planning school runs, weekend trips and family visits.',
    idealUser: {
      profile: 'Family of 4 with school-age children, regular weekend outings',
      averageDailyTrips: 6,
      averageMonthlySpending: 7500,
      potentialSavings: 2100
    },

    coverage: {
      allRoutes: true,
      expressRoutes: true,
      nightRoutes: false, // Children restricted after 9 PM
      airportShuttle: true,
      intercityAccess: true,
      blackoutDates: [],
      peakRestrictions: 'None for family zones',
      specialRoutes: [
        'School Express Routes',
        'Weekend Family Excursion Routes',
        'Zoo & Museum Shuttles',
        'Beach Express (weekends)',
        'Grocery Shopping Circuits'
      ]
    },

    features: {
      mobileApp: {
        realTimeTracking: true,
        familyTracking: 'Track all family members simultaneously',
        seatReservation: true,
        digitalPass: true,
        tripHistory: true,
        budgetTracker: 'Family expense dashboard',
        kidsSafetyAlerts: 'Notifications when kids board/alight',
        geofencing: 'Set safe zones and get alerts'
      },
      nfcCard: {
        included: true,
        quantity: 4,
        replacementCost: 150,
        design: 'Family themed with custom names and photos',
        deliveryTime: '5-7 business days',
        childCardFeatures: 'Limited routes, parental controls, GPS tracking'
      },
      customerSupport: {
        hours: '24/7',
        channels: ['Phone', 'Email', 'Live Chat', 'WhatsApp', 'In-app'],
        responseTime: 'Within 10 minutes for emergencies',
        familySupportTeam: 'Dedicated team trained in child safety'
      },
      safetyFeatures: {
        gpsTracking: 'Real-time location for all family members',
        emergencyButton: 'In-app SOS button alerts family and authorities',
        childRestrictions: 'Set age-appropriate route and time restrictions',
        accompanimentRules: 'Require adult accompaniment for children under 10',
        driverVerification: 'All drivers background-checked and trained'
      }
    },

    terms: {
      minimumCommitment: '3 months',
      cancellationNotice: '14 days',
      suspensionPolicy: 'Up to 1 month for family vacations (once per year)',
      sharingPolicy: 'Only registered family members can use cards',
      violationPenalty: 'Plan suspension and fine of LKR 7500',
      childSafety: 'Children under 10 must be accompanied by adult cardholder'
    },

    accentColor: '#F97316',
    gradient: ['#F97316', '#FB7185'],
    iconSet: 'family',
    bannerImage: '/images/plans/family-connect-banner.jpg',
    testimonials: [
      {
        name: 'Chaminda & Dilani Silva',
        familySize: 4,
        rating: 5,
        comment: 'We save over 2000 rupees monthly compared to individual tickets. The kids love their personalized cards and the tracking gives us peace of mind!'
      },
      {
        name: 'Pradeep Fernando',
        familySize: 5,
        rating: 5,
        comment: 'Weekend excursions are so affordable now. We visit the zoo, beaches, and relatives every weekend without worrying about transport costs.'
      }
    ],

    stats: {
      activeSubscribers: 6780,
      activeFamilyMembers: 24230,
      averageRating: 4.9,
      satisfactionRate: 97,
      renewalRate: 94,
      childrenServed: 11450
    },

    comparison: {
      regularFare: {
        perTrip: 150, // average per person
        monthlyEstimate: 9000, // for family of 4
        annualEstimate: 108000
      },
      savings: {
        monthly: 3600,
        annual: 43200,
        percentageSaved: 40
      }
    },

    promotions: {
      currentOffer: {
        title: 'New Family Welcome',
        description: 'First month free for the 4th family member',
        validUntil: '2025-11-30',
        code: 'FAMILY2025',
        discountAmount: 1350
      },
      referralBonus: {
        referrerReward: 1000,
        refereeDiscount: 800,
        description: 'Refer another family and both families get rewards'
      },
      loyaltyProgram: {
        pointsPerRide: 8, // per family member
        pointsValue: '1 point = LKR 1',
        redeemableAfter: 500,
        familyRewards: 'Redeem for family attraction tickets, hotel vouchers'
      },
      seasonalOffers: [
        {
          name: 'School Holiday Special',
          period: 'April, August, December',
          benefit: 'Extra 50 rides for excursions'
        },
        {
          name: 'Family Fun Fridays',
          period: 'Every Friday',
          benefit: 'Free ice cream vouchers at partner outlets'
        }
      ]
    },

    faqs: [
      {
        question: 'Can we add grandparents to the plan?',
        answer: 'Yes! You can add up to 6 family members including grandparents. Additional members cost LKR 800 each for setup.'
      },
      {
        question: 'Is it safe for kids to travel alone?',
        answer: 'Children 10+ can travel alone with parental permission. Our GPS tracking, safety alerts, and trained drivers ensure security. Children under 10 must be accompanied by an adult cardholder.'
      },
      {
        question: 'What if we go on vacation?',
        answer: 'You can suspend your plan for up to 1 month once a year for family vacations without losing your subscription.'
      },
      {
        question: 'Can we use it for school trips?',
        answer: 'Absolutely! School routes have guaranteed seating during school hours, and you get 20% off group bookings for field trips.'
      },
      {
        question: 'What happens if a card is lost?',
        answer: 'Report it immediately via app or hotline. We instantly block the card and deliver a replacement within 3-5 days for LKR 150.'
      }
    ],

    relatedPlans: ['weekender-escape', 'student-plus'],
    upgradeOptions: ['premium-family-plus'],
    downgradeOptions: ['city-commuter'],

    partnerBenefits: [
      {
        partner: 'National Zoo',
        benefit: '25% off family tickets',
        validDays: 'All days'
      },
      {
        partner: 'Water Kingdom Colombo',
        benefit: '30% off entry with plan card',
        validDays: 'Weekends and holidays'
      },
      {
        partner: 'Heritage Hotel Chain',
        benefit: '20% off family rooms',
        validDays: 'All days'
      },
      {
        partner: 'KFC, Pizza Hut, Burger King',
        benefit: '15% off with family card',
        validDays: 'All days'
      }
    ],

    meta: {
      createdAt: '2024-02-01',
      lastUpdated: '2025-10-26',
      version: '2.2',
      planCode: 'FC-2025-Q4',
      category: 'Family',
      tags: ['family', 'children', 'safety', 'savings', 'weekend', 'excursion', 'school']
    }
  },

  {
    id: 'weekender-escape',
    name: 'Weekender Escape',
    tagline: 'Explore More, Spend Less',
    description: 'Unlimited weekend and holiday rides with lounge upgrades and tour bundles.',
    longDescription: 'Perfect for adventure seekers, leisure travelers, and weekend warriors who love exploring Sri Lanka. Get unlimited weekend access to scenic routes, beach destinations, and cultural sites with exclusive travel perks.',
    targetAudience: 'Leisure travellers and getaway seekers',
    status: 'Active',
    popularity: 'Perfect for Adventurers',

    pricing: {
      pricePerMonth: 2100,
      currency: 'LKR',
      pricePerYear: 22680, // 10% annual discount
      pricePerQuarter: 5985, // 5% quarterly discount
      originalPrice: 2800,
      discount: 25,
      savingsPerMonth: 700,
      savingsPerYear: 8400,
      paymentOptions: ['Monthly Auto-renewal', 'Quarterly', 'Annual'],
      refundPolicy: 'Full refund within first 7 days if unused',
      trialPeriod: {
        available: true,
        duration: 'First weekend free',
        cost: 0
      }
    },

    usage: {
      ridesPerMonth: 60,
      ridesPerDay: 8, // on weekends
      unlimitedWeekdays: false,
      weekdayRides: 'Available at 30% discount',
      unlimitedWeekends: true,
      unlimitedHolidays: true,
      peakHourAccess: true,
      expiryDays: 30,
      rolloverRides: false,
      additionalRideCost: 120
    },

    perks: [
      {
        title: 'Free airport shuttle transfers twice a month',
        icon: 'airport',
        description: 'Two complimentary premium airport transfers per month for your getaways'
      },
      {
        title: 'Partner hotel discounts up to 25%',
        icon: 'hotel',
        description: 'Exclusive rates at 50+ hotels across beach, hill country, and cultural destinations'
      },
      {
        title: 'Complimentary city tour once per quarter',
        icon: 'tour',
        description: 'Free guided city tour to Kandy, Galle, or Jaffna every 3 months'
      },
      {
        title: 'Scenic route priority access',
        icon: 'scenic',
        description: 'Reserved seats on coastal, mountain, and heritage routes with panoramic views'
      },
      {
        title: 'Travel community access',
        icon: 'community',
        description: 'Join exclusive travel meetups, photo walks, and adventure groups'
      },
      {
        title: 'Flexible multi-day passes',
        icon: 'calendar',
        description: 'Extend your pass for long weekends and holiday seasons at discounted rates'
      }
    ],

    highlights: [
      'Sunrise and sunset scenic route access',
      'Exclusive invites to metro travel meetups',
      'Multi-day pass extension for long weekends',
      'Photography tours with professional guides (quarterly)',
      'Beach, hill country, and cultural triangle unlimited access',
      'Travel journal and itinerary planning assistance',
      'Partner attraction tickets bundled with routes',
      'Last-minute weekend getaway flash deals'
    ],

    eligibility: {
      minAge: 18,
      maxAge: null,
      requiredDocuments: [
        'Valid National Identity Card or Passport',
        'Recent passport-size photograph',
        'Proof of address'
      ],
      verificationProcess: 'Online application with document upload',
      renewalRequired: 'Automatic with payment confirmation',
      groupDiscounts: {
        available: true,
        minimumSize: 4,
        discount: 15,
        groupBookingFeatures: 'Coordinated seating, group tour packages'
      }
    },

    recommendedFor: 'Adventurers exploring the island and planning frequent escapes.',
    idealUser: {
      profile: 'Weekend traveler, photographer, nature enthusiast, or culture explorer',
      averageDailyTrips: 4, // on weekends
      averageMonthlySpending: 3200,
      potentialSavings: 1100
    },

    coverage: {
      allRoutes: true,
      expressRoutes: true,
      nightRoutes: true,
      airportShuttle: true,
      intercityAccess: true,
      blackoutDates: [],
      peakRestrictions: 'None',
      featuredRoutes: [
        'Colombo - Galle Coastal Express',
        'Kandy - Nuwara Eliya Hill Country',
        'Colombo - Anuradhapura Cultural Triangle',
        'Colombo - Trincomalee East Coast',
        'Kandy - Ella Scenic Route',
        'Galle - Mirissa Beach Route',
        'Colombo - Yala National Park Gateway'
      ],
      weekendSpecials: [
        'Sunrise Beach Tours',
        'Sunset Mountain Routes',
        'Heritage City Circuits',
        'Wildlife Safari Shuttles'
      ]
    },

    features: {
      mobileApp: {
        realTimeTracking: true,
        seatReservation: true,
        digitalPass: true,
        tripHistory: true,
        itineraryPlanner: 'AI-powered weekend trip suggestions',
        weatherIntegration: 'Plan trips based on weather forecasts',
        photoGallery: 'Share travel photos with community',
        travelJournal: 'Digital diary with route memories'
      },
      nfcCard: {
        included: true,
        replacementCost: 150,
        design: 'Adventure themed with scenic Sri Lankan landmarks',
        deliveryTime: '3-5 business days'
      },
      customerSupport: {
        hours: '7:00 AM - 10:00 PM (Extended weekend hours)',
        channels: ['Phone', 'Email', 'Live Chat', 'In-app'],
        responseTime: 'Within 15 minutes',
        travelConcierge: 'Weekend trip planning assistance available'
      },
      travelPerks: {
        hotelPartners: 50,
        restaurantDiscounts: 30,
        attractionDeals: 25,
        photographyTours: 'Quarterly professional-led photo walks',
        communityEvents: 'Monthly travel meetups in major cities'
      }
    },

    terms: {
      minimumCommitment: '1 month',
      cancellationNotice: '7 days',
      suspensionPolicy: 'Pause for up to 2 months for overseas travel',
      sharingPolicy: 'Non-transferable, ID verification required',
      violationPenalty: 'Plan suspension and fine of LKR 5000'
    },

    accentColor: '#F59E0B',
    gradient: ['#F59E0B', '#FBBF24'],
    iconSet: 'adventure',
    bannerImage: '/images/plans/weekender-escape-banner.jpg',
    testimonials: [
      {
        name: 'Kasun Rajapaksa',
        occupation: 'Photographer',
        rating: 5,
        comment: 'I explore 3-4 new destinations every month. This plan paid for itself in the first two weekends. The scenic route access is unbeatable!'
      },
      {
        name: 'Sarah De Silva',
        occupation: 'Travel Blogger',
        rating: 5,
        comment: 'Hotel partnerships are amazing! Combined with unlimited weekend rides, I save thousands on my monthly trips. The travel community is a bonus.'
      }
    ],

    stats: {
      activeSubscribers: 4560,
      averageRating: 4.7,
      satisfactionRate: 93,
      renewalRate: 85,
      destinationsAvailable: 120,
      averageWeekendTrips: 3.2
    },

    comparison: {
      regularFare: {
        perTrip: 200, // average scenic route
        weekendEstimate: 1600, // 8 trips
        monthlyEstimate: 6400, // 4 weekends
        annualEstimate: 76800
      },
      savings: {
        monthly: 4300,
        annual: 51600,
        percentageSaved: 67
      }
    },

    promotions: {
      currentOffer: {
        title: 'Monsoon Adventure Special',
        description: 'First month at 40% off + free raincoat and travel guide',
        validUntil: '2025-11-15',
        code: 'MONSOON2025',
        discountAmount: 840
      },
      referralBonus: {
        referrerReward: 500,
        refereeDiscount: 400,
        description: 'Refer travel buddies and both get rewards'
      },
      loyaltyProgram: {
        pointsPerRide: 12,
        pointsValue: '1 point = LKR 1',
        redeemableAfter: 500,
        specialRedemptions: [
          'Hotel vouchers',
          'Restaurant meals',
          'Attraction tickets',
          'Photography equipment rentals',
          'Travel merchandise'
        ]
      },
      seasonalBonuses: [
        {
          season: 'Poya Holidays',
          bonus: '25% extra rides',
          description: 'Bonus rides on all full moon holidays'
        },
        {
          season: 'New Year Season',
          bonus: 'Free cultural tour',
          description: 'Complimentary traditional village tour'
        }
      ]
    },

    faqs: [
      {
        question: 'Can I use this during weekdays?',
        answer: 'Yes! While unlimited access is weekends-only, you get 30% discount on all weekday rides.'
      },
      {
        question: 'How do hotel partnerships work?',
        answer: 'Show your Weekender Escape card at 50+ partner hotels to receive instant discounts of 15-25%. Full list available in the app.'
      },
      {
        question: 'Can I bring friends on my trips?',
        answer: 'Your pass is personal, but friends can book group tickets with you at 15% discount (minimum 4 people).'
      },
      {
        question: 'What are the travel meetups?',
        answer: 'Monthly organized trips with fellow subscribers to explore new destinations, photography spots, and cultural sites. Free for cardholders!'
      },
      {
        question: 'Can I extend for long weekends?',
        answer: 'Yes! Multi-day extensions are available at discounted rates through the app for holiday weekends.'
      }
    ],

    relatedPlans: ['family-connect', 'student-plus'],
    upgradeOptions: ['travel-enthusiast-pro'],
    downgradeOptions: [],

    travelPackages: [
      {
        name: 'Beach Hopper Weekend',
        destinations: ['Negombo', 'Hikkaduwa', 'Unawatuna', 'Mirissa'],
        duration: '2 days',
        included: 'Transport, hotel discount vouchers, beach guide',
        price: 'Free transport with plan'
      },
      {
        name: 'Hill Country Explorer',
        destinations: ['Kandy', 'Nuwara Eliya', 'Ella', 'Haputale'],
        duration: '3 days',
        included: 'Transport, tea plantation tour, hotel discounts',
        price: 'Free transport with plan'
      },
      {
        name: 'Cultural Triangle Tour',
        destinations: ['Anuradhapura', 'Polonnaruwa', 'Sigiriya', 'Dambulla'],
        duration: '2 days',
        included: 'Transport, heritage site guide, hotel discounts',
        price: 'Free transport with plan'
      }
    ],

    partnerBenefits: [
      {
        category: 'Hotels',
        partners: ['Cinnamon Hotels', 'Jetwing', 'Amaya Resorts', 'Heritage Hotels'],
        discount: '15-25%',
        locations: 'Nationwide'
      },
      {
        category: 'Restaurants',
        partners: ['Ministry of Crab', 'The Gallery Café', 'Beach Front Restaurants'],
        discount: '10-20%',
        locations: 'Major cities and beach areas'
      },
      {
        category: 'Attractions',
        partners: ['National Parks', 'Museums', 'Adventure Sports Centers'],
        discount: '15-30%',
        locations: 'Nationwide'
      }
    ],

    meta: {
      createdAt: '2024-03-01',
      lastUpdated: '2025-10-26',
      version: '2.0',
      planCode: 'WE-2025-Q4',
      category: 'Leisure',
      tags: ['weekend', 'travel', 'adventure', 'scenic', 'holiday', 'tourism', 'explore']
    }
  },

  {
    id: 'night-owl',
    name: 'Night Owl Flex',
    tagline: 'When Others Sleep, We Roll',
    description: 'Late night and early dawn rides for hospitality, healthcare and BPO teams.',
    longDescription: 'Specially designed for night shift workers, emergency responders, and hospitality professionals who need reliable, safe transportation during non-traditional hours. 24/7 support, enhanced safety features, and guaranteed service.',
    targetAudience: 'Shift workers, hospitality crews and emergency responders',
    status: 'Active',
    popularity: 'Essential for Night Workers',

    pricing: {
      pricePerMonth: 2950,
      currency: 'LKR',
      pricePerYear: 31860, // 10% annual discount
      pricePerQuarter: 8410, // 5% quarterly discount
      originalPrice: 3800,
      discount: 22,
      savingsPerMonth: 850,
      savingsPerYear: 10200,
      paymentOptions: ['Monthly Auto-renewal', 'Quarterly', 'Annual', 'Corporate Billing'],
      refundPolicy: 'Pro-rated refund within first 7 days',
      trialPeriod: {
        available: true,
        duration: '7 days',
        cost: 500
      },
      employerSubsidy: {
        available: true,
        partnersIndustries: ['Healthcare', 'Hospitality', 'BPO', 'Security', 'Manufacturing'],
        subsidyRange: '30-50%'
      }
    },

    usage: {
      ridesPerMonth: 100,
      ridesPerDay: 6,
      unlimitedNightHours: true, // 10 PM - 6 AM
      dayTimeRides: '50% discount on all daytime routes',
      peakHourAccess: true,
      expiryDays: 30,
      rolloverRides: true,
      rolloverLimit: 25,
      additionalRideCost: 140
    },

    perks: [
      {
        title: '24/7 hotline with live support',
        icon: 'support',
        description: 'Dedicated emergency line with instant human response, no automated menus'
      },
      {
        title: 'Complimentary midnight snack pack',
        icon: 'food',
        description: 'Monthly snack vouchers worth LKR 500 at partner 24-hour outlets'
      },
      {
        title: 'Safety shuttle for last-mile access',
        icon: 'shuttle',
        description: 'Free tuk-tuk/micro-bus service from bus stop to home (within 2km) after midnight'
      },
      {
        title: 'GPS tracking shared with contacts',
        icon: 'gps',
        description: 'Real-time location sharing with up to 5 trusted contacts for safety'
      },
      {
        title: 'Priority seating on night routes',
        icon: 'seat',
        description: 'Reserved seats near driver with extra visibility and security'
      },
      {
        title: 'Wellness support',
        icon: 'health',
        description: 'Free monthly health checkup vouchers at partner clinics'
      }
    ],

    highlights: [
      'GPS tracking shared with trusted contacts',
      'Seat reservation on owl routes',
      'Discounts on partner ride-hailing services',
      'Emergency panic button in app with instant police alert',
      'Well-lit, secure waiting areas at all night-service stops',
      'Female-only sections on night buses (optional)',
      'Background-verified drivers with advanced training',
      'Night shift worker community support groups',
      'Free coffee/tea at major terminals (10 PM - 6 AM)'
    ],

    eligibility: {
      minAge: 18,
      maxAge: null,
      requiredDocuments: [
        'Valid National Identity Card',
        'Employment verification letter mentioning night shift work',
        'Employer ID card',
        'Recent passport-size photograph',
        'Emergency contact information (mandatory)'
      ],
      verificationProcess: 'Online or in-person with employment verification',
      renewalRequired: 'Every 6 months with employment confirmation',
      employerPartnership: {
        available: true,
        benefits: 'Bulk discounts, direct billing, employee welfare reports',
        minimumEmployees: 20
      }
    },

    recommendedFor: 'Night shifts, hospitality staff and emergency professionals.',
    idealUser: {
      profile: 'Healthcare worker, BPO employee, hotel staff, or security personnel working 8 PM - 8 AM shifts',
      averageDailyTrips: 2,
      averageMonthlySpending: 4000,
      potentialSavings: 1050
    },

    coverage: {
      allRoutes: false,
      nightRoutes: true, // 10 PM - 6 AM
      dayTimeDiscount: 50, // percentage
      expressRoutes: true,
      airportShuttle: true,
      intercityAccess: 'Limited to major routes',
      blackoutDates: [],
      peakRestrictions: 'None',
      dedicatedNightRoutes: [
        'Colombo - Negombo Hospital Route',
        'Colombo - Mount Lavinia Night Express',
        'Kandy - Peradeniya Healthcare Circuit',
        'Colombo - BPO Hub (Rajagiriya/Malabe)',
        'Airport - City Center Night Service',
        'Galle - Colombo Night Express'
      ],
      serviceFrequency: {
        nightHours: 'Every 30-45 minutes',
        lateNight: 'Every 60 minutes (2 AM - 5 AM)',
        emergencyOnDemand: 'Available with 30-minute notice'
      }
    },

    features: {
      mobileApp: {
        realTimeTracking: true,
        seatReservation: true,
        digitalPass: true,
        tripHistory: true,
        safetyFeatures: {
          liveLocationSharing: 'Share with up to 5 contacts',
          panicButton: 'Instant alert to emergency contacts and security',
          driverDetails: 'View driver photo, name, and rating before boarding',
          tripMonitoring: 'AI-powered route deviation alerts',
          checkInCheckOut: 'Auto-notify contacts when you board/alight'
        },
        shiftScheduler: 'Sync with work schedule for automatic booking'
      },
      nfcCard: {
        included: true,
        replacementCost: 200,
        design: 'Night Owl themed with reflective elements for safety',
        deliveryTime: '2-3 business days',
        emergencyContact: 'Engraved on back of card'
      },
      customerSupport: {
        hours: '24/7/365',
        channels: ['Phone', 'SMS', 'WhatsApp', 'Live Chat', 'In-app', 'Emergency Hotline'],
        responseTime: 'Instant for emergencies, within 5 minutes otherwise',
        languageSupport: ['Sinhala', 'Tamil', 'English'],
        dedicatedNightTeam: 'Specialized support trained in emergency response'
      },
      safetyEnhancements: {
        cctv: 'All night buses equipped with 8+ HD cameras',
        securityStaff: 'Trained security personnel on all routes after midnight',
        emergencyEquipment: 'First aid kits, fire extinguishers, emergency exits',
        lightingStandards: 'Enhanced interior and exterior lighting',
        driverTraining: 'Defensive driving, first aid, emergency response certified'
      }
    },

    terms: {
      minimumCommitment: '1 month',
      cancellationNotice: '5 days',
      suspensionPolicy: 'Up to 2 weeks for shift changes (twice per year)',
      sharingPolicy: 'Strictly non-transferable, ID and employment verification required',
      violationPenalty: 'Immediate plan termination and fine of LKR 10000',
      safetyCompliance: 'Must follow all safety protocols and guidelines'
    },

    accentColor: '#8B5CF6',
    gradient: ['#4338CA', '#8B5CF6'],
    iconSet: 'night',
    bannerImage: '/images/plans/night-owl-banner.jpg',
    testimonials: [
      {
        name: 'Nurse Malini Perera',
        occupation: 'ICU Nurse, National Hospital',
        rating: 5,
        comment: 'Working 12-hour night shifts, I depend on reliable transport. The GPS sharing gives my family peace of mind, and I\'ve never had to wait more than 15 minutes.'
      },
      {
        name: 'Dinesh Gamage',
        occupation: 'Customer Service Executive, BPO',
        rating: 5,
        comment: 'The last-mile shuttle service is a game-changer. I used to spend 300 rupees on tuk-tuks every night. Now it\'s included!'
      }
    ],

    stats: {
      activeSubscribers: 5670,
      averageRating: 4.9,
      satisfactionRate: 96,
      renewalRate: 93,
      safetyIncidents: 0, // in last 12 months
      averageResponseTime: '3 minutes'
    },

    comparison: {
      regularFare: {
        perTrip: 200, // night surcharge included
        monthlyEstimate: 4800, // for 24 night trips
        annualEstimate: 57600
      },
      alternativeTransport: {
        ridehailing: {
          perTrip: 500,
          monthlyEstimate: 12000,
          annualEstimate: 144000
        }
      },
      savings: {
        monthly: 1850,
        annual: 22200,
        percentageSaved: 39,
        vsRideHailing: 9050 // monthly
      }
    },

    promotions: {
      currentOffer: {
        title: 'Healthcare Heroes Discount',
        description: '50% off first 2 months for new healthcare workers',
        validUntil: '2025-12-31',
        code: 'HEROES2025',
        discountAmount: 2950,
        eligibility: 'Healthcare professionals with valid ID'
      },
      referralBonus: {
        referrerReward: 600,
        refereeDiscount: 500,
        description: 'Refer colleagues from your shift and both get rewards'
      },
      loyaltyProgram: {
        pointsPerRide: 20, // higher for night rides
        pointsValue: '1 point = LKR 1',
        redeemableAfter: 500,
        specialRedemptions: [
          'Meal vouchers at 24-hour restaurants',
          'Pharmacy vouchers',
          'Wellness checkups',
          'Sleep aids and supplements',
          'Gym memberships'
        ]
      },
      employerIncentives: {
        available: true,
        corporateSubsidy: '30-50% for partner companies',
        wellnessPackages: 'Bundled with health insurance for employees'
      }
    },

    faqs: [
      {
        question: 'Is it safe to travel alone at night?',
        answer: 'Absolutely. All our night buses have enhanced security including CCTV, security personnel after midnight, GPS tracking, panic buttons, and drivers with advanced training. We have zero safety incidents in the past year.'
      },
      {
        question: 'What if my shift timing changes?',
        answer: 'You can suspend your plan for up to 2 weeks twice a year for shift changes without penalty. Just notify us 48 hours in advance.'
      },
      {
        question: 'How does the last-mile shuttle work?',
        answer: 'After midnight, if your home is within 2km of your bus stop, we provide free tuk-tuk or micro-bus service. Request it via the app when you\'re near your stop.'
      },
      {
        question: 'Can my employer pay for this?',
        answer: 'Yes! We offer corporate billing and many employers subsidize 30-50% of the cost as an employee welfare benefit. We currently partner with 80+ companies.'
      },
      {
        question: 'What if there\'s an emergency?',
        answer: 'Use the in-app panic button which instantly alerts emergency contacts, our security team, and local authorities with your GPS location. All buses also have emergency equipment and trained personnel.'
      }
    ],

    relatedPlans: ['city-commuter'],
    upgradeOptions: ['premium-night-plus'],
    downgradeOptions: [],

    employerPartnerships: [
      {
        industry: 'Healthcare',
        partners: 50,
        employees: 3200,
        subsidy: '40-50%'
      },
      {
        industry: 'BPO & IT',
        partners: 25,
        employees: 1800,
        subsidy: '30-40%'
      },
      {
        industry: 'Hospitality',
        partners: 18,
        employees: 950,
        subsidy: '35-45%'
      },
      {
        industry: 'Security Services',
        partners: 12,
        employees: 720,
        subsidy: '30-35%'
      }
    ],

    wellnessSupport: {
      healthCheckups: {
        frequency: 'Monthly',
        partners: ['Durdans Hospital', 'Nawaloka Hospitals', 'Asiri Health'],
        coverage: 'Basic vitals, sleep assessment, stress evaluation',
        cost: 'Free'
      },
      mentalHealth: {
        available: true,
        counselingSessions: '2 free sessions per quarter',
        hotline: '24/7 mental health support line'
      },
      nutritionSupport: {
        available: true,
        guidance: 'Night shift nutrition tips and meal planning',
        vouchers: 'Healthy meal options at partner outlets'
      }
    },

    meta: {
      createdAt: '2024-04-01',
      lastUpdated: '2025-10-26',
      version: '2.1',
      planCode: 'NO-2025-Q4',
      category: 'Specialized',
      tags: ['night', 'shift', 'healthcare', 'bpo', 'hospitality', 'safety', 'emergency', '24/7']
    }
  }
]

export const metroPlans: MetroPlan[] = metroBusPlans

export const getMetroPlanById = (planId: string) =>
  metroBusPlans.find(plan => plan.id === planId)

export const planUtils = {
  // Get plan by ID
  getPlanById: (planId: string) => {
    return metroBusPlans.find(plan => plan.id === planId)
  },

  // Get all active plans
  getActivePlans: () => {
    return metroBusPlans.filter(plan => plan.status === 'Active')
  },

  // Compare plans
  comparePlans: (planIds: string[]) => {
    return metroBusPlans.filter(plan => planIds.includes(plan.id))
  },

  // Find best plan for user based on usage
  recommendPlan: (userProfile: {
    weekdayTrips: number
    weekendTrips: number
    nightTrips: number
    hasFamily: boolean
    isStudent: boolean
  }) => {
    const { weekdayTrips, weekendTrips, nightTrips, hasFamily, isStudent } = userProfile

    if (isStudent) return metroBusPlans.find(p => p.id === 'student-plus')
    if (hasFamily) return metroBusPlans.find(p => p.id === 'family-connect')
    if (nightTrips > 15) return metroBusPlans.find(p => p.id === 'night-owl')
    if (weekendTrips > weekdayTrips) return metroBusPlans.find(p => p.id === 'weekender-escape')
    if (weekdayTrips > 20) return metroBusPlans.find(p => p.id === 'city-commuter')

    return metroBusPlans.find(p => p.id === 'city-commuter') // default
  },

  // Calculate potential savings
  calculateSavings: (planId: string, monthlyTrips: number, avgFarePerTrip = 180) => {
    const plan = metroBusPlans.find(p => p.id === planId)
    if (!plan) return null

    const regularCost = monthlyTrips * avgFarePerTrip
    const planCost = plan.pricing.pricePerMonth
    const savings = regularCost - planCost
    const savingsPercent = Number(((savings / regularCost) * 100).toFixed(1))

    return {
      regularCost,
      planCost,
      savings,
      savingsPercent,
      worthIt: savings > 0
    }
  },

  // Get plans by category
  getPlansByCategory: (category: string) => {
    return metroBusPlans.filter(plan => plan.meta.category === category)
  },

  // Search plans by tags
  searchPlansByTag: (tag: string) => {
    return metroBusPlans.filter(plan =>
      plan.meta.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    )
  }
}
