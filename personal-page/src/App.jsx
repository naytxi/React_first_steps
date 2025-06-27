import { useState } from 'react'
import Person from './components/Person/Person.jsx'
import PersonClass from './components/Person/Person.jsx'
import Home from './components/PersonalPage/Home.jsx'
import Header from './components/PersonalPage/Header.jsx' 
import './App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div>
        <Person name="John" surname="Doe" age={30} />
        <Person name="Jane" surname="Smith" age={25} />
        <Person name="Alice" surname="Johnson" age={28} />
        <Person name="Bob" surname="Brown" age={35} />
      </div>

      <div>
        <PersonClass name="Charlie" surname="Davis" age={40} />
        <PersonClass name="Eve" surname="Wilson" age={22} />
        <PersonClass name="Frank" surname="Garcia" age={34} />
      </div>

      <div>
        <Header />
      </div>

      <div>
        <Home 
          name="Nay" 
          surname="Ot" 
          age={25} 
          about="I am a software developer." 
          skills="JavaScript, React, Node.js" 
          jobs="Software Engineer at XYZ Corp" 
        />
      </div>
    </>
  );
}

export default App
