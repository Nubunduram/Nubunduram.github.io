import './App.css';
import Top from './Components/Top';
import Mid2 from './Components/Mid2';
import Bot2 from './Components/Bot2';

function App2( { pageNum, updatePageNum } ) {

  return (
      <div className="my-20">
        <Top pageTitle="Payment Methods" pageName="Payment" updatePageNum={updatePageNum}/>
        <Mid2 />
        <Bot2 pageNum={pageNum} updatePageNum={updatePageNum} />
      </div>
  );
}

export default App2;