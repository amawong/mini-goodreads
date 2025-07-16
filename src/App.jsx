import { useState } from 'react';
import BookList from './components/BookList';
import sampleBooks
 from './data/sampleBooks';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [books, setBooks] = useState(sampleBooks);

  return (
    <div className="App">
      <h1>📚 Mini Goodreads</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
