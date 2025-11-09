import ProfileHeader from '@/components/profile/ProfileHeader'
import ProfileMenuGroup from '@/components/profile/ProfileMenuGroup'
import { profileMenuGroups } from '@/constant/profile-menu'
import { profileSummary } from '@/sample/profile'
import { useRouter } from 'expo-router'
import React, { useCallback } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen: React.FC = () => {
  const router = useRouter()

  const handleMenuPress = useCallback(
    (item: (typeof profileMenuGroups)[number]['items'][number]) => {
      if (item.id === 'logout') {
        console.log('Log out tapped')
        return
      }

      if (item.route) {
        router.push(item.route as never)
      }
    },
    [router]
  )

  return (
    <SafeAreaView className='flex-1 bg-white pb-10'>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
        <ProfileHeader
          name={profileSummary.name}
          email={profileSummary.email}
          phone={profileSummary.phone}
          avatarUrl={profileSummary.avatarUrl}
        />

        <View className='mt-10'>
          {profileMenuGroups.map(group => (
            <ProfileMenuGroup key={group.title} title={group.title} items={group.items} onItemPress={handleMenuPress} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen