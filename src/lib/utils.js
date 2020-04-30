/**
 * @function sanitizeHtml
 * @param {*} text text with html text
 */
export const sanitizeHtml = text => text.replace(/<\/?[^>]+(>|$)/g, "")

/**
 * @function isValidUrl
 * @param {*} imageUrl
 * @return boolean
 * Check if url has http or https 
 */
export const isValidUrl = imageUrl => new RegExp(/http|https/).test(imageUrl)

/**
 * @function guidGenerator
 * @return random not secure guid
 */
export const guidGenerator = () => {
  const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

/**
 * @function isNewsSaved
 * @return boolean to verify is news is already saved
 */
export const isNewsSaved = ({ news: currentNews, savedNews }) => savedNews.find(
  saved =>
    saved.title === currentNews.title
    && saved.publishedAt === currentNews.publishedAt
)