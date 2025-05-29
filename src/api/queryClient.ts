import {QueryClient} from "@tanstack/react-query";

const queryClient : QueryClient = new QueryClient({
    defaultOptions : {
        queries : {
            retry : false, // 응답이 에러일 때 재시도할것인가?
            staleTime : 20 * 1000, // 20초, 정상응답받았을 때, 해당 데이터가 fresh 한 상태를 유지하는 시간을 설정함 -> fresh 설정시간동안 동일한 호출은 새로 응답받지 않음
            cacheTime : 5 * 60 * 1000, // 데이터를 캐시에 유지하는 시간으로, staleTime < 시간 < cacheTime 범위에서 설정을 통해 재호출을 할지, 캐시에서 값을 가져올 지 선택 가능
        },
        mutations : {
            retry : false,
        },
    },
});

export default queryClient;