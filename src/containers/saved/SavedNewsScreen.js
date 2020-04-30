import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeArea } from 'react-native-safe-area-context'
import { Card } from '../../components/Card'
import Header from '../../components/Header'
import NoNews from '../../components/NoNews'
import Colors from '../../constants/Colors'
import { NewsContext } from '../../context/NewsHandler'
import { Dictionary } from '../../lib/dictionary'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  extraPaddingFlatList: {
    paddingVertical: 20,
  },
  itemSeparator: {
    height: 10,
  },
})

export default SavedNewsScreen = () => {
  const insets = useSafeArea()
  const { savedNews, isFetching, handleCurrentNews, news } = useContext(NewsContext)
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header headerText={Dictionary.favorite.headerTitle} />
      <FlatList
        contentContainerStyle={styles.extraPaddingFlatList}
        ListEmptyComponent={() => <NoNews />}
        data={savedNews}
        keyExtractor={(item, index) => `${index}-${item.publishedAt}`}
        renderItem={({ item }) => (
          <Card
            news={item}
            handleCurrentNews={handleCurrentNews}
            deleteNews
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  )
}


