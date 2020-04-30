import { format } from 'date-fns';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Colors from '../constants/Colors';
import { Dictionary } from '../lib/dictionary';
import { CustomIcon } from './TabBarIcon';

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
    color: Colors.textBlack,
    textDecorationLine: 'underline',
  },
  favoriteButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoriteText: {
    fontSize: 10,
  },
})

const handleLearnMorePress = (url) => WebBrowser.openBrowserAsync(url);

export const Card = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => (
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
              {format(new Date(publishedAt), "dd-mm-yyyy")}
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: urlToImage }} style={styles.image} />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          {content}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          onPress={() => handleLearnMorePress(url)}
          underlayColor="none"
        >
          <Text style={styles.newsButtonText}>
            {Dictionary.components.card.goToNews}
          </Text>
        </TouchableHighlight>
        <View style={styles.favoriteButtonContainer}>
          <Text style={styles.favoriteText}>{Dictionary.components.card.addToFav}</Text>
          <CustomIcon name="star" size={20} />
        </View>
      </View>
    </View>
  )