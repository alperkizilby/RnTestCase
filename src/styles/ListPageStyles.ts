import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 12,
        color: '#333',
    },
    body: {
        fontSize: 16,
        color: '#555',
    },
    icon: {
        fontSize: 18,
        color: '#888',
        marginRight: 8,
    },
});
