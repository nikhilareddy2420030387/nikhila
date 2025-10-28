import { fetchBooks } from './books.js';
import { renderBooks, setupAddToCartListeners, renderCart } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const books = await fetchBooks();
    renderBooks(books);
    setupAddToCartListeners(books);
    renderCart();
  } catch (error) {
    console.error('Error loading books:', error);
  }
});
