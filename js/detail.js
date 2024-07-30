const param = new URLSearchParams(window.location.search)
var id = param.get("id")

var title = document.getElementById("title");
var date = document.getElementById("date");
var overview = document.getElementById("overview");
var overlay = document.querySelector(".overlay");   

fetch(LINK_DETAIL + id + KEY).then(r => r.json())
.then((Response)=> {
    title.innerText = Response.title
    date.innerText = Response.release_date
    overview.innerText = Response.overview
    overlay.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url("${LINK_BACKGROUND + Response.backdrop_path}")`
})