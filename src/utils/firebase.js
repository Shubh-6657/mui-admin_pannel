import { initializeApp, auth, db } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCTCcLaPqXhbmbSYIy58xafcpplYwaXBbU',
  authDomain: 'mui-dashboard.firebaseapp.com',
  projectId: 'mui-dashboard',
  storageBucket: 'mui-dashboard.appspot.com',
  messagingSenderId: '816128581376',
  appId: '1:816128581376:web:f577074ab635c9ae92dde5'
}

const app = initializeApp(firebaseConfig)
export const auth = auth()
export const db = firestore()

export default app
