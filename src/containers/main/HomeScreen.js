import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeArea } from 'react-native-safe-area-context'
import { Card } from '../../components/Card'
import Colors from '../../constants/Colors'
import Api from '../../lib/api'
import { Dictionary } from '../../lib/dictionary'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  headerContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: Colors.tintColor,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'space-mono',
  },
  extraPaddingFlatList: {
    paddingVertical: 20,
  },
  itemSeparator: {
    height: 10,
  },
})

export default HomeScreen = () => {
  const [news, setNews] = useState([])
  const insets = useSafeArea();

  useEffect(() => {
    const getNews = async () => {
      const { status, ...response } = await Api.get()
      if (status === 200) {
        const { data: { articles } } = response
        setNews()
      }
      setNews(response.data.articles)
    }
    getNews()
  }, [])

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{Dictionary.main.headerTitle}</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.extraPaddingFlatList}
        data={news}
        keyExtractor={(item) => item.publishedAt}
        renderItem={({ item }) => <Card {...item} />}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  )
}

