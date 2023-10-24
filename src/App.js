import './App.css';

import { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

// Import react ui css
import '@aws-amplify/ui-react/styles.css';

// Import FileUploader from amplify ui react
import { FileUploader } from '@aws-amplify/ui-react';

// Import Storage from Amplify
import { Storage } from 'aws-amplify';

function App() {

  const [files, setFiles] = useState([]);

  // A function named formatBytes that takes a number as a parameter and returns a string with the number rounded to two decimal places and a unit of measurement.

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  // A function to list all the files from Amazon S3. Put the result in the files variable
  async function listFiles() {
    const result = await Storage.list('');
    // For each result.results, create a new property that calls getSignedUrl and assign the result to the new property called signedUrl
    for (let i = 0; i < result.results.length; i++) {
      result.results[i].signedUrl = await getSignedUrl(result.results[i].key);
    }
    setFiles(result.results);
  }

  // A function to delete a file from amazon S3 using Amplify Storage
  async function deleteFile(key) {
    await Storage.remove(key);
    listFiles();
  }

  // A function that returns a signed url for a file from amazon S3 using Amplify Storage
  async function getSignedUrl(key) {
    return await Storage.get(key);
  }

  useEffect(() => {
    listFiles();
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
              {/* A FileUploader component with acceptedFileTypes of images type only to upload a file on Amazon S3 with accessLevel public and then call listFiles function onSuccess */}
              <FileUploader acceptedFileTypes={['image/*']}
                accessLevel="public"
                onSuccess={() => listFiles()}
                />
              <div className="list">
                {files.map(item => {
                  return <div className="polaroid" key={item.key}>
                    <img src={item.signedUrl} />
                    <div className="container">
                      <div>
                        <div>{item.key}</div>
                        <div>{formatBytes(item.size)}</div>
                      </div>
                      {/* A button that calls deleteFile with the item.key as the argument */}
                      <button onClick={() => deleteFile(item.key)}>Delete</button>
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
