import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { View,ActivityIndicator } from 'react-native';


import IntroScreen from './src/screens/IntroScreen';
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import ContactScreen from './src/screens/ContactScreen';
import OrderScreen from './src/screens/OrderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
      'JacquesFrancois': require('./assets/Fonts/JacquesFrancois-Regular.ttf'),
      // 👉 ถ้ามีหลายฟอนต์เพิ่มได้ตรงนี้
    });
  
    if (!fontsLoaded) {
      // รอให้โหลดฟอนต์เสร็จก่อนค่อย render App
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#4A7040" />
        </View>
      );
    }
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
