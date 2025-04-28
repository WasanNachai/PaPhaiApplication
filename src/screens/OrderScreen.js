import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/OrderScreenStyles';
import { useState } from 'react';
import { db } from '../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function OrderScreen({ route, navigation }) {
  const { product } = route.params;

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [amount, setAmount] = useState(1);

  const calculateDiscountInfo = () => {
    const pricePerUnit = parseInt(product.Price);
    const shippingPerUnit = parseInt(product.Shipping);

    const subtotal = amount * pricePerUnit;
    const shippingFee = amount * shippingPerUnit;

    let discount = 0;
    let message = '';

    if (amount > 5 && amount <= 10) {
      discount = subtotal * 0.05;
      message = '🎉 You received a 5% discount!';
    } else if (amount > 10) {
      discount = subtotal * 0.10;
      message = '🔥 You received a 10% discount!';
    }

    const total = subtotal - discount + shippingFee;
    return { total, message };
  };

  const { total, message } = calculateDiscountInfo();

  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const handleBuy = async () => {
    if (!fullName || !phoneNumber || !address || !zipCode) {
      Alert.alert('Error', 'Please fill out all fields!');
      return;
    }

    try {
      await addDoc(collection(db, 'Orders'), {
        FullName: fullName,
        PhoneNumber: phoneNumber,
        Address: address,
        ZipCode: zipCode,
        Products: product.Name,
        Price: product.Price,
        Shipping: product.Shipping,
        Amount: amount,
        'Total payment': total.toString(),
      });

      Alert.alert('Success', 'Your order has been placed successfully!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error adding document: ', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Section: Product Summary */}
      <View style={styles.productSection}>
        <Image source={{ uri: product.URL }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.Name}</Text>

          {/* 🔥 ปุ่มเพิ่มลด */}
          <View style={styles.amountContainer}>
            <TouchableOpacity style={styles.amountButton} onPress={decreaseAmount}>
              <Text style={styles.amountButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.amountText}>{amount}</Text>

            <TouchableOpacity style={styles.amountButton} onPress={increaseAmount}>
              <Text style={styles.amountButtonText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.productPrice}>฿{product.Price}</Text>
          <Text style={styles.productShipping}>Shipping Fee: ฿{product.Shipping}</Text>
        </View>
      </View>

      {/* Section: Form */}
      <View style={styles.formSection}>
        <Text style={styles.formTitle}>Shipping Information</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        
        {/* ✨ ข้อความใต้ช่องเบอร์โทร */}
        <Text style={styles.phoneNotice}>
          Please enter a reachable phone number so that we can contact you to confirm your order within 1 minute after submission.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Postal Code"
          keyboardType="number-pad"
          value={zipCode}
          onChangeText={setZipCode}
        />
      </View>

      {/* Section: Total Price */}
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>
          Total: ฿{total}
        </Text>
        {message ? (
          <Text style={styles.discountMessage}>{message}</Text>
        ) : null}
      </View>

      {/* Button: Place Order */}
      <TouchableOpacity style={styles.orderButton} onPress={handleBuy}>
        <Text style={styles.orderButtonText}>Buy</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
