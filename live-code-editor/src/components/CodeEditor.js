import React , {useState}from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import {Controlled as ControlledEditor} from 'react-codemirror2';


function CodeEditor(props){
     const {language, name, value, onChange } = props
 
    const  [open, setOpen] = useState(true);

     function handleChange(editor, data, value){
         onChange(value);

     }

        return(
        <div className={`snippet .editor-container ${open ? 'expand' : ''}`}>

                    <header className='snippet-header flex justify-between align-center'>
                        <h2 className='snippet-title'>{name || 'HTML'}</h2>
                        <button  onClick={()=>setOpen(prevOpen=>!prevOpen)} >{open ? <i class="fas fa-compress-alt"></i>: <i class="fas fa-expand-alt"></i>}</button>
                    </header>

                    <ControlledEditor 
                        className='editor'
                        onBeforeChange={handleChange}
                        value={value}
                        options={{
                            line:true,
                            lineWrapping:true,
                            mode:language,
                            lineNumbers:true,
                            theme: 'material'
                        }}
                    />
                    
            </div>
        );

}


export default CodeEditor;