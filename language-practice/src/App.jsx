import { useState } from 'react'
import './App.css'
import Response from './response'

function App() {
  const [textNative, setTextNative] = useState(["The customer is very important, the customer will be followed by the customer. It's a very important part of the game, it's done by advertising or, in a different way.", "In the weekend, there is no noise, but there is a lot of grief. There is a lake, but the course should be soft, the policy element before.", "He needs a home unless the cookbook is made up. Even if the country wants to be flattered by the borders, that's great. Each of the ullamcorper ultracis. Duis congue dolor lake, let it be a lot of dignissim fear of the members.", "Yes, and it takes a lot. Diseases of life members are important. It's soft now that anyone is made of trucks. Duis is not a pure gate; It was not easy for the family. But always unless. For the pillow of the earth. But that was neither.", "Feugiat's vestibulum, however, is flattering and flattering."])
  const [textTarget, setTextTarget] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet diam fringilla, efficitur augue vel, varius sapien.", "In volutpat nulla et tortor tincidunt, at luctus lorem luctus. Vestibulum lacus est, cursus sed mollis sit amet, lobortis elementum ante.", "Duis eget nisi vitae tellus efficitur rutrum. Donec vel tellus egestas velit blandit finibus at id magna. Quisque ullamcorper ultrices lacus. Duis congue dolor lacus, sit amet dignissim metus sodales sed.", "Etiam et suscipit magna. Morbi vitae sodales magna. Praesent mollis nunc quis ex aliquet efficitur. Duis non purus porta, iaculis ante ornare, faucibus magna. Duis non facilisis lectus. Aliquam sed semper nisi. Nam ac pulvinar tellus. Sed id erat neque.", "Vestibulum feugiat sed ligula ac blandit."])
  const indecies = [0,1,2,3,4]// have this match size of those things

  return (
    <div className='body'>
      <ul className='vertical'>
        <li>
              <ul>
                  <li className="horizontal"><h1>Native Language</h1></li>
                  <li className="spacer5"></li>
                  <li className="horizontal"><h1>Target Language</h1></li>
              </ul>
        </li>

        {indecies.map(index => <Response textNative={textNative[index]} textTarget={textTarget[index]}/>)}
      </ul>
    </div>
  )
}

export default App