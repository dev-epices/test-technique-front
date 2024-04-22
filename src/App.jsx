
import Ui from './components/Ui'
import Todo from './components/Todo'
import { AiOutlineMail } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

import { AiFillGithub } from "react-icons/ai";


function App() {

  return (
    <>
    <section className="">
      <div className="md:container md:mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 *:border *:p-4 text-xs text-slate-500">
            <div>
            <p className='mb-2'><span className="font-bold">ÉPICE ENERGIE</span><br/>test technique</p>
            <p className='font-bold'>Florent Vincerot</p>
            <ul className='flex flex-col *:flex *:flex-row'>
              <li className=' space-x-1'><AiOutlineMail /><a href='mailto:florent.vincerot@me.com'><span className='texte-lime-700 hover:underline'> florent.vincerot@me.com</span></a></li>
              <li className=' space-x-1'><RxAvatar /><a href='https://flo-gilt.vercel.app'><span className='texte-lime-700 hover:underline'> web</span></a></li>
              <li className=' space-x-1'><AiFillGithub /><a href='https://github.com/MrTuttle'><span className='texte-lime-700 hover:underline'> github</span></a></li>
            </ul>
            </div>
              <Todo/>
          </div>
        </div>
      </section>

      <section // contain all Ui stuffs
      className="bg-slate-200">
        <div className="md:container md:mx-auto py-10">
            <Ui/>
          </div>
      </section>
    </>
  )
}

export default App
