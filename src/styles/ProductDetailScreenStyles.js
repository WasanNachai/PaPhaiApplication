import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailSection: {
    padding: 20,
  },
  productName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 22,
    color: Colors.primary,
    marginBottom: 5,
  },
  productShipping: {
    fontSize: 16,
    color: Colors.textPrimary,
    marginBottom: 20,
  },
  productDetails: {
    fontSize: 16,
    color: Colors.textPrimary,
    lineHeight: 24,
  },
  orderButton: {
    backgroundColor: Colors.primary,
    margin: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
