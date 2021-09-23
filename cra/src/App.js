import logo from './logo.svg';
import './App.css';
import Item from './components/Item';

// 다수의 컴포넌트 렌더링
const items = [
  { id: 1, name: "Notebook", checked: true },
  { id: 2, name: "Smartphone", checked: false },
  { id: 3, name: "Tablet", checked: true },
  { id: 4 },
]
// Id를 key로 사용(basic)
// 함수 바깥쪽에서 const renderItem전역 선언
const renderItem = item => <Item key={item.id}
name={item.name}
checked={item.checked} />

function App() {
  return (
    <div className="App">
      { items.map(renderItem)}
      {/* 함수 안쪽에서 만듬(비추) */}
      {/* { items.map(item => (
        <Item key={ item.id } name={ item.name } checked={ item.checked} />
        ))} */}
      {/* <Item name="Notebook" checked={true}></Item>
      <Item name="Smarphone" checked={false}></Item>
      // { checked={true}와 같음 }
      <Item name="Tablet" checked></Item>
      // { checked={false}와 같음 }
      <Item name="Monitor"></Item> */}
    </div>
  )
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          첫번째 리액트 앱입니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
