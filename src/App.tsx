import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import {useEffect} from "react";
import {useFonts} from "expo-font";
import queryClient from "./api/queryClient";
import {QueryClientProvider} from "@tanstack/react-query";

Asset.loadAsync([ // 초기 이미지는 loadAsync 를 통해 미리 셋팅한다.
    ...NavigationAssets,
    require('./assets/newspaper.png'),
    require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

export function App() {

    const [fontsLoaded] = useFonts({
        NotoSansKR : require('./assets/font/NotoSansKR-SemiBold.ttf'),
    })

    useEffect(() => {
        if (fontsLoaded){
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded){
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
        <Navigation
            linking={{
                enabled: 'auto',
                prefixes: [
                    // Change the scheme to match your app's scheme defined in app.json
                    'helloworld://', // 폰트설정
                ],
            }}
            onReady={() => {
                SplashScreen.hideAsync();
            }}
        />
        </QueryClientProvider>
    );
}
