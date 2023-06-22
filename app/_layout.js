import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();



const Layout = () => {

    const [fontsLoaded] = useFonts({
        DMBOLD: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Regular.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })
    const onLayoutRootView = useCallback(async () => { //load font under the screen
        //A callback is a function passed as an argument to another function. Using a callback, you could call the calculator function ( myCalculator ) with a callback 
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])
    if (!fontsLoaded) return null
    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;