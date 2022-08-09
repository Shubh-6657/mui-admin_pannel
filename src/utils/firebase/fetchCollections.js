import { firestore } from '../../firebase'
import { collection, doc, getDocs, setDoc } from 'firebase/firestore'

const appContentCollectionRef = collection(firestore, 'app-content')
const eventsCollectionRef = collection(firestore, 'events')
const groupsCollectionRef = collection(firestore, 'groups')
const articlesCollectionRef = collection(firestore, 'articles')
const categoriesCollectionRef = collection(firestore, 'categories')

const setHomePageItems = async (articles) => {
  const itemsDocRef = doc(firestore, 'app-content/home-page-items')
  let processedArticles = articles.slice(0, 20)
  console.log('processed articles ', processedArticles)
  let finalDocData = {
    events: [1, 2, 3],
    articles: processedArticles
  }
  // use merge if you want to update a field without replacing the whole document
  setDoc(itemsDocRef, finalDocData)
    .then(() => {
      console.log('home-page-items set or updated')
    })
    .catch((err) => {
      console.log(err)
    })
}

const setEventsPageItems = async (events) => {
  const itemsDocRef = doc(firestore, 'app-content/events-page-items')
  let newEvents = events.slice(0, 20)
  let finalDocData = {
    events: newEvents
  }
  setDoc(itemsDocRef, finalDocData)
    .then(() => {
      console.log('events-page-items set or updated')
    })
    .catch((err) => {
      console.log(err)
    })
}

const setNewsPageItems = async (articles) => {
  const itemsDocRef = doc(firestore, 'app-content/news-page-items')
  let processedArticles = articles.slice(0, 20)
  let finalDocData = {
    articles: processedArticles
  }
  setDoc(itemsDocRef, finalDocData)
    .then(() => {
      console.log('news-page-items set or updated')
    })
    .catch((err) => {
      console.log(err)
    })
}

export const setGroupsPageItems = async (groups) => {
  const itemsDocRef = doc(firestore, 'app-content/groups-page-items')
  let processedItems = groups.slice(0, 20)
  let finalDocData = {
    groups: processedItems
  }
  setDoc(itemsDocRef, finalDocData)
    .then(() => {
      console.log('groups-page-items set or updated')
    })
    .catch((err) => {
      console.log(err)
    })
}

const setTrendingBarItems = async (categories) => {
  const itemsDocRef = doc(firestore, 'app-content/trending-bar-items')
  let processedCategories = categories.slice(0, 20)
  let finalDocData = {
    categories: processedCategories
  }
  setDoc(itemsDocRef, finalDocData)
    .then(() => {
      console.log('trending-bar-items set or updated')
    })
    .catch((err) => {
      console.log(err)
    })
}

// ========================= Home Page =========================

export const fetchHomePageEvents = async () => {
  const querySnapshot = await getDocs(eventsCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchHomePageArticles = async () => {
  const querySnapshot = await getDocs(articlesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  // console.log('home page articles -> ', newItems)
  setHomePageItems(newItems)
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchHomePageGroups = async () => {
  return null
}

// ========================= Events Page =========================

export const fetchEventsPageEvents = async () => {
  const querySnapshot = await getDocs(eventsCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  setEventsPageItems(newItems)
  return newItems.sort(() => Math.random() - 0.5)
}

// ========================= Categories Page =========================

export const fetchTrendingBarCategories = async () => {
  const querySnapshot = await getDocs(categoriesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug ? docData.slug : null,
      title: docData.title,
      coverImage: docData.coverImageUrl
    })
  })
  // setTrendingBarItems(newItems)
  return newItems.sort(() => Math.random() - 0.5)
}

// ========================= Sidebar =========================

export const fetchSidebarArticles = async () => {
  const querySnapshot = await getDocs(articlesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  return newItems.sort(() => Math.random() - 0.5)
}

export const fetchSidebarGroups = async () => {
  return null
}

// ========================= Articles Page =========================

export const fetchNewsPageArticles = async () => {
  const querySnapshot = await getDocs(articlesCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  // setNewsPageItems(newItems)
  return newItems.sort(() => Math.random() - 0.5)
}

// ========================= Groups Page =========================

export const fetchGroupsPageGroups = async () => {
  const querySnapshot = await getDocs(groupsCollectionRef)
  const newItems = []
  querySnapshot.forEach((doc) => {
    const docData = doc.data()
    newItems.push({
      slug: docData.slug,
      title: docData.title,
      overview: docData.body,
      coverImage: docData.coverImageUrl
    })
  })
  // setNewsPageItems(newItems)
  return newItems.sort(() => Math.random() - 0.5)
}
