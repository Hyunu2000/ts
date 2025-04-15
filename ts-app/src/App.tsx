import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuList from './components/MenuList';
import EmployeeList from './components/EmployeeList';

function App() {
  const menus = [
    { name: "apple", emoji: "🍎", price: 100 },
    { name: "lemon", emoji: "🍋", source: "이탈리아" },
    { name: "tomato", emoji: "🍅", price: 200 },
  ]

  const menu = {
    name: "apple",
    emoji: "🍎",
    price: 100,
    source: "청송"
  };

  const employee = [
    { name: "홍길동", age: 30, department: "영업부" },
    { name: "smith", age: 20, department: "총무부", emoji: "🧑" },
    { name: "김영희", age: 35, department: "HR" },
    { name: "alex", age: 40, department: "국제사업부", emoji: "🧒" },
  ]

  return (
    <div className="App">
      <h1>Hello~ TypeScript React!!!</h1>
      <hr />
      <MenuList menus={menus}/>
      <hr />
      <EmployeeList employees={employee}/>
    </div>
  );
}

export default App; 