import express from 'express';

const router = express.Router();

interface Flashcard {
  id: number;
  front: string;
  back: string;
}

let flashcards: Flashcard[] = [
  { id: 1, front: "What is TypeScript?", back: "A typed superset of JavaScript" },
  { id: 2, front: "What is React?", back: "A UI library for building interfaces" }
];

router.get('/', (req, res) => {
  res.json(flashcards);
});

router.post('/', (req, res) => {
  const { front, back } = req.body;
  const newCard: Flashcard = {
    id: flashcards.length + 1,
    front,
    back
  };
  flashcards.push(newCard);
  res.status(201).json(newCard);
});

export default router;
