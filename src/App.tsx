import './App.scss'

import Accordion from './components/Accordion'

function App() {

  return (
    <div className='app-wrapper'>
      <h1>Frequently Asked Questions</h1>
      <p className='intro-text'>Answers to common questions about<br></br> our frontend challenges</p>
      <Accordion />
    </div>
  )
}

export default App
