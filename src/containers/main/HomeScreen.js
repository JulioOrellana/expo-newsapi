import React, { useContext } from 'react'
import { RefreshControl, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSafeArea } from 'react-native-safe-area-context'
import { Card } from '../../components/Card'
import Header from '../../components/Header'
import { Loading } from '../../components/Loading'
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

export default HomeScreen = () => {
  const insets = useSafeArea();
  const { news, isFetching, handleCurrentNews, fetchNews, savedNews } = useContext(NewsContext)

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Header headerText={Dictionary.main.headerTitle} />
      <FlatList
        refreshControl={<RefreshControl refreshing={isFetching} onRefresh={fetchNews} />}
        contentContainerStyle={styles.extraPaddingFlatList}
        ListEmptyComponent={() =>
          isFetching
            ? <Loading showLoading={false} showLoadingText loadingText={Dictionary.main.loading} />
            : <NoNews />
        }
        data={news}
        keyExtractor={(item, index) => `${index}-${item.publishedAt}`}
        renderItem={({ item }) => (
          <Card
            news={item}
            handleCurrentNews={handleCurrentNews}
            savedNews={savedNews}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  )
}

