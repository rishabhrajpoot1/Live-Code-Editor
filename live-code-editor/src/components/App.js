import React, {useState, useEffect} from 'react';

import CodeEditor from './CodeEditor';
import useLocalStorage from '../hooks/useLocalStorage';

function App (){
        const [html, setHtml] = useLocalStorage('html');
        const [css, setCss] =  useLocalStorage('css');
        const [javascript, setJavascript] = useLocalStorage('javacsript');
        const [srcDoc, setSrcDoc] = useState('');


        useEffect(()=>{
            const timeout =setTimeout(()=>{

                setSrcDoc(
                    `
          <html>
          <head>
          <style>
          ${css}
          </style>
          </head>
          <body>
            ${html}
          <script> 
          ${javascript}
          </script
          </body>
          </html>
        `
                );
            }, 500)

            return ()=>clearTimeout(timeout)
        }, [html, css, javascript])
    
      

        return(<>
            <div className='input flex'>
             <CodeEditor language='xml' name='HTML' value={html} onChange={setHtml}/>
             <CodeEditor language='css' name='CSS' value={css} onChange={setCss}/>
             <CodeEditor language='javacsript' name='JS' value={javascript} onChange={setJavascript}/>
            </div>
            <div className='output'>
                <iframe 
                srcDoc={srcDoc}
                 title='output'
                 frameBorder='0'
                 width='100%'
                 sandbox='allow-scripts'
                />
            </div>
        </>);
}


export default App;