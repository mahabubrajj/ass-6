const searchBook = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = "";

    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    // console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then(data => displaySearchResult(data.docs.slice(0,12)));
  };
  
  //javascript
  
  const displaySearchResult = (books) => {
    // console.log(books[1].title);
    const searchResult = document.getElementById("search-result");
   books.forEach(book =>{
    console.log(book);
    const div = document.createElement('div');
    div.classList.add("col");
    div.innerHTML = `
      <div class="card">
          <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Author Name: ${book.author_name[0]}</h5>
            <p class="card-text"><span class="fw-bold">Publish Year: </span> ${book.first_publish_year}</p>
            <p class="card-text"><span class="fw-bold">Publisher: </span>${book.publisher}</p>
          </div>
      </div>`;
      searchResult.appendChild(div);

   })
  }
