import { View, Text, ImageBackground, ScrollView } from 'react-native';
import styles from '../styles/ContactScreenStyles';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../assets/Backgroud/Rice.jpg')}
        style={styles.banner}
      >
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Our Address</Text>
        <Text style={styles.sectionText}>
          58 Moo 6, Ban Dai Subdistrict, Mae Sai District, Chiang Rai 57200, Thailand
        </Text>

        <Text style={styles.sectionTitle}>Phone Number</Text>
        <Text style={styles.sectionText}>+66 96 078 3692</Text>

        <Text style={styles.sectionTitle}>Email</Text>
        <Text style={styles.sectionText}>support@paphai.com</Text>
      </View>
    </ScrollView>
  );
}
