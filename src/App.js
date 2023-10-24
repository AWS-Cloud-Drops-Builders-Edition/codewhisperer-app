import './App.css';

import { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

function App() {

  const [files, setFiles] = useState([]);


  useEffect(() => {
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <nav>
            <h1>My Awesome Image Gallery</h1>
          </nav>
          <main>
            <div>
              <div className="list">
                {files.map(item => {
                  return <div className="polaroid" key={item.key}>
                    <img src={item.signedUrl} />
                    <div className="container">
                      <div>
                        <div>{item.key}</div>
                        <div>{item.size}</div>
                      </div>
                    </div>
                  </div>
                })}
              </div>
            </div>
          </main>
        </div>
      )}
    </Authenticator>

  );
}

export default App;