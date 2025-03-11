import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigations/types';
import { AppStyles } from '../styles/AppStyles';
import CustomInput from '../components/CustomInput';
import MenuButton from '../components/MenuButton';
import CustomImage from '../components/CustomImage';
import CustomButton from '../components/CustomButton';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CustomImage source={require('../../assets/images/logo.png')} width={250} height={250} />
        <Text style={[AppStyles.fontSize.title, {marginBottom: 30}]}>Welcome Back</Text>
        <CustomInput
          label="Enter your name"
          value={name} 
          onChangeText={setName} 
          placeholder="enter username"
        />

        <CustomInput 
          label="Password"
          value={name} 
          onChangeText={setName} 
          placeholder="enter your password"
        />

        <MenuButton
          source={require('../../assets/icons/forgot_password.png')}
          title="Forgot Password"
          onPress={() => navigation.navigate('Profile')}
        />      

        <CustomButton
          title="Login"
          width={'90%'}
          borderRadius={20}
          onPress={() => navigation.navigate('Profile')}
          backgroundColor="#28a745"
          textColor="#FFF"
        />
      </View>
    </ScrollView>
  );
}
