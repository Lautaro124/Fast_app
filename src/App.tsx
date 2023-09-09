import { useEffect, useState } from 'react'
import './App.css'
import app from './config/firebase'
import { getDatabase, ref, onValue } from 'firebase/database'
import { Freeze, FreezeType } from './interface/freeze'

function App() {
  const [freezes, setFreezes] = useState<Freeze[]>([])
  const db = getDatabase(app);
  const starRef = ref(db, 'test/')

  useEffect(() => {
    const fetchDataFromFirebase = () => {
      onValue(starRef, (snapshot) => {
        const data: FreezeType = snapshot.val();
        if (data.json) {
          setFreezes(data.json);
        }
      });
    };

    const timer = setInterval(fetchDataFromFirebase, 500);

    return () => {
      clearInterval(timer);
    };
  }, [starRef]);

  return (
    <main>
      {
        freezes.map((freeze, index) => (
          <p key={freeze.name}>
            {index + 1}.Estado: <h3>{freeze.status}</h3>
          </p>
        ))
      }
    </main>
  )
}

export default App
