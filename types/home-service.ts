export type HomeServiceIcon =
  | 'train'
  | 'credit-card'
  | 'ticket'
  | 'wallet'
  | 'map'
  | 'clock'
  | 'history'
  | 'lifebuoy'

export type HomeService = {
  id: string
  title: string
  subtitle: string
  icon: HomeServiceIcon
  accentColor: string
  backgroundColor: string
  route: string
}

export type HomeServiceWithAction = HomeService & {
  onPress?: () => void
}
