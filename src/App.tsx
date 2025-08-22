import './styles/globals.css'
import InputTodo from './Component/input';

function App() {
  let fullname = "Linh"
  let infor = {
    "age": 21,
    "address": "Th"
  }
  const funcAlert = () => {
    alert(`hello`)
  }
  return (
    <div>
      add new information
      <InputTodo fullname={fullname} infor={infor} funcAlert={funcAlert}></InputTodo>
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
