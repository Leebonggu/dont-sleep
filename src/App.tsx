import { useEffect, useState } from 'react'
import { 쓴소리들 } from './const';

function getOne(데이터배열: string[]) {
  const index = Math.floor(Math.random() * 데이터배열.length);
  const target = 데이터배열[index];

  return target;
}


function App() {
  const [lang, setLang] = useState(getOne(쓴소리들))

  useEffect(() => {
    setInterval(() => {
      setLang(getOne(쓴소리들));
  }, 10000); 
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', background:'black'}}>
      <div style={{flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{ color: 'white', fontSize: '32px'}}>{lang}</h1>
      </div>
    </div>
  )
}

export default App
