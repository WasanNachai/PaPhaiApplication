import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/ProductDetailScreenStyles';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.URL }} style={styles.productImage} />

      <View style={styles.detailSection}>
        <Text style={styles.productName}>{product.Name}</Text>
        <Text style={styles.productPrice}>฿{product.Price}</Text>
        <Text style={styles.productShipping}>Shipping Fee: ฿{product.Shipping}</Text>
        <Text style={styles.productDetails}>{product.Details}</Text>
      </View>

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate('Order', { product })}
      >
        <Text style={styles.orderButtonText}>Order Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

