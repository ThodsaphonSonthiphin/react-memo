import React, {memo, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const ChildComponent: React.FC<{ count: number }> = ({ count }) => {
  console.log("Child component re-rendered");
  return <p>Child Count: {count}</p>;
};

// Memoizing the child component using React.memo
const MemoizedChild = memo(ChildComponent);

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [parentCount, setParentCount] = useState<number>(0);

  const incrementParentCount = () => {
    setParentCount((prevCount:number) => prevCount + 1);
  };

  const incrementChildCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
      <div style={{ padding: "20px" }}>
        <h1>React.memo Example</h1>
        <button onClick={incrementParentCount}>
          Increment Parent Count (Parent Component)
        </button>
        <p>Parent Count: {parentCount}</p>

        {/* Memoized Child Component */}
        <MemoizedChild count={count} />

        <button onClick={incrementChildCount}>
          Increment Child Count (Memoized Child Component)
        </button>
      </div>
  );
};

function App() {
  return (
    <div className="App">
        <h1>
            child is not rendered when change value of parent, we use memo, use console to checking log
        </h1>

      <ParentComponent/>
    </div>
  );
}

export default App;
