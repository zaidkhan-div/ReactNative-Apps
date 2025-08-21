import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native'
import styles from './nearbyjobs.style'
import { router, useRouter } from 'expo-router'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hooks/useFetch'
import { StyleSheet } from 'react-native'

const Nearbyjobs = () => {

  const { data, isLoading, error } = useFetch({
    endpoint: "search", query: {
      query: "React developer",
      num_pages: 1
    }
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
            data?.map((job) => (
              <NearbyJobCard
                job={job}
                key={`nearby-job-${job?.job_id}`}
                handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              />
            ))
          )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs

const cardStyles = StyleSheet.create({
  contaienr: {
    gap: "15px",
    borderColor: "red"
  }
}) 
