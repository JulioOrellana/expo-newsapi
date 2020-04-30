import PropTypes from 'prop-types'
import React, { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { AsyncStorage } from 'react-native'
import Toast from '../components/Toast'
import * as CONTANTS from '../constants/storageKeys'
import Api from '../lib/api'
import { Dictionary } from '../lib/dictionary'
import { guidGenerator, isNewsSaved } from '../lib/utils'

export const NewsContext = createContext()

export const {
  Consumer: NewsConsumer,
  Provider: NewsProvider,
} = NewsContext

const saveToStorage = (savedNews) => AsyncStorage.setItem(CONTANTS.SAVED_NEWS, JSON.stringify(savedNews))

const addSavedNews = ({ currentNews, savedNews, updateSavedNews }) => {
  const newObject = {
    ...currentNews,
    id: guidGenerator()
  }
  const savedNewsList = [...savedNews, newObject]
  updateSavedNews(savedNewsList)
  saveToStorage(savedNewsList)
}

const deleteSavedNews = ({ currentNews, savedNews, updateSavedNews }) => {
  const newSavedNews = savedNews.filter(currentSaved => currentSaved.id !== currentNews.id)
  updateSavedNews(newSavedNews)
  saveToStorage(newSavedNews)
}

const getDataFromStorage = async () => JSON.parse(await AsyncStorage.getItem(CONTANTS.SAVED_NEWS))

const NewsHandler = ({ children }) => {
  const [news, updateNews] = useState([])
  const [savedNews, updateSavedNews] = useState([])
  const [isFetching, updateFetching] = useState(false)
  const [currentPage, updatePage] = useState(1)
  const toastRef = useRef()

  /**
   * @function handleCurrentNews
   * @param currentNews Object news
   * @param deleteNews boolean 
   * @return will return toast if adding news
   */
  const handleCurrentNews = useCallback(({ currentNews, deleteNews }) => {
    const exists = isNewsSaved({ news: currentNews, savedNews })
    if (exists && !deleteNews) {
      return toastRef.current.show(Dictionary.context.newsHandler.alreadySaved);
    } else if (exists && deleteNews) {
      return deleteSavedNews({ currentNews, savedNews, updateSavedNews })
    }
    addSavedNews({ currentNews, savedNews, updateSavedNews })
    return toastRef.current.show(Dictionary.context.newsHandler.saved)
  }, [savedNews])

  /**
   * @function updateFetching
   * @return void, updates articles 
   */
  const fetchNews = useCallback(async () => {
    updateFetching(true)
    try {
      const response = await Api.get({ page: currentPage })
      if (response.status === 200) {
        const { data: { articles } } = response
        updateNews(articles)
      }
    } catch (e) { }
    updateFetching(false)
  })

  useEffect(() => {
    const fetchSavedFromStorage = async () => {
      const storageNews = await getDataFromStorage()
      if (storageNews && storageNews.length) {
        updateSavedNews(storageNews)
      }
    }
    fetchSavedFromStorage()
    fetchNews()
  }, [])

  return (
    <NewsProvider
      value={{
        isFetching,
        news,
        savedNews,
        handleCurrentNews,
        fetchNews,
      }}
    >
      {children}
      <Toast toastRef={toastRef} />
    </NewsProvider>
  )
}

export default NewsHandler

NewsHandler.propTypes = {
  children: PropTypes.node.isRequired,
}