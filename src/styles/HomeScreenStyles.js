import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCF0',
  },
  banner: {
    width: '100%',
    height: 400,
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(71, 71, 71, 0.4)', // เทาโปร่งแสง
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bannerContent: {
    position: 'absolute',
    top: 100,
    left: 20,
  },
  title: {
    fontFamily: 'JacquesFrancois',
    fontSize: 36,
    color: '#FFFFFF',
    lineHeight: 47,
  },
  subtitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: 15,
    width: 250,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonPrimary: {
    backgroundColor: '#4A7040',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  buttonSecondary: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonTextPrimary: {
    color: '#FFFFFF',
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
  },
  buttonTextSecondary: {
    color: '#4A7040',
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
  },
  vectorButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  vectorIcon: {
    width: 30,
    height: 30,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'OpenSans-SemiBold',
    color: '#4A7040',
    marginBottom: 10,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '47%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  productName: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#4A7040',
    marginBottom: 10,
    textAlign: 'center',
  },
  productButton: {
    backgroundColor: '#4A7040',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  productButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
  aboutContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'OpenSans-SemiBold',
    color: '#4A7040',
    marginBottom: 10,
  },
  aboutDescription: {
    fontSize: 14,
    fontFamily: 'OpenSans-Light',
    color: '#000000',
    lineHeight: 20,
  },
  aboutLogo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
});
