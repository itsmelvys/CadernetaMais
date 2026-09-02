import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import '../global.css';

const ehWeb = Platform.OS === 'web';

export default function RootLayout() {
  return (
    <View style={estilos.fundo}>
      <StatusBar style="dark" />
      <View style={estilos.celular}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: ehWeb ? '#D7E8E4' : '#FFFFFF',
    alignItems: ehWeb ? 'center' : 'stretch',
    justifyContent: ehWeb ? 'center' : 'flex-start',
    padding: ehWeb ? 16 : 0,
  },
  celular: ehWeb
    ? {
        width: '100%',
        maxWidth: 390,
        height: '100%',
        maxHeight: 844,
        backgroundColor: '#FFFFFF',
        borderRadius: 40,
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(26, 79, 74, 0.2)',
      }
    : {
        flex: 1,
        backgroundColor: '#FFFFFF',
      },
});
