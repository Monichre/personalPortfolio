import * as Contentful from 'contentful'
console.log(process.env.REACT_APP_SPACE_ID)
export const getContentfulContent = async () => {
  const cms = Contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_API_KEY
  })

  return cms.getEntries().then(response => {
    const portfolioItems = response.items
      .filter(item => item.sys.contentType.sys.id === 'webProject')
      .map(item => {
        return {
          ...item.fields
        }
      })
    const aboutMe = response.items.filter(item => item.sys.contentType.sys.id === 'aboutMeContent')[0]

    return {
      portfolioItems: portfolioItems,
      aboutMe: aboutMe
    }
  })
}
