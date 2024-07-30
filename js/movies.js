var input_filter = document.getElementById("filter");
var button_filter = document.getElementById("button-filter");



// fetch kategori data
function getKategori(id) {
    fetch(LINK_KATEGORI).then(r => r.json())
    .then((response)=> {
        var genres = response.genres;
        genres.map(genre => {
            input_filter.innerHTML += `<option value="${genre.id}">${genre.name}</option>`
        })
    })
}

var movies = document.getElementById("movies");
// fetch content by kategori
function getContentKategori(id) {
    fetch(LINK_CONTENT + id).then(r => r.json())
    .then((response)=> {
        var results = response.results;
        results.map(result => {
            movies.innerHTML += `<a href="detail.html?id=${result.id}"><img src="${LINK_GAMBAR + result.poster_path}"/></a>`
        })
    })
}

function tampilkanFilter(){
    var value_filter = input_filter.value
    movies.innerHTML = ''
    getContentKategori(value_filter)
}


button_filter.addEventListener("click", tampilkanFilter);

getKategori()
getContentKategori("28")
