import { View, Text, ImageBackground, ScrollView } from 'react-native';
import styles from '../styles/AboutUsScreenStyles';

export default function AboutUsScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/Backgroud/Rice.jpg')}
        style={styles.banner}
      >
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>About PA PHAI</Text>
        <Text style={styles.sectionText}>
          PA PHAI was born from a passion for bringing the purest, most aromatic Thai rice 
          to your home, grown with care and harvested from the fertile fields of Thailand.
        </Text>

        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.sectionText}>
          To nurture the heritage of Thai rice through sustainable farming and to 
          deliver premium quality to every table around the world.
        </Text>

        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          Deliver premium Thai rice, grown with heart, to the global market, while supporting
          local farmers and preserving the environment.
        </Text>
      </View>
    </ScrollView>
  );
}
