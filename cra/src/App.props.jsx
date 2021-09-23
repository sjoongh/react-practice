import React from 'react';
import PropClass from './components/PropClass';

function App() {
    const messageFromChild = (message) => {
        alert(message);
    }

    return (
        <div>
            <h2>Props in Class Component</h2>
            <PropClass prop_str="string value"
            prop_num={ 10 }
            prop_false={ false }
            prop_true
            prop_obj={{
                name: "홍길동",
                age: 28
            }} 
            prop_func={ messageFromChild }/>
        </div>
    )
}

export default App;