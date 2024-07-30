var populer = document.getElementById("film-populer")

// fetch popular data
fetch(LINK_POPULAR).then(r => r.json())
.then((Response)=> {
    var hasil = Response.results
    hasil.map(film => {
        populer.innerHTML += `
        <div class="card">
            <img src="${LINK_GAMBAR + film.poster_path}" alt="">
        </div>`
    })
})
// end
