import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCEF',
    padding: 20,
  },
  searchInput: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20,
    elevation: 2,
  },
  card: {
    backgroundColor: '#E6F0DD',
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  productName: {
    fontFamily: 'JacquesFrancois',
    fontSize: 18,
    marginBottom: 5,
    color: '#4A7040',
  },
  productDescription: {
    fontSize: 14,
    color: '#4A7040',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4A7040',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 5,
    width: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default styles;
