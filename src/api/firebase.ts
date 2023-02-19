import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch(console.error);
}

export async function logout() {
  return signOut(auth).then(() => null);
}

export function onUserStateChange(callback: {
  (user: User): void;
  (arg0: User | null): void;
}) {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

async function adminUser(user: User) {
  //사용자가 어드민 권한을 가지고 있는지 확인 -> true/false
  return get(ref(database, 'admins')) //
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        // console.log(admins);
        const isAdmin = admins.includes(user.uid);
        console.log(user);
        return { ...user, isAdmin };
      }
      return user;
    });
}
