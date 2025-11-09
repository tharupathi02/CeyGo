import type { ProfileMenuGroup } from '@/types/profile'

export const profileMenuGroups: ProfileMenuGroup[] = [
  {
    title: 'Account',
    items: [
      {
        id: 'personal-info',
        label: 'Personal information',
        description: 'Update your name, email, and phone number',
        icon: 'user',
        route: '/(screens)/profile/personal-info'
      },
      {
        id: 'security',
        label: 'Security & privacy',
        description: 'Manage login methods and verification',
        icon: 'shield',
        route: '/(screens)/profile/security'
      },
      {
        id: 'notifications',
        label: 'Notifications',
        description: 'Choose alerts for cards and trips',
        icon: 'bell',
        route: '/(screens)/profile/notifications'
      }
    ]
  },
  {
    title: 'Payments',
    items: [
      {
        id: 'payment-methods',
        label: 'Payment methods',
        description: 'Cards, wallets, and auto reload',
        icon: 'creditCard',
        route: '/(screens)/payments/methods'
      },
      {
        id: 'travel-wallet',
        label: 'Travel wallet',
        description: 'Balance, limits, and statements',
        icon: 'wallet',
        route: '/(screens)/wallet/overview'
      }
    ]
  },
  {
    title: 'Preferences',
    items: [
      {
        id: 'language',
        label: 'Language',
        description: 'English (UK)',
        icon: 'globe'
      },
      {
        id: 'appearance',
        label: 'Appearance',
        description: 'Light mode',
        icon: 'moon'
      }
    ]
  },
  {
    title: 'Support',
    items: [
      {
        id: 'help-center',
        label: 'Help center',
        description: 'FAQs, guides, and contact',
        icon: 'help',
        route: '/(screens)/support/support-center'
      },
      {
        id: 'contact-support',
        label: 'Contact support',
        description: 'Chat with a metro expert',
        icon: 'lifeBuoy',
        route: '/(screens)/support/contact'
      },
      {
        id: 'logout',
        label: 'Log out',
        description: 'You are signed in as tharupathi02@gmail.com',
        icon: 'logOut',
        isDestructive: true
      }
    ]
  }
]
