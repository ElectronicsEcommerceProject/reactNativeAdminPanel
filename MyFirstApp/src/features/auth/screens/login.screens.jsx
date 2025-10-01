import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { loginStyles } from './login.styles.screens';
import { logo } from '../../../assets/index.assets';

const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (data.email === 'admin@gmail.com' && data.password === '123456') {
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Error', 'Invalid credentials. Use admin@gmail.com / 123456');
      }
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={loginStyles.container}>
      <Image 
        source={logo} 
        style={loginStyles.logo}
        resizeMode="contain"
      />
      <Text style={loginStyles.title}>Admin Login</Text>
      
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[loginStyles.input, errors.email && loginStyles.inputError]}
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={loginStyles.errorText}>{errors.email.message}</Text>}
      
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[loginStyles.input, errors.password && loginStyles.inputError]}
            placeholder="Password"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry
          />
        )}
      />
      {errors.password && <Text style={loginStyles.errorText}>{errors.password.message}</Text>}
      
      <TouchableOpacity 
        style={loginStyles.button} 
        onPress={handleSubmit(onSubmit)}
        disabled={loading}
      >
        <Text style={loginStyles.buttonText}>
          {loading ? 'Logging in...' : 'Login'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;