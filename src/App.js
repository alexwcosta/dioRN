import React from 'react';
import {
    View, 
    Text, 
    Image, 
    StyleSheet, 
    SafeAreaView, 
    StatusBar, 
    Pressable,
    Linking
} from 'react-native';

import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const urlGoToMyGithub = 'https://github.com/alexwcosta';

const imageProfileGithub = 'https://avatars.githubusercontent.com/u/77593885?v=4';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlGoToMyGithub)
        if(res){
            console.log('Link aprovado');;
            console.log('Abrindo link...');
            await Linking.openURL(urlGoToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image 
                accessibilityLabel='Foto de Alex com fundo laranjado'
                style={style.avatar} 
                source={{uri: imageProfileGithub}}
            />
            <Text 
            accessibilityLabel='Nome: alex costa'
            style={[style.defaultText, style.name]}>
            Alex Costa
            </Text>

            <Text 
            accessibilityLabel='Nickname: alex w costa'
            style={[style.defaultText, style.nickname]}>
            alexwcosta
            </Text>

            <Text 
            accessibilityLabel='Descrição: Software Engenier | Mobile Developer'
            style={[style.defaultText, style.description]}>
            Software Engenier | Mobile Developer |
            </Text>
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                </View>
            </Pressable>
        </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        //column
        backgroundColor: colorGithub,
        flex:1, //Expandir para atela inteira
        justifyContent: 'center',
        //flexDirection: 'row', Deixa itens uma ao lado do outro
    },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText: {
        color:colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 40,
    },
    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});
