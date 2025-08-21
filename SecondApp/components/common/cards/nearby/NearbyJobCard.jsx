import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNavigate(item)}
    >
      <TouchableOpacity
        style={styles.logoContainer}>
        <Image
          source={{ uri: job.employer_logo }}
          resizeMethod='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employement_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard

const cardStyles = StyleSheet.create({
  contaienr: {
    gap: "15px",
    borderColor: "red"
  }
}) 