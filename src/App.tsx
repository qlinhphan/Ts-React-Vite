import './styles/globals.scss'
import InputTodo from './Component/input';
import { useEffect, useState } from 'react';

function App() {

  const [infor, setInfor] = useState([
    { fullname: "linh", age: 21 },
    { fullname: "linhs", age: 19 },
    { fullname: "linhk", age: 77 }
  ])

  const funcAlert = () => {
    alert(`hello`)
  }

  const createUser = (fullname: string, age: number) => {
    let newUser = { fullname, age }
    setInfor([newUser, ...infor])
  }

  const deleteUser = (age: number) => {
    setInfor(infor.filter((inf) => inf.age != age))
  }

  return (
    <div>
      add new information
      <InputTodo infor={infor} funcAlert={funcAlert} createUser={createUser} deleteUser={deleteUser}></InputTodo>
    </div>
  );
}

export default App;


// old return function
{/* <main className="flex flex-col items-center justify-center h-screen">
      <Test></Test>
      <div className="flex flex-col items-center gap-y-4">
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl">+</span>
          <img src={'/vite.svg'} alt="Vite Logo" className="w-32" />
        </div>
        <a href="https://ui.shadcn.com" rel="noopener noreferrer nofollow" target="_blank">
        </a>
      </div>
    </main> */}
