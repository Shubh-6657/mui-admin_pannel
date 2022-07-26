import { firestore } from '../../firebase'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { async } from '@firebase/util'

// ============================================================

const appContentCollectionRef = collection(firestore, 'app-content')
const eventsCollectionRef = collection(firestore, 'events')
const groupsCollectionRef = collection(firestore, 'groups')
const articlesCollectionRef = collection(firestore, 'articles')
const categoriesCollectionRef = collection(firestore, 'categories')

// ========================= Home Page =========================

export const fetchHomePageEvents = async () => {
  try {
    const docRef = doc(firestore, 'app-content/events-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let events = data.events
      return events.sort(() => Math.random() - 0.5)
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

export const fetchHomePageArticles = async () => {
  try {
    const docRef = doc(firestore, 'app-content/home-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let articles = data.articles
      return articles.sort(() => Math.random() - 0.5)
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

export const fetchHomePageGroups = async () => {
  return null
}

// ========================= News Page =========================

export const fetchArticleBySlug = async (slug) => {
  if (slug) {
    try {
      const docRef = doc(firestore, `articles/${slug}`)
      const docSnapshot = await getDoc(docRef)
      if (docSnapshot.exists()) {
        const data = docSnapshot.data()
        console.log('article data', data)
        return data
      }
    } catch (err) {
      console.log(err)
    }
  }
  return null
}

// ========================= Events Page =========================

export const fetchEventsPageEvents = async () => {
  try {
    const docRef = doc(firestore, 'app-content/events-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let events = data.events
      if (events) events.sort(() => Math.random() - 0.5)
      return events
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

export const fetchEventBySlug = async (slug) => {
  if (slug) {
    try {
      const docRef = doc(firestore, `events/${slug}`)
      const docSnapshot = await getDoc(docRef)
      if (docSnapshot.exists()) {
        const data = docSnapshot.data()
        return data
      }
    } catch (err) {
      console.log(err)
    }
  }
  return null
}
// ========================= Categories Page =========================

export const fetchTrendingBarCategories = async () => {
  try {
    const docRef = doc(firestore, 'app-content/trending-bar-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let categories = data.categories
      if (categories) categories.sort(() => Math.random() - 0.5)
      return categories
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

// ========================= Categories Page =========================

export const fetchGroupsPageGroups = async () => {
  try {
    const docRef = doc(firestore, 'app-content/groups-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let groups = data.groups
      if (groups) groups.sort(() => Math.random() - 0.5)
      return groups
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

// ========================= Sidebar =========================

export const fetchSidebarArticles = async () => {
  try {
    const docRef = doc(firestore, 'app-content/home-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let articles = data.articles
      if (articles) articles.sort(() => Math.random() - 0.5)
      return articles
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

export const fetchSidebarGroups = async () => {
  try {
    const docRef = doc(firestore, 'app-content/groups-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let groups = data.groups
      if (groups) groups.sort(() => Math.random() - 0.5)
      return groups
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

// ========================= Articles Page =========================

export const fetchNewsPageArticles = async () => {
  try {
    const docRef = doc(firestore, 'app-content/news-page-items')
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let articles = data.articles
      if (articles) articles.sort(() => Math.random() - 0.5)
      return articles
    }
  } catch (err) {
    console.log(err)
  }
  return null
}

// testing

const fetchDocDataByPath = async (path) => {
  try {
    const docRef = doc(firestore, path)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      const data = docSnapshot.data()
      let items = data.articles
      if (items) items.sort(() => Math.random() - 0.5)
      return items
    }
  } catch (err) {
    console.log(err)
  }
  return null
}
