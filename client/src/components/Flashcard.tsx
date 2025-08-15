import React from 'react';
import { Flashcard } from '../types/Flashcard';

interface Props {
  card: Flashcard;
}

const FlashcardComponent: React.FC<Props> = ({ card }) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <div onClick={() => setShowAnswer(!showAnswer)} className="flashcard">
      <h3>{card.question}</h3>
      {showAnswer && <p>{card.answer}</p>}
    </div>
  );
};

export default FlashcardComponent;
