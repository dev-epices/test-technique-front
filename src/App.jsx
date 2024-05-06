
import UiLayout from './components/layouts/UiLayout'
import { ThemeProvider } from "./components/theme-provider"
import Header from './components/Header'



function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <section className="bg-slate-100 dark:bg-black">
          <div className="md:container md:mx-auto py-10">
            <UiLayout/>
          </div>
        </section>
      <Header/>
    </ThemeProvider>

  )
}

export default App
