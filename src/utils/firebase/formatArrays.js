import {
  getSlug,
  getTitle,
  getAuthor,
  getOverview,
  getCoverImage,
  getProfileBio,
  getProfileImage
} from './attributes'

export const formatCategories = (categories) => {
  let tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ]
  if (categories && categories.map) {
    const newArray = categories.map((item) => {
      let randomTempTags = Array.from(tempTags).sort(() => Math.random() - 0.5)
      randomTempTags.splice(2)
      const docData = item.data()
      return {
        id: item.id,
        title: docData.title,
        coverImage: docData.coverImageUrl,
        slug: getSlug(docData),
        tags: randomTempTags
      }
    })
    if (newArray) return newArray
  }
  return null
}

export const formatArticles = (articles) => {
  let tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ]
  if (articles && articles.map) {
    const newArray = articles.map((item) => {
      let randomTempTags = Array.from(tempTags).sort(() => Math.random() - 0.5)
      randomTempTags.splice(2)
      return {
        id: item.id,
        title: getTitle(item),
        coverImage: getCoverImage(item),
        overview: getOverview(item),
        slug: getSlug(item),
        tags: randomTempTags
      }
    })
    if (newArray) return newArray
  }
  return null
}

export const formatEvents = (events) => {
  let tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ]
  if (events && events.map) {
    const newArray = events.map((item) => {
      let randomTempTags = Array.from(tempTags).sort(() => Math.random() - 0.5)
      randomTempTags.splice(2)
      return {
        id: item.id,
        title: getTitle(item),
        coverImage: getCoverImage(item),
        overview: getOverview(item),
        slug: getSlug(item),
        tags: randomTempTags
      }
    })
    if (newArray) return newArray
  }
  return null
}

export const formatProfiles = (profiles) => {
  let tempTags = [
    'Valorant',
    'Apex Legends',
    'Twitch',
    'YouTube',
    'Overwatch',
    'MMO',
    'Fifa',
    'Sandbox',
    'Indie',
    'Tournament',
    'Guide',
    'Rocket League',
    'Sea of Thieves',
    'Minecraft',
    'Dota',
    'Rust',
    'GTA',
    'V Rising',
    'Vanguard',
    'Cyberpunk',
    'Skyrim',
    'Announcement',
    'Cosplay'
  ]
  if (profiles && profiles.map) {
    const newArray = profiles.map((item) => {
      let randomTempTags = Array.from(tempTags).sort(() => Math.random() - 0.5)
      randomTempTags.splice(2)
      return {
        id: item.id,
        title: getTitle(item),
        profileImage: getProfileImage(item),
        bio: getProfileBio(item),
        slug: getSlug(item),
        tags: randomTempTags
      }
    })
    if (newArray) return newArray
  }
  return null
}
