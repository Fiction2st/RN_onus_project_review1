// import axios from "axios";
// import {useQuery} from "@tanstack/react-query";
//
// const MOVIE_URL : string = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
// const AXIOS_OPTIONS = {
//     method : 'GET',
//     header: {
//         accept : "application/json",
//         Authorization:
//         'Bearer my key'
//     },
// };
//
// export async function fetchMovies(){
//     const {data} = await axios.get(MOVIE_URL, AXIOS_OPTIONS);
//     return data.results;
// }
//
// export function useGetMovies(){
//     return useQuery({
//         queryFn : fetchMovies,
//         queryKey : ["movies"],
//     })
// }
//
// export async function getMovieById(id:string){
//     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,AXIOS_OPTIONS)
//     return data;
// }
//
// export function useGetMovieById(id:string){
//     return useQuery({
//         queryFn : () => getMovieById(id), //위에 전체리스트를 가져오는 것과의 차이??
//         queryKey : ["movie", id],
//         enabled : !!id,
//     });
// }

import axiosInstance from "./axiosInstance";

export const fetchMovies= async (page: number = 1) => {
    const {data} = await axiosInstance.get(`/now_playing`);
    return data.results;
};

export const getMovieById = async (movieId: string) => {
    const {data} = await axiosInstance.get(`/${movieId}`);
    return data;
};