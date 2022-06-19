// API Key: 094c84db597deb498f8d90a2474513fe
// https://api.themoviedb.org/3/movie/550?api_key=094c84db597deb498f8d90a2474513fe

// var cards = document.querySelector("#now");
var movieInfo = document.querySelector("#movie-info-part");

function render_page(movie_data) {
    console.log(movie_data.results[0]);

    var col = document.createElement("div");
    col.classList.add("column", "is-two-thirds", "has-background-primary"); 

    movieInfo.appendChild(col);

    var info = document.createElement("section");
    info.classList.add("section");
    info.setAttribute("id", "info");

    col.appendChild(info);

    var primaryInfo = document.createElement("section");
    primaryInfo.classList.add("section", "content", "py-2", "pb-2");
    primaryInfo.setAttribute("id", "primary_info");

    info.appendChild(primaryInfo);

    // movie title
    var movieTitle = document.createElement("h2");
    movieTitle.classList.add("title");
    movieTitle.setAttribute("id", "movie_title");
    movieTitle.textContent = movie_data.results[0].title;

    primaryInfo.appendChild(movieTitle);

    // genre country year language movie length rating
    var nestCols = document.createElement("div");
    nestCols.classList.add("columns");

    primaryInfo.appendChild(nestCols);

    var nestCol = document.createElement("div");
    nestCol.classList.add("column");

    nestCols.appendChild(nestCol);

    var level = document.createElement("nav");
    level.classList.add("level");

    nestCol.appendChild(level);

    var levelItem = document.createElement("div");
    levelItem.classList.add("level-item", "has-text-centered", "is-flex", "is-justify-content-space-around");
    
    level.appendChild(levelItem);

    var div_1 = document.createElement("div");

    levelItem.appendChild(div_1);

    var heading_1 = document.createElement("p");
    heading_1.classList.add("heading");
    heading_1.textContent = "Genre";

    div_1.appendChild(heading_1);

    var subtitle_1 = document.createElement("p");
    subtitle_1.classList.add("subtitle");
    subtitle_1.textContent = movie_data.results[0].genres;

    div_1.appendChild(subtitle_1);

    var div_2 = document.createElement("div");

    levelItem.appendChild(div_2);

    var heading_2 = document.createElement("p");
    heading_2.classList.add("heading");
    heading_2.textContent = "Country";

    div_2.appendChild(heading_2);

    var subtitle_2 = document.createElement("p");
    subtitle_2.classList.add("subtitle");
    subtitle_2.textContent = movie_data.results[0].countries;

    div_2.appendChild(subtitle_2);

    var div_3 = document.createElement("div");

    levelItem.appendChild(div_3);

    var heading_3 = document.createElement("p");
    heading_3.classList.add("heading");
    heading_3.textContent = "Year";

    div_3.appendChild(heading_3);

    var subtitle_3 = document.createElement("p");
    subtitle_3.classList.add("subtitle");
    subtitle_3.textContent = movie_data.results[0].year;

    div_3.appendChild(subtitle_3);

    var div_4 = document.createElement("div");

    levelItem.appendChild(div_4);

    var heading_4 = document.createElement("p");
    heading_4.classList.add("heading");
    heading_4.textContent = "Language";

    div_4.appendChild(heading_4);

    var subtitle_4 = document.createElement("p");
    subtitle_4.classList.add("subtitle");
    subtitle_4.textContent = movie_data.results[0].originalLanguage;

    div_4.appendChild(subtitle_4);

    var div_5 = document.createElement("div");

    levelItem.appendChild(div_5);

    var heading_5 = document.createElement("p");
    heading_5.classList.add("heading");
    heading_5.textContent = "Movie Length";

    div_5.appendChild(heading_5);

    var subtitle_5 = document.createElement("p");
    subtitle_5.classList.add("subtitle");
    subtitle_5.textContent = movie_data.results[0].runtime;

    div_5.appendChild(subtitle_5);

    var div_6 = document.createElement("div");

    levelItem.appendChild(div_6);

    var heading_6 = document.createElement("p");
    heading_6.classList.add("heading");
    heading_6.textContent = "Rating";

    div_6.appendChild(heading_6);

    var subtitle_6 = document.createElement("p");
    subtitle_6.classList.add("subtitle");
    subtitle_6.textContent = movie_data.results[0].imdbRating;

    div_6.appendChild(subtitle_6);

    var newCols = document.createElement("div");
    newCols.classList.add("columns");
    primaryInfo.appendChild(newCols);

    //img
    var newCol = document.createElement("div");
    newCol.classList.add("column", "is-two-fifths");

    newCols.appendChild(newCol);

    var backImage = movie_data.results[0].posterPath;

    var movieImage = "https://image.tmdb.org/t/p/w500" + backImage;

    var img = document.createElement("img");
    img.setAttribute("src", movieImage);

    newCol.appendChild(img);

    // summary
    var newCol_1 = document.createElement("div");
    newCol_1.classList.add("column");

    newCols.appendChild(newCol_1);

    var summary = document.createElement("p");
    summary.setAttribute("id", "synopsis");
    summary.textContent = movie_data.results[0].overview;

    newCol_1.appendChild(summary);

    // director
    var director = document.createElement("p");
    director.setAttribute("id", "director");
    director.textContent = "Director: " + movie_data.results[0].significants;

    newCol_1.appendChild(director);

    // cast
    var cast = document.createElement("p");
    cast.setAttribute("id", "main-cast");
    cast.textContent = "Cast: " + movie_data.results[0].cast;

    newCol_1.appendChild(cast);

    // review
    var review = document.createElement("ul");
    review.setAttribute("id", "review_list");

    newCol_1.appendChild(review);

    var list_1 = document.createElement("li");
    list_1.classList.add("review");
    list_1.textContent = "123";

    review.appendChild(list_1);

    var list_2 = document.createElement("li");
    list_2.classList.add("review");
    list_2.textContent = "321";

    review.appendChild(list_2);

    var secondaryInfo = document.createElement("section");
    secondaryInfo.classList.add("section", "content", "py-2", "pb-2");
    secondaryInfo.setAttribute("id", "secondary_info");

    info.appendChild(secondaryInfo);
    
    var trailer = document.createElement("p");
    trailer.setAttribute("id", "trailer");

    secondaryInfo.appendChild(trailer);

    // where to watch on-line
    var nextCol = document.createElement("div");
    nextCol.classList.add("column", "has-background-info");

    movieInfo.appendChild(nextCol);

    var watch = document.createElement("section");
    watch.setAttribute("id", "watch");
    watch.classList.add("section");

    nextCol.appendChild(watch);

    var stream = document.createElement("div");
    stream.setAttribute("id", "stream");

    watch.appendChild(stream);

    var watchTitle = document.createElement("h2");
    watchTitle.classList.add("title");
    watchTitle.textContent = "Where to watch on-line";

    stream.appendChild(watchTitle);

    var ol = document.createElement("ol");
    ol.setAttribute("id", "stream_list");

    stream.appendChild(ol);

    // var data = movie_data.results[0];

    // var list = document.createElement("li");
    // list.classList.add("streamer");
    // list.textContent = data.streamingInfo;

    // ol.appendChild(list);
        

    // console.log(data.streamingInfo);



    // console.log(movieInfo);

}



















function open() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=094c84db597deb498f8d90a2474513fe&language=en-US&page=1&region=US", requestOptions).then(function(response) {
        response.json().then(function(data) { 
            // console.log(data);
            // count: data.results.length
            for (var i=0; i<data.results.length; i++) {
                // console.log(data.results[i].poster_path);
                var backImage = data.results[i].poster_path;
                var backtitle = data.results[i].original_title;

                var movieCardImage = "https://image.tmdb.org/t/p/w500" + backImage;

                // console.log(movieCardImage);

                var col = document.createElement("div");
                col.classList.add("column", "is-narrow", "is-one-fifth");  
                
                var card = document.createElement("div");
                card.classList.add("card");

                var cardImage = document.createElement("div");
                cardImage.classList.add("card-image");

                var moviePoster = document.createElement("figure");
                moviePoster.classList.add("image");
                
                var pic = document.createElement("img");
                pic.setAttribute("src", movieCardImage);

                var cardContent = document.createElement("div");
                cardContent.classList.add("card-content", "has-text-centered");

                var contentTitle = document.createElement("p");
                contentTitle.classList.add("title", "is-5");
                contentTitle.textContent = backtitle;

                cards.appendChild(col);
                col.appendChild(card);
                card.appendChild(cardImage);
                cardImage.appendChild(moviePoster);
                moviePoster.appendChild(pic);
                card.appendChild(cardContent);
                cardContent.appendChild(contentTitle);

            }
        })
    }).catch(error => console.log('error', error));    
}

// open();

// https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg
// /wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg
// "id": 507086
// "original_title": "Jurassic World Dominion"
// "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
// https://image.tmdb.org/t/p/w500
// "backdrop_path": "/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg"