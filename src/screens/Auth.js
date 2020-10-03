import React, { Component } from 'react'
import { 
    ImageBackground, Text, StyleSheet, 
    View, TextInput, TouchableOpacity,
    Alert
} from 'react-native'

import backgroundImage from '../../assets/imgs/login.jpg'
import commonStyles from '../commonStyles'

export default class Auth extends Component {
    
    state = {
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
        stageNew: false
    }

    signInOrSignUp = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar conta')
        }
        else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.background}>
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subTitle}>{this.state.stageNew ? 'Crie sua conta': 'Informe seus dados'}</Text>
                    {this.state.stageNew &&
                        <TextInput 
                            placeholder="Nome" 
                            value={this.state.name} 
                            style={styles.input} 
                            onChangeText={name => this.setState({ name })} />
                    }
                    <TextInput 
                        placeholder="E-mail" 
                        value={this.state.email} 
                        style={styles.input} 
                        onChangeText={email => this.setState({ email })} />
                    <TextInput 
                        placeholder="Senha"
                        value={this.state.password} 
                        style={styles.input} 
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true} />
                    
                    {this.state.stageNew &&
                        <TextInput 
                            placeholder="Confirmar senha"
                            value={this.state.confirmPassword} 
                            style={styles.input} 
                            onChangeText={confirmPassword => this.setState({ confirmPassword })}
                            secureTextEntry={true} />
                    }
                    <TouchableOpacity style={styles.button} onPress={this.signInOrSignUp}>
                        <View>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar': 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => this.setState({stageNew: !this.state.stageNew})}>
                    <View>
                        <Text style={styles.buttonText}>
                        {this.state.stageNew ? 'Já possui conta?': 'Ainda não possui conta?'}
                        </Text>
                    </View>
                </TouchableOpacity>
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
    subTitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
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