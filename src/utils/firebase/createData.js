import { firestore } from '../../firebase'
import { addDoc, setDoc, doc, collection } from 'firebase/firestore'

// ============================================================

const eventsCollectionRef = collection(firestore, 'events')
const groupsCollectionRef = collection(firestore, 'groups')
const articlesCollectionRef = collection(firestore, 'articles')
const categoriesCollectionRef = collection(firestore, 'categories')

// ============================================================

export const createEvent = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `events/${slug}`)
    setDoc(docRef, docData)
      .then(() => {
        alert('event created')
      })
      .catch((err) => {
        alert('error: ' + err)
      })
  } else {
    alert('cannot create event without data and slug')
  }
}

// ============================================================

export const createArticle = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `articles/${slug}`)
    setDoc(docRef, docData)
      .then(() => {
        alert('post created')
      })
      .catch((err) => {
        alert('error: ' + err)
      })
  } else {
    alert('cannot create post without data and slug')
  }
}

// ============================================================

export const createGroup = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `groups/${slug}`)
    setDoc(docRef, docData)
      .then(() => {
        alert('group created')
      })
      .catch((err) => {
        alert('error: ' + err)
      })
  } else {
    alert('cannot create group without data and slug')
  }
}

// ============================================================

export const createCategory = async (docData) => {
  if (docData) {
    const docRef = await addDoc(categoriesCollectionRef, docData)
    alert('category created')
    return true
  } else {
    alert('cannot create category without data')
  }
  return null
}
