import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import styles from './popularjobs.style'
import { COLORS, SIZES } from '@/constants'
import { useRouter } from 'expo-router'
import PopularJobCard from "../../common/cards/popular/PopularJobCard"
import useFetch from '../../../hooks/useFetch'

const Popularjobs = () => {

  const { data, isLoading, error } = useFetch({
    endpoint: "search", query: {
      query: "React developer",
      num_pages: 1
    }
  })
  console.log(data.map(item => item.employer_logo), "FetchingData");
  const router = useRouter();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text>Show all</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" />)
          : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <PopularJobCard rJobCard
                  item={item}
                  selectedJob={selectedJob}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={item => item?.job_id}
              nestedScrollEnabled
              horizontal
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs