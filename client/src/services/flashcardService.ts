import { Flashcard } from '../types/Flashcard';

export async function fetchFlashcards(): Promise<Flashcard[]> {
  const response = await fetch('http://localhost:5000/api/flashcards');
  if (!response.ok) {
    throw new Error('Failed to fetch flashcards');
  }
  return response.json();
}
