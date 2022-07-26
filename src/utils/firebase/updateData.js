import { firestore } from '../../firebase'
import { addDoc, setDoc, doc, collection } from 'firebase/firestore'

// ============================================================

const appContentCollectionRef = collection(firestore, 'app-content')
const eventsCollectionRef = collection(firestore, 'events')
const groupsCollectionRef = collection(firestore, 'groups')
const articlesCollectionRef = collection(firestore, 'articles')
const categoriesCollectionRef = collection(firestore, 'categories')

// ============================================================

export const updateEvents = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `events/${slug}`)
    setDoc(docRef, docData)
      .then(() => {
        alert('event updated')
      })
      .catch((err) => {
        alert('error: ' + err)
      })
  } else {
    alert('cannot update event without data and slug')
  }
}

// ============================================================

export const updateArticles = async (docData, slug) => {
  if (docData && slug) {
    const docRef = doc(firestore, `articles/${slug}`)
    setDoc(docRef, docData)
      .then(() => {
        alert('post updated')
      })
      .catch((err) => {
        alert('error: ' + err)
      })
  } else {
    alert('cannot update post without data and slug')
  }
}

// ============================================================

export const updateGroups = async (docData) => {
  if (docData) {
    const docRef = await addDoc(groupsCollectionRef, docData)
    alert('group updated')
  } else {
    alert('cannot update group without data')
  }
}

// ============================================================

export const updateCategories = async (docData) => {
  if (docData) {
    const docRef = await addDoc(categoriesCollectionRef, docData)
    alert('category updated')
    return true
  } else {
    alert('cannot update category without data')
  }
  return null
}
