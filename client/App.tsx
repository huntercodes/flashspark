import React, { useEffect, useState } from 'react';
import './App.css';
import { Flashcard } from './src/types/Flashcard';
import { fetchFlashcards } from './src/services/flashcardService';
import FlashcardComponent from './src/types/Flashcard';

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFlashcards()
      .then(data => {
        setFlashcards(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading flashcards...</p>;

  return (
    <div className="App">
      <h1>FlashSpark</h1>
      <div className="flashcard-container">
        {flashcards.map(card => (
          <FlashcardComponent key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;
