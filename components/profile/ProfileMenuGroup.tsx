import React from 'react'
import { Text, View } from 'react-native'
import ProfileMenuItem, { ProfileMenuItemProps } from './ProfileMenuItem'

export type ProfileMenuGroupProps = {
  title: string
  items: ProfileMenuItemProps['item'][]
  onItemPress?: ProfileMenuItemProps['onPress']
}

const ProfileMenuGroup: React.FC<ProfileMenuGroupProps> = ({ title, items, onItemPress }) => {
  if (items.length === 0) return null

  return (
    <View className='mb-6'>
      <Text className='text-xs uppercase tracking-[1.6px] text-gray-400 font-poppins-medium px-6 mb-3'>
        {title}
      </Text>
      <View className='bg-white mx-4 rounded-3xl shadow-sm shadow-indigo-100 border border-slate-100 overflow-hidden'>
        {items.map((item, index) => (
          <ProfileMenuItem
            key={item.id}
            item={item}
            onPress={onItemPress}
            isLast={index === items.length - 1}
          />
        ))}
      </View>
    </View>
  )
}

export default ProfileMenuGroup
