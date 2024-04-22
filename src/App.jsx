
import Ui from './components/Ui'
import Todo from './components/Todo'


function App() {

  return (
    <>
    <section className="">
      <div className="md:container md:mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 *:border *:p-4 text-xs text-slate-500">
            <p><span className="font-bold">ÉPICE ENERGIE</span><br/>test technique</p>
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
