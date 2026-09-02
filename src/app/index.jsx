import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TelaInicio() {
  function aoTocarComecar() {
    Alert.alert(
      'Caderneta+',
      'A próxima tela (cadastro) ainda será criada.'
    );
  }

  function aoTocarJaTenhoConta() {
    Alert.alert(
      'Caderneta+',
      'A tela de login ainda será criada.'
    );
  }

  return (
    <SafeAreaView style={estilos.tela}>
      <View style={estilos.circuloCantoSuperior} />
      <View style={estilos.circuloCantoInferior} />

      <View style={estilos.logoLinha}>
        <View style={estilos.logoEscudo}>
          <Text style={estilos.logoMais}>+</Text>
        </View>
        <Text style={estilos.logoTexto}>Caderneta+</Text>
      </View>

      <Image
        source={require('../../assets/images/inicio-ilustracao.png')}
        style={estilos.ilustracao}
        resizeMode="contain"
      />

      <Text style={estilos.frase}>Cuidado e proteção em cada fase.</Text>

      <View style={estilos.areaBotoes}>
        <Pressable style={estilos.botaoComecar} onPress={aoTocarComecar}>
          <Text style={estilos.textoBotaoComecar}>Começar</Text>
        </Pressable>

        <Pressable onPress={aoTocarJaTenhoConta}>
          <Text style={estilos.linkConta}>Já tenho uma conta</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  circuloCantoSuperior: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#E8F6F1',
    top: -80,
    left: -90,
  },
  circuloCantoInferior: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E8F6F1',
    bottom: -70,
    right: -80,
  },
  logoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  logoEscudo: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#1A7A74',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoMais: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 24,
  },
  logoTexto: {
    color: '#1A4F4A',
    fontSize: 22,
    fontWeight: '700',
  },
  ilustracao: {
    width: '90%',
    maxWidth: 280,
    height: 240,
  },
  frase: {
    color: '#1A4F4A',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  areaBotoes: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  botaoComecar: {
    backgroundColor: '#1A7A74',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 16,
  },
  textoBotaoComecar: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  linkConta: {
    color: '#1A4F4A',
    fontSize: 16,
    fontWeight: '600',
  },
});
