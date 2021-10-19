import { BASEURL, apiKey } from "./../constants/baseUrl"

import axios from 'axios';

export const fetchUpcomingMovies =(page?:string)=>{
    const response =axios.get(BASEURL +'movie/upcoming?api_key='+apiKey  +'&page='+page)
    .then((response)=>{
       
        return response.data
    }).catch((error)=>{
       
    })
    return response;
}

export const fetchPopularMovies =(page?:string)=>{
    const response =axios.get(BASEURL +'movie/popular?api_key='+apiKey  +'&page='+page)
    .then((response)=>{
       
        return response.data
    }).catch((error)=>{
       
    })
    return response;
}

export const fetchTopRatedMovies =(page?:string)=>{
    const response =axios.get(BASEURL +'movie/top_rated?api_key='+apiKey  +'&page='+page)
    .then((response)=>{
       
        return response.data
    }).catch((error)=>{
       
    })
    return response;
}

export const fetchGenres =()=>{
    const response =axios.get(BASEURL +'genre/movie/list?api_key='+apiKey )
    .then((response)=>{
        
        return response.data.genres;
    }).catch((error)=>{
       
    })
    return response;
}

export const fetchMovieDetails =(id:string)=>{
    const response =axios.get(BASEURL +'movie/'+id+'?api_key='+apiKey )
    .then((response)=>{
        console.log(response.data)
        return response.data
    }).catch((error)=>{
       console.log(error.response)
    })
    return response;
}


export const fetchMovieCredits =(id:string)=>{
    const response =axios.get(BASEURL +'movie/'+id+'/credits?api_key='+apiKey )
    .then((response)=>{
        console.log(response.data)
        return response.data
    }).catch((error)=>{
       console.log(error.response)
    })
    return response;
}