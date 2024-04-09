import './App.css'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {

  return (
    <>
      <main className='container'>
        <div className='flex flex-row gap-2'>
          <Input placeholder='todo title' type='text'/>
          <Button variant="outline">Add</Button>
        </div>
      </main>
    </>
  )
}

export default App
