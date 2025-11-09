export type ProfileMenuIcon =
  | 'user'
  | 'shield'
  | 'bell'
  | 'creditCard'
  | 'wallet'
  | 'globe'
  | 'moon'
  | 'lifeBuoy'
  | 'help'
  | 'logOut'

export type ProfileMenuItem = {
  id: string
  label: string
  description?: string
  icon: ProfileMenuIcon
  route?: string
  isDestructive?: boolean
}

export type ProfileMenuGroup = {
  title: string
  items: ProfileMenuItem[]
}
