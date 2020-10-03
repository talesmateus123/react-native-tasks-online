import React, { Component } from 'react'
import { 
    ImageBackground, Text, StyleSheet, 
    View, TextInput, TouchableOpacity 
} from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component {
    
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <TextInput placeholder="E-mail" value={this.state.email} style={styles.input} onChangeText={email => this.setState({ email })} />
                    <TextInput placeholder="Senha" value={this.state.email} style={styles.input} onChangeText={password => this.setState({ password })} />
                    <TouchableOpacity style={styles.button}>
                        <View>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secundary,
        fontSize: 70,
        marginBottom: 10
    },
    formContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        padding: 20,
        width: '95%'
    },  
    input: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        padding: 10
    },
    button: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#151',
        padding: 10,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20
    }
})