
import Ui from './components/Ui'
import UiLayout from './components/layouts/UiLayout'
import Todo from './components/Todo'
import { AiOutlineMail } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";

import { AiFillGithub } from "react-icons/ai";
import { ThemeProvider } from "./components/theme-provider"
import { ModeToggle } from './components/mode-toggle';
import Header from './components/Header'



function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className=' bg-[rgb(226 232 240)]'>
        <section // contain all Ui stuffs
          className="bg-slate-100 dark:bg-black">
          <div className="md:container md:mx-auto py-10">
            <UiLayout/>
            <Ui/>
          </div>
        </section>
      </div>
      <Header/>
    </ThemeProvider>

  )
}

export default App
