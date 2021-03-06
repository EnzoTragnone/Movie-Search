//variables declaration
var movieformEl = document.querySelector("#movie-form");
var movieInputEl = document.querySelector("#search-input");
var movieTitleEl = document.querySelector("#movie_title");
var movieInfoEl = document.querySelector("#synopsis");
var movieLengthEl = document.querySelector("#length");
var movieDateEl = document.querySelector("#date");
var movieGenreEl = document.querySelector("#genre");
var movieRatingEl = document.querySelector("#rating");
var movieCastEl = document.querySelector("#cast");
var moviePosterEl = document.querySelector("#poster");
var movieDirectorEl = document.querySelector("#director");
var movieWriterEl = document.querySelector("#writers");
var movieTrailerEl = document.querySelector("#trailer");
var movieReviewEl = document.querySelector("#review_list");
var movieStreamEl = document.querySelector("#stream_list");
var movieShowtimeEl = document.querySelector("#local_list");
var movieLanguageEl = document.querySelector("#language");
var movieStarEl = document.querySelector("#star");
var searchBtnEl = document.getElementById("search-btn");
var searchInputEl = document.getElementById("search-input");
var filterBtnEl = document.getElementById("filter-btn");
var historyEl = document.querySelector("#history");
var formEl = document.getElementById("movie-form");
var filterModalEl = document.getElementById("filter-modal");
var modalCloseBtn = document.getElementById("modal-cancel-btn");
var pageEl = document.querySelector("html");
var preferences = {};
var alertModalEl = document.getElementById("alert-modal");
// movieArr save history record
var movieArr = [];

//now playing 
window.onload = function () {
    let apiKey = '627ce180f6b942d38cd09ef7905db024';
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey)
        .then(response => response.json())
        .then(data => {
            country = data.country_code;
            movieNow(country);
        });
};

var movieNow = function (country) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=094c84db597deb498f8d90a2474513fe&language=en-US&page=1&region=" + country, requestOptions).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                for (var i = 0; i < 10; i++) {
                    var backImage = data.results[i].poster_path;
                    var backtitle = data.results[i].title;
                    var cards = document.querySelector("#now");

                    var movieCardImage = "https://image.tmdb.org/t/p/w500" + backImage;

                    var col = document.createElement("div");
                    col.classList.add("column", "is-narrow", "is-one-fifth");

                    var card = document.createElement("div");
                    card.classList.add("card");
                    card.addEventListener("click", function () {
                        while (movieCastEl.firstChild) {
                            //reset lists from earlier
                            movieCastEl.removeChild(movieCastEl.firstChild);
                        };
                        while (movieWriterEl.firstChild) {
                            //reset lists from earlier
                            movieWriterEl.removeChild(movieWriterEl.firstChild);
                        };
                        while (movieDirectorEl.firstChild) {
                            //reset lists from earlier
                            movieDirectorEl.removeChild(movieDirectorEl.firstChild);
                        };
                        while (movieReviewEl.firstChild) {
                            //reset lists from earlier
                            movieReviewEl.removeChild(movieReviewEl.firstChild);
                        };
                        while (movieGenreEl.firstChild) {
                            //reset lists from earlier
                            movieGenreEl.removeChild(movieGenreEl.firstChild);
                        };
                        while (movieStreamEl.firstChild) {
                            movieStreamEl.removeChild(movieStreamEl.firstChild);
                        }
                        title = this.textContent;
                        GetLocation(title);
                    })

                    var cardImage = document.createElement("div");
                    cardImage.classList.add("card-image");

                    var moviePoster = document.createElement("figure");
                    moviePoster.classList.add("image", "is-48x96");

                    var pic = document.createElement("img");
                    pic.setAttribute("src", movieCardImage);

                    var cardContent = document.createElement("div");
                    cardContent.classList.add("card-content", "has-text-centered");

                    var contentTitle = document.createElement("p");
                    contentTitle.classList.add("subtitle", "is-size-6");
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
        }
        // call modal here
        // }).catch(error => alert("error"));
    }).catch(function () {
        // call alert modal
        console.log("here");
        var alertHeaderEl = document.getElementById("alert-modal-header");
        var alertTextEl = document.getElementById("alert-modal-text");

        alertHeaderEl.textContent = "Error";
        alertTextEl.textContent = "Movie or show not found. Please enter another movie or series name then search again!";
        alertModalEl.classList.add("is-active");
        pageEl.classList.add("is-clipped");
    });
}

//IP adress look up API
var GetLocation = function (movie) {
    let apiKey = '627ce180f6b942d38cd09ef7905db024';
    fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey)
        .then(response => response.json())
        .then(data => {
            country = data.country_code;
            passthrough = movie;
            idSearch(passthrough, country);
        });
};

//function to look up IMDB ID
var idSearch = function (movie, country) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfff8e47bbmsh52112d53558a8c6p18b44djsn557c06239ea5',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    fetch('https://online-movie-database.p.rapidapi.com/title/find?q=' + movie + '', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.results) {
                Id = data.results[0].id.slice(7, 16);
                topTitle = data.results[0].title;
                passthrough = country

                //adds history
                if (document.getElementById(topTitle)) {
                } else {
                    let li = document.createElement("li");
                    li.innerHTML = topTitle;
                    li.setAttribute("class", "item");
                    li.setAttribute("id", topTitle);
                    li.addEventListener("click", function () {
                        while (movieCastEl.firstChild) {
                            //reset lists from earlier
                            movieCastEl.removeChild(movieCastEl.firstChild);
                        };
                        while (movieWriterEl.firstChild) {
                            //reset lists from earlier
                            movieWriterEl.removeChild(movieWriterEl.firstChild);
                        };
                        while (movieDirectorEl.firstChild) {
                            //reset lists from earlier
                            movieDirectorEl.removeChild(movieDirectorEl.firstChild);
                        };
                        while (movieReviewEl.firstChild) {
                            //reset lists from earlier
                            movieReviewEl.removeChild(movieReviewEl.firstChild);
                        };
                        while (movieGenreEl.firstChild) {
                            //reset lists from earlier
                            movieGenreEl.removeChild(movieGenreEl.firstChild);
                        };
                        while (movieStreamEl.firstChild) {
                            movieStreamEl.removeChild(movieStreamEl.firstChild);
                        }
                        title = this.textContent;
                        GetLocation(title);
                    })
                    historyEl.appendChild(li);
                    // put movie name in movieArr
                    movieArr.push(topTitle);
                    // console.log(movieArr);
                    // put movieArr in localstorage 
                    localStorage.setItem("movies", JSON.stringify(movieArr));
                }

                MovieInfo(Id);
                trailer(Id);
                topCrew(Id);
                userReviews(Id)
                getWatchApi(Id, passthrough);
            } else {
                // call alert modal
                var alertHeaderEl = document.getElementById("alert-modal-header");
                var alertTextEl = document.getElementById("alert-modal-text");

                alertHeaderEl.textContent = "Error";
                alertTextEl.textContent = "Movie or show not found. Please enter another movie or series name then search again!";
                alertModalEl.classList.add("is-active");
                pageEl.classList.add("is-clipped");
                // alert("no good")
            }
        })
};

//function for movie info
var MovieInfo = function (id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfff8e47bbmsh52112d53558a8c6p18b44djsn557c06239ea5',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    fetch('https://online-movie-database.p.rapidapi.com/title/get-overview-details?tconst=' + id + '&currentCountry=CA', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.plotSummary) {
                movieInfoEl.innerHTML = data.plotSummary.text;
            } else { movieInfoEl.innerHTML = data.plotOutline.text }
            movieDateEl.innerHTML = data.releaseDate;
            moviePosterEl.setAttribute("src", data.title.image.url)
            movieStarEl.innerHTML = data.ratings.rating;
            movieRatingEl.innerHTML = data.certificates.US[0].certificate;

            for (i = 0; i < data.genres.length || data < 5; i++) {
                let li = document.createElement("li");
                li.innerHTML = data.genres[i] + ", ";
                movieGenreEl.appendChild(li);
            }
        })
};

//data value is set to movieTerm and used in var displayWatchInfo
let movieTerm = '';

//Watch API function
var getWatchApi = function (movie, country) {
    //keys for request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfff8e47bbmsh52112d53558a8c6p18b44djsn557c06239ea5',
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
        }
    };
    //request
    fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=" + country + "&imdb_id=" + movie + "&output_language=en", options)
        .then(function (response) {
            response.json().then(function (data) {
                //data format and display
                console.log(data);
                if (data.runtime) {
                    length = data.runtime;
                    hour = Math.floor(length / 60);
                    minute = length % 60;
                    movieLengthEl.innerHTML = hour + ":" + minute + "hrs"
                } if (data.episodes) {
                    movieLengthEl.innerHTML = data.episodes + "ep"
                }

                movieTitleEl.innerHTML = data.title;
                movieLanguageEl.innerHTML = data.originalLanguage;
                //loop to display cast
                for (let i = 0; i < data.cast.length && i < 5; i++) {
                    let li = document.createElement("li");
                    li.innerText = data.cast[i] + ", ";
                    movieCastEl.appendChild(li);
                }
                //loop for available streaming platforms
                list = Object.keys(data.streamingInfo)
                for (let i = 0; i < list.length; i++) {
                    let li = document.createElement("li");
                    li.innerHTML = list[i];
                    movieStreamEl.appendChild(li);
                }
            });
        }
        )
};

//get trailer info
var trailer = function (id) {
    //key for request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfff8e47bbmsh52112d53558a8c6p18b44djsn557c06239ea5',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    //request for trailer id
    fetch('https://online-movie-database.p.rapidapi.com/title/get-videos?tconst=' + id + '&limit=1&region=US', options)
        .then(response => response.json())
        .then(data => {
            videoId = data.resource.videos[0].id.slice(9);
            trailerDisplay(videoId);
        }).catch(function () {
            // call alert modal
            var alertHeaderEl = document.getElementById("alert-modal-header");
            var alertTextEl = document.getElementById("alert-modal-text");

            alertHeaderEl.textContent = "Error";
            alertTextEl.textContent = "Trailer not available!";
            alertModalEl.classList.add("is-active");
            pageEl.classList.add("is-clipped");
        });
    // }).catch(err => console.error(err));
};

//display trailer on page
var trailerDisplay = function (id) {
    //key for request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfff8e47bbmsh52112d53558a8c6p18b44djsn557c06239ea5',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };
    //display on page
    fetch('https://online-movie-database.p.rapidapi.com/title/get-video-playback?viconst=' + id, options)
        .then(response => response.json())
        .then(data => {
            movieTrailerEl.setAttribute("type", data.resource.encodings[1].mimeType);
            movieTrailerEl.setAttribute("src", data.resource.encodings[1].playUrl);
        })
};

var topCrew = function (id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfff8e47bbmsh52112d53558a8c6p18b44djsn557c06239ea5',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    fetch('https://online-movie-database.p.rapidapi.com/title/get-top-crew?tconst=' + id, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for (i = 0; i < data.directors.length && i < 5; i++) {
                let li = document.createElement("li");
                li.innerHTML = data.directors[i].name + ", ";
                movieDirectorEl.appendChild(li);
            };
            for (let i = 0; i < data.writers.length && i < 5; i++) {
                let li = document.createElement("li");
                li.innerHTML = data.writers[i].name + ", ";
                movieWriterEl.appendChild(li);
            }
        })
}

var userReviews = function (id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfff8e47bbmsh52112d53558a8c6p18b44djsn557c06239ea5',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    fetch('https://online-movie-database.p.rapidapi.com/title/get-user-reviews?tconst=' + id, options)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < 3; i++) {
                let li = document.createElement("li");
                li.setAttribute("id", "reviewItem");
                let author = document.createElement("p");
                author.innerHTML = data.reviews[i].author.displayName;
                let rating = document.createElement("p");
                rating.innerHTML = data.reviews[i].authorRating;
                let title = document.createElement("p");
                title.innerHTML = data.reviews[i].reviewTitle;
                let text = document.createElement("p");
                text.innerHTML = data.reviews[i].reviewText;
                li.appendChild(author);
                li.appendChild(rating);
                li.appendChild(title);
                li.appendChild(text);
                movieReviewEl.appendChild(li);
            }
        })
        .catch(function () {
            // call alert modal
            var alertHeaderEl = document.getElementById("alert-modal-header");
            var alertTextEl = document.getElementById("alert-modal-text");

            alertHeaderEl.textContent = "Error";
            alertTextEl.textContent = "User reviews not found!";
            alertModalEl.classList.add("is-active");
            pageEl.classList.add("is-clipped");
        });
    // .catch(err => console.error(err));
}

var displayInfo = function () {
    // retrieve each object key name to use to query the html id's
    var arr = Object.keys(preferences);

    // loop through each key
    for (var i = 0; i < arr.length; i++) {
        // get the key name
        var preferenceName = arr[i];
        // using the key name as id, query the target element to show/hide
        var targetEl = document.getElementById(preferenceName);
        // if the key value is true, remove class "is-hidden" so it's shown on the page
        if (preferences[arr[i]] === true) {
            targetEl.classList.remove("is-hidden");
            // else, add class "is-hidden" to hide from page
        } else {
            targetEl.classList.add("is-hidden");
        }
    }

}

//form submit event call
var startSearch = function (event) {
    event.preventDefault();

    // get input from user and store it in movieTitle
    var movieTitle = searchInputEl.value.trim();

    // if the user input something -not blank- call APIs
    if (movieTitle) {
        while (movieCastEl.firstChild) {
            //reset lists from earlier
            movieCastEl.removeChild(movieCastEl.firstChild);
        };
        while (movieWriterEl.firstChild) {
            //reset lists from earlier
            movieWriterEl.removeChild(movieWriterEl.firstChild);
        };
        while (movieDirectorEl.firstChild) {
            //reset lists from earlier
            movieDirectorEl.removeChild(movieDirectorEl.firstChild);
        };
        while (movieReviewEl.firstChild) {
            //reset lists from earlier
            movieReviewEl.removeChild(movieReviewEl.firstChild);
        };
        while (movieGenreEl.firstChild) {
            //reset lists from earlier
            movieGenreEl.removeChild(movieGenreEl.firstChild);
        };
        while (movieStreamEl.firstChild) {
            movieStreamEl.removeChild(movieStreamEl.firstChild);
        }
        GetLocation(movieTitle);
        // call function to hide/show elements
        displayInfo();
    } else {
        // start alert modal
        var alertHeaderEl = document.getElementById("alert-modal-header");
        var alertTextEl = document.getElementById("alert-modal-text");

        alertHeaderEl.textContent = "Check input";
        alertTextEl.textContent = "Input field cannot be blank. Please enter a movie or series name then search again!";
        alertModalEl.classList.add("is-active");
        pageEl.classList.add("is-clipped");
    }
};

var callModal = function (event) {
    filterModalEl.classList.add("is-active");
    pageEl.classList.add("is-clipped");

};

var loadPreferences = function () {
    preferences = JSON.parse(localStorage.getItem("search-preference"));

    if (!preferences) {
        preferences = {};
        // this ensures that first users will see all checked boxes consistently
        savePreferences();
    }
    var cbPreferenceArr = document.querySelectorAll(".filter-option");

    for (var i = 0; i < cbPreferenceArr.length; i++) {
        if (preferences[cbPreferenceArr[i].getAttribute("name")] === true) {
            cbPreferenceArr[i].checked = true;
        } else {
            cbPreferenceArr[i].checked = false;
        }
    }
};

var savePreferences = function () {
    // select all checkboxes
    var cbPreferenceArr = document.querySelectorAll(".filter-option");
    // console.dir(cbPreferenceArr[0]);

    //loop through all of them
    for (var i = 0; i < cbPreferenceArr.length; i++) {
        // in loop, retrieve name and status
        var preferenceName = cbPreferenceArr[i].getAttribute("name");
        var preferenceState = cbPreferenceArr[i].checked;
        // push to preference object
        preferences[preferenceName] = preferenceState;
    }
    // save to local storage
    localStorage.setItem("search-preference", JSON.stringify(preferences));
};

// modalCloseBtn.addEventListener("click", closeModal);
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
        loadPreferences();
        pageEl.classList.add("is-clipped");
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
        // add scrollbar back to main HTML
        pageEl.className = "";
        // save filter preferences
        // savePreferences();
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            event.preventDefault();
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', (event) => {
            if (event.target.id === "modal-save-btn") {
                savePreferences();
            }
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        const e = event || window.event;

        if (e.keyCode === 27) { // Escape key
            closeAllModals();
        }
    });
});

function loadhistory() {
    var load = localStorage.getItem("movies");

    if (!load) {
        return false;
    }

    load = JSON.parse(load);

    for (var i=0; i<load.length; i++) {

        idSearch(load[i]);
    }
}

//formEl.addEventListener("click", inputHandler);
searchBtnEl.addEventListener("click", startSearch);

// load from localStorage
loadPreferences();
loadhistory();
//displayInfo();