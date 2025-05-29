export const MOVIES : {NOW_PLAYING : string} = {
    NOW_PLAYING : `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`
};

// export 를 통해 다른 파일에서 import 를 통해 해당 변수를 사용할 수 있도록 한다.
// {NOW_PLAYING : string} : MOVIES 라는 객체에는 NOW_PLAYING 이라는 키가 있고, 그 값은 문자열(string) 이다.