import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    userCard: {
        marginTop: 32,
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      userHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 16,
      },
      userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    body: {
        fontSize: 16,
        color: '#666',
        marginBottom: 16,
    },
    userContainer: {
        marginTop: 32,
        padding: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007BFF',
        marginLeft: 8,
    },
    sectionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    userDetail: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
    link: {
        fontSize: 16,
        color: 'red', // Link rengi
        marginLeft: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    addressLabel: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
    },
    addressText: {
        fontSize: 16,
        color: '#007BFF',
    },
});
