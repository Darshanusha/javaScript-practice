$form = $('#form');

$form.submit(e=>e.preventDefault());

$searchBox = $("#searchBox");
$searchButton = $("#searchButton");
$maxResults = 10;
$resultSongList = $("#songList");

$searchButton.on("click",display);

function display(){
    console.log($searchBox.val());
    $search = $searchBox.val();
    var url = `https://itunes.apple.com/search?term=${$search}&limit=${$maxResults}`;
    fetch(url)
    .then((e) => e.json())
    .then((data)=>buildSongs(data.results))
    .catch("ERROR!!");
}

function buildSongs(songList){
    var retVal='';
    console.log(songList);
    songList.forEach(song => {
        retVal+=`<li>${song.artistName} - ${song.collectionCensoredName} &nbsp&nbsp <img width = 50 height = 50 src = "${song.artworkUrl100}" /> </li>`
    });
    $resultSongList.html(retVal);
}