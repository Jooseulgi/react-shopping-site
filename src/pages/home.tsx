import { useState, useEffect } from 'react';
import { db } from '../util/firebase';
import { collection, getDocs } from 'firebase/firestore';
const Home = () => {
  // 이따가 users 추가하고 삭제하는거 진행을 도와줄 state
  const [users, setUsers] = useState([]);
  // db의 users 컬렉션을 가져옴
  const usersCollectionRef = collection(db, 'users');

  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      console.log(data);
    };

    getUsers();
  }, []);
  return <div>Home</div>;
};

export default Home;
