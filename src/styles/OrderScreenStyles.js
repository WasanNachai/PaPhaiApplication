import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  productSection: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  productPrice: {
    fontSize: 16,
    color: Colors.primary,
    marginTop: 5,
  },
  productShipping: {
    fontSize: 14,
    color: Colors.textPrimary,
    marginTop: 5,
  },
  formSection: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  input: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  totalSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  orderButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  orderButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },

  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  
  amountButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4A7040',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  
  amountButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  phoneNotice: {
    fontSize: 12,
    color: '#4A7040',
    marginTop: 4,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  
  discountMessage: {
    marginTop: 8,
    fontSize: 14,
    color: '#4A7040',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  
});
