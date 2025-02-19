import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray"
    },
    header: {
        fontSize: 20,
        marginTop: 20,
        textAlign: "center"
    },
    inputBar: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1, 
        backgroundColor: 'white',
        width: 300, 
        margin: 10, 
        padding: 8,
        color: 'black'
    },
    buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
    }
});

export default styles;