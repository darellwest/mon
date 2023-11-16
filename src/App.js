import { Children, useEffect, useState } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => setMonsters(m => users))
  }, []);

  function handleChange(e){
    setSearchField(s => e.target.value);
  }

  const filteredMosters = monsters.filter(
    monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='search monsters'
        handleChange={handleChange}
      />
      <CardList monsters={filteredMosters} />
    </div>
  );
}

export default App;
