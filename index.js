function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}
