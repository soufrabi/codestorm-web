import React from 'react';
import CodeMirror from '@uiw/react-codemirror'
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { cpp, cppLanguage } from '@codemirror/lang-cpp';
import { python, pythonLanguage } from '@codemirror/lang-python'


const CodeEditor = () => {

    const [value, setValue] = React.useState("");
    const onChange = React.useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setValue(val);
    }, []);


    return (
        <>
            <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
            {/* <CodeMirror value={value} height="200px" extensions={[cpp({})]} onChange={onChange} /> */}


        </>

    )
}

export default CodeEditor
