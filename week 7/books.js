export async function fetchBooks() {
  const response = await fetch('./books.json');
  if (!response.ok) throw new Error("Failed to load books data");
  return await response.json();
}

