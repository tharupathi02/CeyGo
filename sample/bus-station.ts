export type BusStation = {
  id: string
  code: string
  name: string
  city: string
  district: string
  province: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  facilities: string[]
  platforms: number
  operatingHours: string
  contactNumber: string
  zone: string
  type: string
}

export const busStations: BusStation[] = [
  // Western Province - Colombo District
  {
    id: 'CMB-001',
    code: 'CMB',
    name: 'Colombo Fort Central Bus Stand',
    city: 'Colombo',
    district: 'Colombo',
    province: 'Western',
    address: 'Olcott Mawatha, Colombo 01',
    coordinates: { lat: 6.9344, lng: 79.8428 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'WiFi', 'Medical Room'],
    platforms: 12,
    operatingHours: '24/7',
    contactNumber: '+94 11 232 1234',
    zone: 'Zone 1',
    type: 'Major Terminal'
  },
  {
    id: 'CMB-002',
    code: 'PTH',
    name: 'Pettah Central Bus Stand',
    city: 'Colombo',
    district: 'Colombo',
    province: 'Western',
    address: 'Olcott Mawatha, Pettah, Colombo 11',
    coordinates: { lat: 6.9344, lng: 79.8428 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM', 'Pharmacy'],
    platforms: 15,
    operatingHours: '04:00 AM - 11:00 PM',
    contactNumber: '+94 11 232 5678',
    zone: 'Zone 1',
    type: 'Major Terminal'
  },
  {
    id: 'CMB-003',
    code: 'MGM',
    name: 'Maharagama Bus Stand',
    city: 'Maharagama',
    district: 'Colombo',
    province: 'Western',
    address: 'High Level Road, Maharagama',
    coordinates: { lat: 6.8485, lng: 79.9267 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Parking', 'Food Stalls'],
    platforms: 8,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 11 285 1234',
    zone: 'Zone 2',
    type: 'Regional Hub'
  },
  {
    id: 'CMB-004',
    code: 'NDM',
    name: 'Nugegoda Bus Stand',
    city: 'Nugegoda',
    district: 'Colombo',
    province: 'Western',
    address: 'High Level Road, Nugegoda',
    coordinates: { lat: 6.8649, lng: 79.8997 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM'],
    platforms: 10,
    operatingHours: '04:30 AM - 11:00 PM',
    contactNumber: '+94 11 281 2345',
    zone: 'Zone 2',
    type: 'Regional Hub'
  },
  {
    id: 'CMB-005',
    code: 'KTT',
    name: 'Kottawa Bus Terminal',
    city: 'Kottawa',
    district: 'Colombo',
    province: 'Western',
    address: 'High Level Road, Kottawa',
    coordinates: { lat: 6.8215, lng: 79.9607 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Parking'],
    platforms: 6,
    operatingHours: '05:00 AM - 10:00 PM',
    contactNumber: '+94 11 287 3456',
    zone: 'Zone 2',
    type: 'Local Terminal'
  },
  {
    id: 'CMB-006',
    code: 'PLY',
    name: 'Piliyandala Bus Stand',
    city: 'Piliyandala',
    district: 'Colombo',
    province: 'Western',
    address: 'Moratuwa Road, Piliyandala',
    coordinates: { lat: 6.8007, lng: 79.9227 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 7,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 11 261 2345',
    zone: 'Zone 2',
    type: 'Regional Hub'
  },
  {
    id: 'CMB-007',
    code: 'HMG',
    name: 'Homagama Bus Stand',
    city: 'Homagama',
    district: 'Colombo',
    province: 'Western',
    address: 'High Level Road, Homagama',
    coordinates: { lat: 6.8444, lng: 80.0025 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Stalls'],
    platforms: 6,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 11 285 6789',
    zone: 'Zone 2',
    type: 'Local Terminal'
  },
  {
    id: 'CMB-008',
    code: 'MRT',
    name: 'Moratuwa Bus Stand',
    city: 'Moratuwa',
    district: 'Colombo',
    province: 'Western',
    address: 'Galle Road, Moratuwa',
    coordinates: { lat: 6.7730, lng: 79.8816 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'ATM', 'Shops'],
    platforms: 8,
    operatingHours: '04:30 AM - 10:30 PM',
    contactNumber: '+94 11 264 5678',
    zone: 'Zone 3',
    type: 'Regional Hub'
  },

  // ============================================
  // WESTERN PROVINCE - GAMPAHA DISTRICT
  // ============================================
  {
    id: 'GMP-001',
    code: 'NGB',
    name: 'Negombo Bus Stand',
    city: 'Negombo',
    district: 'Gampaha',
    province: 'Western',
    address: 'Main Street, Negombo',
    coordinates: { lat: 7.2083, lng: 79.8358 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'Parking', 'ATM'],
    platforms: 10,
    operatingHours: '04:00 AM - 11:00 PM',
    contactNumber: '+94 31 222 3456',
    zone: 'Zone 3',
    type: 'Major Terminal'
  },
  {
    id: 'GMP-002',
    code: 'KTN',
    name: 'Katunayake Airport Terminal',
    city: 'Katunayake',
    district: 'Gampaha',
    province: 'Western',
    address: 'Airport Access Road, Katunayake',
    coordinates: { lat: 7.1697, lng: 79.8847 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Duty Free', 'ATM', 'WiFi', 'Luggage Storage', 'Tourist Info'],
    platforms: 8,
    operatingHours: '24/7',
    contactNumber: '+94 31 225 7890',
    zone: 'Zone 3',
    type: 'Airport Terminal'
  },
  {
    id: 'GMP-003',
    code: 'KDW',
    name: 'Kadawatha Junction',
    city: 'Kadawatha',
    district: 'Gampaha',
    province: 'Western',
    address: 'Kandy Road, Kadawatha',
    coordinates: { lat: 7.0008, lng: 79.9533 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM'],
    platforms: 6,
    operatingHours: '05:00 AM - 10:00 PM',
    contactNumber: '+94 11 292 3456',
    zone: 'Zone 2',
    type: 'Regional Hub'
  },
  {
    id: 'GMP-004',
    code: 'RGM',
    name: 'Ragama Bus Stand',
    city: 'Ragama',
    district: 'Gampaha',
    province: 'Western',
    address: 'Kandy Road, Ragama',
    coordinates: { lat: 7.0264, lng: 79.9219 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 5,
    operatingHours: '05:00 AM - 10:00 PM',
    contactNumber: '+94 11 295 2345',
    zone: 'Zone 2',
    type: 'Local Terminal'
  },
  {
    id: 'GMP-005',
    code: 'GMP',
    name: 'Gampaha Bus Stand',
    city: 'Gampaha',
    district: 'Gampaha',
    province: 'Western',
    address: 'Colombo Road, Gampaha',
    coordinates: { lat: 7.0840, lng: 80.0098 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'Parking'],
    platforms: 9,
    operatingHours: '04:30 AM - 10:30 PM',
    contactNumber: '+94 33 222 4567',
    zone: 'Zone 2',
    type: 'Regional Hub'
  },
  {
    id: 'GMP-006',
    code: 'JEL',
    name: 'Ja-Ela Bus Stand',
    city: 'Ja-Ela',
    district: 'Gampaha',
    province: 'Western',
    address: 'Negombo Road, Ja-Ela',
    coordinates: { lat: 7.0745, lng: 79.8919 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 6,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 11 223 5678',
    zone: 'Zone 3',
    type: 'Local Terminal'
  },
  {
    id: 'GMP-007',
    code: 'WTL',
    name: 'Wattala Central',
    city: 'Wattala',
    district: 'Gampaha',
    province: 'Western',
    address: 'Negombo Road, Wattala',
    coordinates: { lat: 6.9889, lng: 79.8914 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'ATM'],
    platforms: 5,
    operatingHours: '05:00 AM - 10:30 PM',
    contactNumber: '+94 11 229 3456',
    zone: 'Zone 2',
    type: 'Local Terminal'
  },
  {
    id: 'GMP-008',
    code: 'MNG',
    name: 'Minuwangoda Bus Stand',
    city: 'Minuwangoda',
    district: 'Gampaha',
    province: 'Western',
    address: 'Colombo Road, Minuwangoda',
    coordinates: { lat: 7.1731, lng: 79.9528 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 6,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 11 229 7890',
    zone: 'Zone 3',
    type: 'Local Terminal'
  },
  {
    id: 'GMP-009',
    code: 'VYG',
    name: 'Veyangoda Bus Stand',
    city: 'Veyangoda',
    district: 'Gampaha',
    province: 'Western',
    address: 'Kandy Road, Veyangoda',
    coordinates: { lat: 7.1561, lng: 80.0603 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms'],
    platforms: 5,
    operatingHours: '05:00 AM - 09:30 PM',
    contactNumber: '+94 33 224 5678',
    zone: 'Zone 3',
    type: 'Local Terminal'
  },

  // ============================================
  // WESTERN PROVINCE - KALUTARA DISTRICT
  // ============================================
  {
    id: 'KLT-001',
    code: 'KLT',
    name: 'Kalutara Bus Stand',
    city: 'Kalutara',
    district: 'Kalutara',
    province: 'Western',
    address: 'Galle Road, Kalutara South',
    coordinates: { lat: 6.5854, lng: 79.9607 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM'],
    platforms: 7,
    operatingHours: '04:30 AM - 10:30 PM',
    contactNumber: '+94 34 222 1234',
    zone: 'Zone 4',
    type: 'Regional Hub'
  },
  {
    id: 'KLT-002',
    code: 'PND',
    name: 'Panadura Bus Stand',
    city: 'Panadura',
    district: 'Kalutara',
    province: 'Western',
    address: 'Galle Road, Panadura',
    coordinates: { lat: 6.7133, lng: 79.9026 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'Shops'],
    platforms: 8,
    operatingHours: '04:30 AM - 10:30 PM',
    contactNumber: '+94 38 223 4567',
    zone: 'Zone 3',
    type: 'Regional Hub'
  },
  {
    id: 'KLT-003',
    code: 'BRL',
    name: 'Beruwala Bus Stand',
    city: 'Beruwala',
    district: 'Kalutara',
    province: 'Western',
    address: 'Galle Road, Beruwala',
    coordinates: { lat: 6.4789, lng: 79.9828 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 5,
    operatingHours: '05:00 AM - 10:00 PM',
    contactNumber: '+94 34 227 5678',
    zone: 'Zone 4',
    type: 'Local Terminal'
  },
  {
    id: 'KLT-004',
    code: 'AGM',
    name: 'Aluthgama Bus Stand',
    city: 'Aluthgama',
    district: 'Kalutara',
    province: 'Western',
    address: 'Galle Road, Aluthgama',
    coordinates: { lat: 6.4286, lng: 79.9999 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Stalls'],
    platforms: 6,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 34 227 8901',
    zone: 'Zone 4',
    type: 'Regional Hub'
  },

  // ============================================
  // SOUTHERN PROVINCE - GALLE DISTRICT
  // ============================================
  {
    id: 'GLE-001',
    code: 'GLE',
    name: 'Galle Bus Station',
    city: 'Galle',
    district: 'Galle',
    province: 'Southern',
    address: 'Matara Road, Galle',
    coordinates: { lat: 6.0535, lng: 80.2210 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'Shops', 'Tourist Info'],
    platforms: 12,
    operatingHours: '04:00 AM - 11:00 PM',
    contactNumber: '+94 91 222 3456',
    zone: 'Zone 5',
    type: 'Major Terminal'
  },
  {
    id: 'GLE-002',
    code: 'HKD',
    name: 'Hikkaduwa Bus Stop',
    city: 'Hikkaduwa',
    district: 'Galle',
    province: 'Southern',
    address: 'Galle Road, Hikkaduwa',
    coordinates: { lat: 6.1408, lng: 80.1034 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Tourist Info'],
    platforms: 4,
    operatingHours: '05:00 AM - 10:00 PM',
    contactNumber: '+94 91 227 7890',
    zone: 'Zone 5',
    type: 'Tourist Hub'
  },
  {
    id: 'GLE-003',
    code: 'AMD',
    name: 'Ambalangoda Bus Stand',
    city: 'Ambalangoda',
    district: 'Galle',
    province: 'Southern',
    address: 'Galle Road, Ambalangoda',
    coordinates: { lat: 6.2358, lng: 80.0539 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 5,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 91 225 6789',
    zone: 'Zone 5',
    type: 'Local Terminal'
  },
  {
    id: 'GLE-004',
    code: 'ENT',
    name: 'Elpitiya Bus Stand',
    city: 'Elpitiya',
    district: 'Galle',
    province: 'Southern',
    address: 'Galle Road, Elpitiya',
    coordinates: { lat: 6.2917, lng: 80.1633 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms'],
    platforms: 4,
    operatingHours: '05:00 AM - 09:00 PM',
    contactNumber: '+94 91 229 4567',
    zone: 'Zone 5',
    type: 'Local Terminal'
  },

  // ============================================
  // SOUTHERN PROVINCE - MATARA DISTRICT
  // ============================================
  {
    id: 'MTR-001',
    code: 'MTR',
    name: 'Matara Bus Stand',
    city: 'Matara',
    district: 'Matara',
    province: 'Southern',
    address: 'Anagarika Dharmapala Mawatha, Matara',
    coordinates: { lat: 5.9549, lng: 80.5550 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'Parking', 'Food Court', 'ATM'],
    platforms: 10,
    operatingHours: '04:00 AM - 10:00 PM',
    contactNumber: '+94 41 222 5678',
    zone: 'Zone 6',
    type: 'Major Terminal'
  },
  {
    id: 'MTR-002',
    code: 'WLG',
    name: 'Weligama Bus Stand',
    city: 'Weligama',
    district: 'Matara',
    province: 'Southern',
    address: 'Matara Road, Weligama',
    coordinates: { lat: 5.9733, lng: 80.4297 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Tourist Info'],
    platforms: 5,
    operatingHours: '05:00 AM - 10:00 PM',
    contactNumber: '+94 41 225 6789',
    zone: 'Zone 6',
    type: 'Tourist Hub'
  },
  {
    id: 'MTR-003',
    code: 'AKS',
    name: 'Akuressa Bus Stand',
    city: 'Akuressa',
    district: 'Matara',
    province: 'Southern',
    address: 'Main Street, Akuressa',
    coordinates: { lat: 6.0931, lng: 80.5011 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms'],
    platforms: 4,
    operatingHours: '05:00 AM - 09:00 PM',
    contactNumber: '+94 41 228 4567',
    zone: 'Zone 6',
    type: 'Local Terminal'
  },

  // ============================================
  // SOUTHERN PROVINCE - HAMBANTOTA DISTRICT
  // ============================================
  {
    id: 'HMB-001',
    code: 'HMB',
    name: 'Hambantota Bus Stand',
    city: 'Hambantota',
    district: 'Hambantota',
    province: 'Southern',
    address: 'Main Street, Hambantota',
    coordinates: { lat: 6.1429, lng: 81.1212 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'Tourist Info'],
    platforms: 8,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 47 222 3456',
    zone: 'Zone 7',
    type: 'Regional Hub'
  },
  {
    id: 'HMB-002',
    code: 'TGE',
    name: 'Tangalle Bus Stand',
    city: 'Tangalle',
    district: 'Hambantota',
    province: 'Southern',
    address: 'Main Road, Tangalle',
    coordinates: { lat: 6.0237, lng: 80.7967 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Tourist Info'],
    platforms: 5,
    operatingHours: '05:00 AM - 10:00 PM',
    contactNumber: '+94 47 224 5678',
    zone: 'Zone 7',
    type: 'Tourist Hub'
  },

  // ============================================
  // CENTRAL PROVINCE - KANDY DISTRICT
  // ============================================
  {
    id: 'KDY-001',
    code: 'KDY',
    name: 'Kandy Goods Shed Bus Terminal',
    city: 'Kandy',
    district: 'Kandy',
    province: 'Central',
    address: 'DS Senanayake Veediya, Kandy',
    coordinates: { lat: 7.2906, lng: 80.6337 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'WiFi', 'Shops', 'Tourist Info'],
    platforms: 16,
    operatingHours: '04:00 AM - 11:00 PM',
    contactNumber: '+94 81 222 3456',
    zone: 'Zone 8',
    type: 'Major Terminal'
  },
  {
    id: 'KDY-002',
    code: 'PRD',
    name: 'Peradeniya Bus Stand',
    city: 'Peradeniya',
    district: 'Kandy',
    province: 'Central',
    address: 'Kandy Road, Peradeniya',
    coordinates: { lat: 7.2595, lng: 80.5972 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 6,
    operatingHours: '05:00 AM - 09:30 PM',
    contactNumber: '+94 81 238 7890',
    zone: 'Zone 8',
    type: 'Local Terminal'
  },
  {
    id: 'KDY-003',
    code: 'GMP',
    name: 'Gampola Bus Stand',
    city: 'Gampola',
    district: 'Kandy',
    province: 'Central',
    address: 'Colombo Road, Gampola',
    coordinates: { lat: 7.1647, lng: 80.5769 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 7,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 81 235 4567',
    zone: 'Zone 8',
    type: 'Regional Hub'
  },

  // ============================================
  // CENTRAL PROVINCE - MATALE DISTRICT
  // ============================================
  {
    id: 'MTL-001',
    code: 'MTL',
    name: 'Matale Bus Stand',
    city: 'Matale',
    district: 'Matale',
    province: 'Central',
    address: 'King Street, Matale',
    coordinates: { lat: 7.4675, lng: 80.6234 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM', 'Food Court'],
    platforms: 8,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 66 222 3456',
    zone: 'Zone 8',
    type: 'Regional Hub'
  },
  {
    id: 'MTL-002',
    code: 'DBL',
    name: 'Dambulla Bus Stand',
    city: 'Dambulla',
    district: 'Matale',
    province: 'Central',
    address: 'Anuradhapura Road, Dambulla',
    coordinates: { lat: 7.8731, lng: 80.6514 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'Tourist Info', 'ATM'],
    platforms: 9,
    operatingHours: '04:00 AM - 10:30 PM',
    contactNumber: '+94 66 228 5678',
    zone: 'Zone 9',
    type: 'Regional Hub'
  },

  // ============================================
  // CENTRAL PROVINCE - NUWARA ELIYA DISTRICT
  // ============================================
  {
    id: 'NWE-001',
    code: 'NWE',
    name: 'Nuwara Eliya Town Bus Stand',
    city: 'Nuwara Eliya',
    district: 'Nuwara Eliya',
    province: 'Central',
    address: 'Badulla Road, Nuwara Eliya',
    coordinates: { lat: 6.9497, lng: 80.7891 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Heated Waiting Room', 'Tourist Info', 'Shops'],
    platforms: 6,
    operatingHours: '05:00 AM - 09:00 PM',
    contactNumber: '+94 52 222 1234',
    zone: 'Zone 10',
    type: 'Tourist Hub'
  },
  {
    id: 'NWE-002',
    code: 'HAT',
    name: 'Hatton Bus Stand',
    city: 'Hatton',
    district: 'Nuwara Eliya',
    province: 'Central',
    address: 'Main Street, Hatton',
    coordinates: { lat: 6.8939, lng: 80.5958 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 5,
    operatingHours: '05:00 AM - 09:00 PM',
    contactNumber: '+94 51 222 3456',
    zone: 'Zone 10',
    type: 'Local Terminal'
  },

  // ============================================
  // NORTH CENTRAL PROVINCE - ANURADHAPURA
  // ============================================
  {
    id: 'ADP-001',
    code: 'ADP',
    name: 'Anuradhapura New Bus Stand',
    city: 'Anuradhapura',
    district: 'Anuradhapura',
    province: 'North Central',
    address: 'Puttalam Road, Anuradhapura',
    coordinates: { lat: 8.3114, lng: 80.4037 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'Tourist Info', 'WiFi', 'Medical Room'],
    platforms: 14,
    operatingHours: '04:00 AM - 10:30 PM',
    contactNumber: '+94 25 222 3456',
    zone: 'Zone 11',
    type: 'Major Terminal'
  },

  // ============================================
  // NORTH CENTRAL PROVINCE - POLONNARUWA
  // ============================================
  {
    id: 'PLN-001',
    code: 'PLN',
    name: 'Polonnaruwa Bus Stand',
    city: 'Polonnaruwa',
    district: 'Polonnaruwa',
    province: 'North Central',
    address: 'Batticaloa Road, Polonnaruwa',
    coordinates: { lat: 7.9403, lng: 81.0188 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'Tourist Info', 'ATM'],
    platforms: 8,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 27 222 1234',
    zone: 'Zone 11',
    type: 'Regional Hub'
  },

  // ============================================
  // SABARAGAMUWA PROVINCE - RATNAPURA
  // ============================================
  {
    id: 'RTP-001',
    code: 'RTP',
    name: 'Ratnapura Bus Stand',
    city: 'Ratnapura',
    district: 'Ratnapura',
    province: 'Sabaragamuwa',
    address: 'Main Street, Ratnapura',
    coordinates: { lat: 6.6828, lng: 80.4017 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM', 'Food Court'],
    platforms: 9,
    operatingHours: '04:00 AM - 10:00 PM',
    contactNumber: '+94 45 222 3456',
    zone: 'Zone 12',
    type: 'Regional Hub'
  },
  {
    id: 'RTP-002',
    code: 'EML',
    name: 'Embilipitiya Bus Stand',
    city: 'Embilipitiya',
    district: 'Ratnapura',
    province: 'Sabaragamuwa',
    address: 'Main Street, Embilipitiya',
    coordinates: { lat: 6.3431, lng: 80.8514 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 6,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 47 226 4567',
    zone: 'Zone 12',
    type: 'Local Terminal'
  },

  // ============================================
  // SABARAGAMUWA PROVINCE - KEGALLE
  // ============================================
  {
    id: 'KGL-001',
    code: 'KGL',
    name: 'Kegalle Bus Stand',
    city: 'Kegalle',
    district: 'Kegalle',
    province: 'Sabaragamuwa',
    address: 'Colombo Road, Kegalle',
    coordinates: { lat: 7.2513, lng: 80.3464 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM'],
    platforms: 7,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 35 222 1234',
    zone: 'Zone 8',
    type: 'Regional Hub'
  },
  {
    id: 'KGL-002',
    code: 'MWL',
    name: 'Mawanella Bus Stand',
    city: 'Mawanella',
    district: 'Kegalle',
    province: 'Sabaragamuwa',
    address: 'Colombo Road, Mawanella',
    coordinates: { lat: 7.2500, lng: 80.4333 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Stalls'],
    platforms: 5,
    operatingHours: '05:00 AM - 09:30 PM',
    contactNumber: '+94 35 224 5678',
    zone: 'Zone 8',
    type: 'Local Terminal'
  },
  {
    id: 'KGL-003',
    code: 'AVS',
    name: 'Avissawella Bus Stand',
    city: 'Avissawella',
    district: 'Colombo',
    province: 'Western',
    address: 'High Level Road, Avissawella',
    coordinates: { lat: 6.9519, lng: 80.2097 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM'],
    platforms: 7,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 36 222 3456',
    zone: 'Zone 3',
    type: 'Regional Hub'
  },

  // ============================================
  // UVA PROVINCE - BADULLA DISTRICT
  // ============================================
  {
    id: 'BDL-001',
    code: 'BDL',
    name: 'Badulla Bus Stand',
    city: 'Badulla',
    district: 'Badulla',
    province: 'Uva',
    address: 'Bandaranaike Mawatha, Badulla',
    coordinates: { lat: 6.9934, lng: 81.0550 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'Shops', 'ATM', 'Tourist Info'],
    platforms: 10,
    operatingHours: '04:00 AM - 10:00 PM',
    contactNumber: '+94 55 222 3456',
    zone: 'Zone 13',
    type: 'Regional Hub'
  },
  {
    id: 'BDL-002',
    code: 'ELA',
    name: 'Ella Bus Stand',
    city: 'Ella',
    district: 'Badulla',
    province: 'Uva',
    address: 'Main Street, Ella',
    coordinates: { lat: 6.8667, lng: 81.0467 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Tourist Info'],
    platforms: 4,
    operatingHours: '05:00 AM - 08:00 PM',
    contactNumber: '+94 57 222 8901',
    zone: 'Zone 13',
    type: 'Tourist Hub'
  },
  {
    id: 'BDL-003',
    code: 'BNW',
    name: 'Bandarawela Bus Stand',
    city: 'Bandarawela',
    district: 'Badulla',
    province: 'Uva',
    address: 'Badulla Road, Bandarawela',
    coordinates: { lat: 6.8314, lng: 80.9861 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 6,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 57 222 4567',
    zone: 'Zone 13',
    type: 'Local Terminal'
  },

  // ============================================
  // UVA PROVINCE - MONARAGALA DISTRICT
  // ============================================
  {
    id: 'MNG-001',
    code: 'MNG',
    name: 'Monaragala Bus Stand',
    city: 'Monaragala',
    district: 'Monaragala',
    province: 'Uva',
    address: 'Wellawaya Road, Monaragala',
    coordinates: { lat: 6.8728, lng: 81.3507 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 6,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 55 227 1234',
    zone: 'Zone 13',
    type: 'Local Terminal'
  },
  {
    id: 'MNG-002',
    code: 'WLW',
    name: 'Wellawaya Bus Stand',
    city: 'Wellawaya',
    district: 'Monaragala',
    province: 'Uva',
    address: 'Main Street, Wellawaya',
    coordinates: { lat: 6.7344, lng: 81.1008 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Stalls'],
    platforms: 5,
    operatingHours: '05:00 AM - 09:00 PM',
    contactNumber: '+94 55 227 5678',
    zone: 'Zone 13',
    type: 'Local Terminal'
  },

  // ============================================
  // EASTERN PROVINCE - TRINCOMALEE
  // ============================================
  {
    id: 'TRR-001',
    code: 'TRR',
    name: 'Trincomalee Central Bus Stand',
    city: 'Trincomalee',
    district: 'Trincomalee',
    province: 'Eastern',
    address: 'Court Road, Trincomalee',
    coordinates: { lat: 8.5874, lng: 81.2152 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'Shops', 'ATM', 'Tourist Info'],
    platforms: 10,
    operatingHours: '04:00 AM - 10:30 PM',
    contactNumber: '+94 26 222 3456',
    zone: 'Zone 14',
    type: 'Major Terminal'
  },

  // ============================================
  // EASTERN PROVINCE - BATTICALOA
  // ============================================
  {
    id: 'BTC-001',
    code: 'BTC',
    name: 'Batticaloa Bus Stand',
    city: 'Batticaloa',
    district: 'Batticaloa',
    province: 'Eastern',
    address: 'Main Street, Batticaloa',
    coordinates: { lat: 7.7310, lng: 81.6747 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM', 'Food Court'],
    platforms: 9,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 65 222 1234',
    zone: 'Zone 14',
    type: 'Regional Hub'
  },

  // ============================================
  // EASTERN PROVINCE - AMPARA
  // ============================================
  {
    id: 'AMP-001',
    code: 'AMP',
    name: 'Ampara Bus Stand',
    city: 'Ampara',
    district: 'Ampara',
    province: 'Eastern',
    address: 'Main Street, Ampara',
    coordinates: { lat: 7.2975, lng: 81.6722 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 7,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 63 222 3456',
    zone: 'Zone 14',
    type: 'Regional Hub'
  },

  // ============================================
  // NORTHERN PROVINCE - JAFFNA
  // ============================================
  {
    id: 'JAF-001',
    code: 'JAF',
    name: 'Jaffna Central Bus Stand',
    city: 'Jaffna',
    district: 'Jaffna',
    province: 'Northern',
    address: 'Hospital Road, Jaffna',
    coordinates: { lat: 9.6615, lng: 80.0255 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'WiFi', 'Shops'],
    platforms: 12,
    operatingHours: '04:00 AM - 10:30 PM',
    contactNumber: '+94 21 222 3456',
    zone: 'Zone 15',
    type: 'Major Terminal'
  },

  // ============================================
  // NORTHERN PROVINCE - VAVUNIYA
  // ============================================
  {
    id: 'VVN-001',
    code: 'VVN',
    name: 'Vavuniya Bus Stand',
    city: 'Vavuniya',
    district: 'Vavuniya',
    province: 'Northern',
    address: 'Second Cross Street, Vavuniya',
    coordinates: { lat: 8.7514, lng: 80.4971 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'Food Court', 'ATM'],
    platforms: 8,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 24 222 1234',
    zone: 'Zone 15',
    type: 'Regional Hub'
  },

  // ============================================
  // NORTHERN PROVINCE - MANNAR
  // ============================================
  {
    id: 'MNR-001',
    code: 'MNR',
    name: 'Mannar Bus Stand',
    city: 'Mannar',
    district: 'Mannar',
    province: 'Northern',
    address: 'Main Street, Mannar',
    coordinates: { lat: 8.9810, lng: 79.9044 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 5,
    operatingHours: '05:00 AM - 09:00 PM',
    contactNumber: '+94 23 222 3456',
    zone: 'Zone 15',
    type: 'Local Terminal'
  },

  // ============================================
  // NORTH WESTERN PROVINCE - KURUNEGALA
  // ============================================
  {
    id: 'KRN-001',
    code: 'KRN',
    name: 'Kurunegala Bus Stand',
    city: 'Kurunegala',
    district: 'Kurunegala',
    province: 'North Western',
    address: 'Colombo Road, Kurunegala',
    coordinates: { lat: 7.4867, lng: 80.3647 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Food Court', 'ATM', 'Shops', 'Medical Room'],
    platforms: 14,
    operatingHours: '04:00 AM - 11:00 PM',
    contactNumber: '+94 37 222 3456',
    zone: 'Zone 9',
    type: 'Major Terminal'
  },
  {
    id: 'KRN-002',
    code: 'CLM',
    name: 'Chilaw Bus Stand',
    city: 'Chilaw',
    district: 'Puttalam',
    province: 'North Western',
    address: 'Colombo Road, Chilaw',
    coordinates: { lat: 7.5758, lng: 79.7956 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops', 'ATM'],
    platforms: 7,
    operatingHours: '04:30 AM - 10:00 PM',
    contactNumber: '+94 32 221 3456',
    zone: 'Zone 9',
    type: 'Regional Hub'
  },
  {
    id: 'KRN-003',
    code: 'PTM',
    name: 'Puttalam Bus Stand',
    city: 'Puttalam',
    district: 'Puttalam',
    province: 'North Western',
    address: 'Main Street, Puttalam',
    coordinates: { lat: 8.0362, lng: 79.8283 },
    facilities: ['Ticket Counter', 'Waiting Area', 'Restrooms', 'Shops'],
    platforms: 6,
    operatingHours: '04:30 AM - 09:30 PM',
    contactNumber: '+94 32 226 4567',
    zone: 'Zone 10',
    type: 'Regional Hub'
  }
]
