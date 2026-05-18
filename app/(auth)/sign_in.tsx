import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const sign_in = () => {
  return (
  <View className="flex-1 items-center justify-center bg-background">
      <Text>sign_in</Text>
      <Link href="/sign_up" className=" mt-4  bg-primary text-lg text-white font-bold px-4 py-2 rounded">
        Sign Up
      </Link>
    </View>
  )
}

export default sign_in