import MainPage from './pages/MainPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {

  return (
    <>
      <div className='w-full h-screen flex items-center justify-center bg-slate-200 dark:bg-[#2b2b2b]'>
        <MainPage />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
