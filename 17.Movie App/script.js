const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movie = document.querySelector('.movie');
const container = document.querySelector('.container');
const input = document.querySelector('.search');
 
getMovies(APIURL);

async function getMovies(url){
    
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData.results);

    showMovies(respData.results);

    return respData;
    

}

function showMovies(movies){

    container.innerHTML = ``;

    movies.forEach((movie)=>{


        const {
            overview,
            poster_path,
            release_date,
            title,
            vote_average
        } = movie;

        const poster = document.createElement('div');

        poster.innerHTML = `
        
        <img src="${IMGPATH + poster_path}" alt="" class="img">
        <div class="title-container">
            <div class="overview">
                <span class="release-date">Release date:"${release_date}"</span>
                </br>
                <span >${overview}</span>
            </div>
            
            <h2 class="title">${title}</h2>
            <span class="grade ${getColor(vote_average)}">${vote_average}</span>
        
        `
        poster.classList.add('movie')

        container.appendChild(poster);

    });

   
    
};

function getColor(grade){
    if(grade >= 7.5){
        return 'green';
    }else if(grade >= 5.5){
        return 'yellow';
    }else if(grade >= 3.7){
        return 'orange';
    }else if(grade >= 0){
        return 'crimson';
    }

};


function searchMovie(){

    const inputValue = input.value;

    if(inputValue){
        getMovies(SEARCHAPI + inputValue);
    }

}

input.addEventListener('input',searchMovie);



