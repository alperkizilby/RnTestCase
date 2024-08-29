import { StyleSheet, ColorSchemeName } from 'react-native';

export const getThemedStyles = (colorScheme: ColorSchemeName) => {
    const isDarkMode = colorScheme === 'dark';

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            backgroundColor: isDarkMode ? '#333' : '#f9f9f9',
        },
        title: {
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 32,
            color: isDarkMode ? '#fff' : '#2c3e50',
        },
        input: {
            width: '100%',
            height: 50,
            color: isDarkMode ? '#fff' : '#000',
            borderRadius: 6,
            paddingHorizontal: 16,
            marginBottom: 16,
            fontSize: 16,
            borderColor: isDarkMode ? '#555' : '#ddd',
            borderWidth: 1,
        },
        passwordContainer: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
        },
        inputPassword: {
            flex: 1,
            height: 50,
            borderRadius: 8,
            paddingHorizontal: 16,
            fontSize: 16,
            borderColor: isDarkMode ? '#555' : '#ddd',
            borderWidth: 1,
            color: isDarkMode ? '#fff' : '#000',
        },
        eyeIcon: {
            position: 'absolute',
            right: 16,
        },
        rememberMeContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 16,
        },
        rememberMeText: {
            fontSize: 16,
            color: isDarkMode ? '#fff' : '#333',
            marginLeft: 8,
        },
        button: {
            width: '100%',
            height: 50,
            backgroundColor: isDarkMode ? '#555' : '#00a86b',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            marginBottom: 16,
        },
        buttonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
        },
        checkboxContainer: {
            backgroundColor: 'transparent',
            borderWidth: 0,
            padding: 0,
            marginLeft: 0,
        },
        checkboxColor: {
            color: isDarkMode ? '#fff' : '#333',
        },
        iconColor: {
            color: isDarkMode ? '#aaa' : '#888',
        },
        placeholderText: {
            color: isDarkMode ? '#aaa' : '#999',
        },
    });
};
