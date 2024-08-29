import React, { useState, useContext, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ColorSchemeName } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { getThemedStyles } from '../styles/LoginPageStyles';
import Icon from 'react-native-vector-icons/Feather';
import { ThemeContext } from '../utils/ThemeContext'; // Path'i kendi dosya yapınıza göre ayarlayın

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
    const navigation = useNavigation();

    const { theme } = useContext(ThemeContext);

    
    const styles = useMemo(() => getThemedStyles(theme), [theme]);

    const handleLogin = () => {
        if (username === '' || password === '') {
            Alert.alert('Hata', 'Lütfen Her iki alanı da doldurunuz');
            return;
        }
        else{
            //şimdilik örnek login
            navigation.navigate('ListPage', )

        }

      
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Giriş Yap</Text>
            <TextInput
                style={styles.input}
                placeholder="Kullanıcı Adı"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholderTextColor={styles.placeholderText.color}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Şifre"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize="none"
                    placeholderTextColor={styles.placeholderText.color}
                />
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setSecureTextEntry(!secureTextEntry)}
                >
                    <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={24} color={styles.iconColor.color} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>

            <CheckBox
                value={toggleCheckBox}
                onValueChange={setToggleCheckBox}
                boxType="square"
                style={styles.checkboxContainer}
            />
            <Text style={styles.rememberMeText}>Beni Hatırla</Text>
        </View>
    );
};

export default LoginPage;