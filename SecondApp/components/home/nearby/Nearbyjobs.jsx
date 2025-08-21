import { View, Text, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native'
import styles from './nearbyjobs.style'
import { COLORS, SIZES } from '@/constants'
import { useRouter } from 'expo-router'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hooks/useFetch'
import { StyleSheet } from 'react-native'

const Nearbyjobs = () => {

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: 1
  })

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
                <PopularJobCard
                  item={item}
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

export default Nearbyjobs

const cardStyles = StyleSheet.create({
  contaienr: {
    gap: "15px",
    borderColor: "red"
  }
}) 
