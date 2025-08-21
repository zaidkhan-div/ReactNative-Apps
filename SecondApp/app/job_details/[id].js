import React from 'react'
import { View, Text, ScrollView, ActivityIndicator, RefreshControl, SafeAreaView } from 'react-native-web'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useCallback, useState } from 'react'
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from '../../components'
import { SIZES, COLORS, icons } from '../../constants'
import useFetch from '../../hooks/useFetch'
import tabs from '../../components/jobdetails/tabs/Tabs'

const tabs = ["About", "Qualification", "Responsibility"];

const JobDetails = () => {
    const params = useSearchParams();
    const router = useRouter();
    const { data, isLoading, error, refetch } = useFetch({
        endpoint: "job-details",
        query: { job_id: params.id }
    });
    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const onRefresh = () => { }

    return (
        <SafeAreaView style={{ flex: 1, backgroundClip: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension={60}
                            handlePress={() => router.back()}
                        />
                    ),
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.share}
                            dimension={60}
                        />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >
                {
                    isLoading ? <ActivityIndicator size="large" color={COLORS.primary} /> : error ? (
                        <Text>Something went wrong</Text>
                    ) : data.length === 0 ? (
                        <Text>No data</Text>
                    ) : (
                        <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                            <Company
                                companyLogo={data[0].employer_logo}
                                jobTitle={data[0].job_title}
                                companyName={data[0].employer_name}
                                Location={data[0].job_country}
                            />
                            <JobTabs
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        </View>
                    )
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default JobDetails
