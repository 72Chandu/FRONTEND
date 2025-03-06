import { useRef } from 'react'
import Card from './components/Card'
function App() {
  const name=useRef(null);
  const age=useRef(null);
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(name.current.value,age.current.value);
  }
  return (
    <form action="" onSubmit={handelSubmit}>
      <input ref={name} type="text" placeholder='name' />
      <input ref={age} type="text" placeholder='age' />
      <input type="submit" />
    </form>
  )
}
export default App