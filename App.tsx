import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    
      <View className='h-full bg-black'>
      <View className='h-[250] w-full bg-white'>
        <Image className='h-full'
              source={{ uri: 'https://image.tmdb.org/t/p/original//4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg'}}
          resizeMode="cover" /> 
        <View className='flex-row h-[160]  absolute left-0 right-0 bottom-0 px-6 items-end'>
          <View className='flex-none  h-[130] w-[100]  border-4  border-white rounded-xl mb-2 justify-end overflow-hidden'>
            <Image className='h-full ' source={{ uri: 'https://image.tmdb.org/t/p/original//4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg'}} />
          </View>
          <View className='flex-1 mb-2 ml-2'>
            <Text className='text-white font-bold text-xl'>The Beekeeper</Text>
            <Text className=' text-white text-base'>Expose the corruption. Protect the hive.</Text>
          </View>
        </View>
      </View>

      <View className='flex-row mt-4 px-6'>
        <View className='border border-white rounded-xl'>
          <Text className='text-white p-1.5'>ACTION</Text>
        </View>
        <View className='border border-white rounded-xl mx-4'>
          <Text className='text-white p-1.5'>THRILLER</Text>
        </View>
        <View className='border border-white rounded-xl'>
          <Text className='text-white p-1.5'>DRAMA</Text>
        </View>
      </View>

      <View className='mt-6 mx-6'>
        <Text className='text-white text-xl font-bold'>January 10, 2024</Text>
        <Text className='mt-1 text-lg text-slate-500'>One man's campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as
        eekeepers.</Text>
      </View>

      






      </View>
    
  )
}

const styles = StyleSheet.create({})