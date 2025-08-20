import style from'./style.module.css'
import Test from './Test'
import logo from "/vite.svg"
import { Title } from './components'
import Bootstrap from './Bootstrap'
import Tailwind from './Tailwind'

function App() {
console.log(style)
  return (
    <>
    <Tailwind/>
    {/* <div className={style.App}>
    <Title>{process.env.NODE_ENV}</Title>
    <Title theme="dark">Test</Title>
    <h3>{import.meta.env.VITE_API_URL}</h3>
<img src={logo} alt="" />
<Test/>
    </div>
<Bootstrap/> */}
    </>
  )
}

export default App
