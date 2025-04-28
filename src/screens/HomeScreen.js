import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import styles from '../styles/HomeScreenStyles';

export default function HomeScreen({ navigation }) {
  
    const highlights = [
    {
      id: '1',
      Name: 'Jasmine Rice',
      URL: 'https://firebasestorage.googleapis.com/v0/b/paphaiapp.firebasestorage.app/o/JasmineRice.png?alt=media&token=bbb82731-2a09-47c8-b4e1-22148663c327',
      Price: '120',
      Shipping: '50',
      Details: 'Premium Jasmine Rice with soft texture and fragrant aroma. Suitable for all dishes.'
    },
    {
      id: '2',
      Name: 'Hom Pathum',
      URL: 'https://firebasestorage.googleapis.com/v0/b/paphaiapp.firebasestorage.app/o/HomPathum.png?alt=media&token=0830fd9e-a286-413f-a693-263fa3fe25a3',
      Price: '115',
      Shipping: '40',
      Details: 'High-quality Hom Pathum rice, soft and chewy, great for steamed rice dishes.'
    },
    {
      id: '3',
      Name: 'White Aromatic',
      URL: 'https://firebasestorage.googleapis.com/v0/b/paphaiapp.firebasestorage.app/o/WhiteAromatic.png?alt=media&token=0044950c-f377-4380-b270-f114637b5c92',
      Price: '130',
      Shipping: '45',
      Details: 'White Aromatic Rice with mild fragrance, perfect for Asian dishes and fried rice.'
    },
    {
      id: '4',
      Name: 'Jasmine Rice 105',
      URL: 'https://firebasestorage.googleapis.com/v0/b/paphaiapp.firebasestorage.app/o/JasmineRice105.png?alt=media&token=f849b51a-9f32-4e12-90ce-fb9810f61e1e',
      Price: '125',
      Shipping: '50',
      Details: 'Top-grade Jasmine Rice 105, rich aroma and fluffy texture, ideal for daily meals.'
    }
  ];

  useFocusEffect(
    useCallback(() => {
      console.log('HomeScreen is focused.');
      return () => console.log('Leaving HomeScreen.');
    }, [])
  );

  if (!highlights || highlights.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading Highlights...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
        
        {/* Banner */}
        <ImageBackground
          source={require('../../assets/Backgroud/Rice.jpg')}
          style={styles.banner}
        >
          <View style={styles.overlay} />
          <View style={styles.bannerContent}>
            <Text style={styles.title}>Welcome to{"\n"}PA PHAI</Text>
            <Text style={styles.subtitle}>Premium Thai Rice From The Heart of Nature</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.buttonPrimary}
                onPress={() => navigation.navigate('Search')}
              >
                <Text style={styles.buttonTextPrimary}>Shop Now</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonSecondary}
                onPress={() => navigation.navigate('AboutUs')}
              >
                <Text style={styles.buttonTextSecondary}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* ไอคอนเวคเตอร์ลิ้งไป Contact */}
          <TouchableOpacity
            style={styles.vectorButton}
            onPress={() => navigation.navigate('Contact')}
          >
            <Image
              source={require('../../assets/Icon/Vector.png')}
              style={styles.vectorIcon}
            />
          </TouchableOpacity>
        </ImageBackground>

        {/* Product Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Product Highlights</Text>
          <View style={styles.productGrid}>
            {highlights.map((item) => (
              <View key={item.id} style={styles.productCard}>
                <Image source={{ uri: item.URL }} style={styles.productImage} />
                <Text style={styles.productName}>{item.Name}</Text>
                <TouchableOpacity
                  style={styles.productButton}
                  onPress={() => navigation.navigate('ProductDetail', { product: item })}
                >
                  <Text style={styles.productButtonText}>View Details</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* About Us */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>About us</Text>
          <Text style={styles.aboutDescription}>
            PA PHAI presents premium Thai rice crafted from fertile fields to your hands,
            guided by the heart of nature.
          </Text>
        </View>

        <View>
          <Image
            source={require('../../assets/Backgroud/LOGO.png')}
            style={styles.aboutLogo}
            resizeMode="contain"
          />
        </View>

      </ScrollView>
    </View>
  );
}
