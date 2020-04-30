import { format } from 'date-fns'
import * as WebBrowser from 'expo-web-browser'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Colors from '../constants/Colors'
import { Dictionary } from '../lib/dictionary'
import { isNewsSaved, isValidUrl } from '../lib/utils'
import { CustomIcon } from './CustomIcon'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.card.backgroundColor,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  titleText: {
    color: Colors.textBlack,
    fontSize: 17,
    flexShrink: 1,
    textAlign: 'justify',
  },
  authorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  authortext: {
    color: Colors.textBlack,
    fontSize: 10,
    flexShrink: 1,
  },
  publishedAt: {
    color: Colors.textBlack,
    fontSize: 10,
    flexShrink: 1,
  },
  imageContainer: {
    flexDirection: 'column',
    width: 100,
    height: 100,
    backgroundColor: Colors.textBlack,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: 5,
  },
  contentText: {
    color: Colors.textGrey,
    fontSize: 13,
    textAlign: 'justify',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  newsButtonText: {
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  favoriteButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteText: {
    paddingRight: 5,
    fontSize: 10,
  },
  publishedText: {
    fontSize: 10
  },
  openWebview: {
    backgroundColor: Colors.blue,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  bookmark: {
    padding: 5,
  },
})

const handleLearnMorePress = (url) => WebBrowser.openBrowserAsync(url);

export const Card = ({
  news,
  handleCurrentNews,
  deleteNews,
  savedNews,
}) => {
  const {
    author,
    title,
    url,
    urlToImage,
    publishedAt,
    content,
  } = news
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {title}
          </Text>
          <View style={styles.authorContainer}>
            <Text style={styles.authorText}>
              {author}
            </Text>
            <Text style={styles.publishedText}>
              {publishedAt && format(new Date(publishedAt), "dd-MM-yyyy HH:MM")}
            </Text>
          </View>
        </View>
        {isValidUrl(urlToImage) && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: urlToImage }} style={styles.image} />
          </View>
        )}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          {content}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          onPress={() => handleLearnMorePress(url)}
          underlayColor="transparent"
          style={styles.openWebview}
        >
          <Text style={styles.newsButtonText}>
            {Dictionary.components.card.goToNews}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleCurrentNews({ currentNews: news, deleteNews })}
          underlayColor="transparent"
          style={styles.bookmark}
        >
          <View style={styles.favoriteButtonContainer}>
            <Text style={styles.favoriteText}>
              {
                !deleteNews
                  ? Dictionary.components.card.addToSaved
                  : Dictionary.components.card.deleteNews
              }
            </Text>
            <CustomIcon color={deleteNews ? Colors.error : Colors.tintColorSecond} name={deleteNews || isNewsSaved({ news, savedNews }) ? "bookmark" : "bookmark-outline"} size={20} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

Card.propTypes = {
  news: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string,
    content: PropTypes.string,
  }),
  handleCurrentNews: PropTypes.func,
  deleteNews: PropTypes.bool,
  savedNews: PropTypes.array,
}

Card.defaultProps = {
  news: {
    author: '',
    title: '',
    url: '',
    urlToImage: null,
    publishedAt: '',
    content: '',
  },
  handleCurrentNews: () => { },
  deleteNews: false,
  savedNews: [],
}