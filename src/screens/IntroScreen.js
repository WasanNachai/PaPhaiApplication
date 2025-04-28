import { View, Image } from 'react-native';
import { useEffect } from 'react';
import styles from '../styles/IntroScreenStyles'; // 👈 ใช้ไฟล์สไตล์แยก

export default function IntroScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // หลัง 2 วิ เข้า Home
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Backgroud/LOGO.png')} // ใช้ภาพ LOGO ที่น้องส่ง
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}
