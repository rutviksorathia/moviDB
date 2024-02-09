import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FilmCast from './FilmCast'


export default function App() {
  return (
    <ScrollView>
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
      
      <View className='flex-row mt-2 mx-6 justify-between'>
        <Text className='text-white text-2xl font-bold'>Movie Cast</Text>
        <View className='h-[36] w-[36] bg-white rounded-full absolute right-0 overflow-hidden justify-center'>
         <Text className='items-center justify-center'>+41</Text>
        </View>
        <View className='h-[36] w-[36] bg-white rounded-full absolute right-5 overflow-hidden'>
           <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//lldeQ91GwIVff43JBrpdbAAeYWj.jpg'}} />
        </View>
        <View className='h-[36] w-[36] bg-white rounded-full absolute right-9 overflow-hidden'>
          <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//cBkHUBzqoqrnkxDXWlqQmm91pD2.jpg'}} />
        </View>
        <View className='h-[36] w-[36] bg-white rounded-full absolute right-14 overflow-hidden'>
          <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//kl8UjAeoj2ET20Udt8u9tgr5FAp.jpg'}} />
        </View>
        <View className='h-[36] w-[36] bg-white rounded-full absolute right-16 overflow-hidden'>
          <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//npowygg8rH7uJ4v7rAoDMsHBhNq.jpg'}} />
        </View>
      </View>

      <View className='flex-row flex-wrap px-6 pt-6 gap-5'>

        <View className='h-[210] w-[160] border-4  border-slate-500 rounded-xl overflow-hidden'>
           <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//lldeQ91GwIVff43JBrpdbAAeYWj.jpg'}} />
        </View>
        <View className='h-[210] w-[160] border-4  border-slate-500 rounded-xl overflow-hidden'>
           <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//npowygg8rH7uJ4v7rAoDMsHBhNq.jpg'}} />
        </View>
        <View className='h-[210] w-[160] border-4  border-slate-500 rounded-xl overflow-hidden'>
           <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//kl8UjAeoj2ET20Udt8u9tgr5FAp.jpg'}} />
        </View>
        <View className='h-[210] w-[160] border-4  border-slate-500 rounded-xl overflow-hidden'>
           <Image className='h-full' source={{ uri: 'https://image.tmdb.org/t/p/w200//cBkHUBzqoqrnkxDXWlqQmm91pD2.jpg'}} />
        </View>
      </View>
      </View>
      </ScrollView>
    
  )
}

const styles = StyleSheet.create({})