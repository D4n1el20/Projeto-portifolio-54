import { useState } from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, Spacing } from '@/constants/theme';

const cardShadow = Platform.select({
  web: {
    boxShadow: '0px 8px 18px rgba(0,0,0,0.08)',
  },
  default: {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
  },
});

const palavras = [
  'web',
  'mobile',
  'programacao',
  'ciencia',
  'computacao',
  'teste',
  'software',
  'jogos',
  'algoritmo',
  'codigo',
  'funcoes',
  'vetores',
  'tecnologia',
  'aplicativo',
  'hash',
  'lista',
  'fila',
  'objeto',
  'artificial',
  'compilador',
  'mouse',
  'login',
  'tela',
  'usuario',
  'dados',
  'frontend',
  'backend',
  'interface',
  'recursividade',
  'encapsulamento',
  'abstracao',
];

function getPalavra() {
  const index = Math.floor(Math.random() * palavras.length);
  return palavras[index];
}

const keyboardLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

export default function JogoDaForcaScreen() {
  const [palavra, setPalavra] = useState(getPalavra());
  const [corretas, setCorretas] = useState<string[]>([]);
  const [erradas, setErradas] = useState<string[]>([]);

  const ganhou = palavra.split('').every((letra) => corretas.includes(letra));
  const perdeu = erradas.length >= 6;

  const tentar = (letra: string) => {
    if (corretas.includes(letra) || erradas.includes(letra) || ganhou || perdeu) {
      return;
    }

    if (palavra.includes(letra)) {
      setCorretas((current) => [...current, letra]);
    } else {
      setErradas((current) => [...current, letra]);
    }
  };

  const reiniciar = () => {
    setPalavra(getPalavra());
    setCorretas([]);
    setErradas([]);
  };

  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Jogo da Forca
          </ThemedText>

          <View style={[styles.forcaCard, cardShadow]}>
            <View style={styles.forcaHeader}>
              <View style={styles.forcaPole} />
              <View style={styles.forcaBeam} />
              <View style={styles.forcaLine} />
              {erradas.length > 0 && <View style={styles.forcaHead} />}
              {erradas.length > 1 && <View style={styles.forcaBody} />}
              {erradas.length > 2 && <View style={styles.forcaArmLeft} />}
              {erradas.length > 3 && <View style={styles.forcaArmRight} />}
              {erradas.length > 4 && <View style={styles.forcaLegLeft} />}
              {erradas.length > 5 && <View style={styles.forcaLegRight} />}
            </View>

            <View style={styles.wordRow}>
              {palavra.split('').map((letra, index) => (
                <View key={`${letra}-${index}`} style={styles.letterBox}>
                  <ThemedText style={styles.letterText}>{corretas.includes(letra) ? letra : '_'}</ThemedText>
                </View>
              ))}
            </View>

            <View style={styles.keyboard}>
              {keyboardLetters.map((letra) => {
                const chosen = corretas.includes(letra) || erradas.includes(letra);
                return (
                  <Pressable
                    key={letra}
                    style={({ pressed }) => [
                      styles.key,
                      chosen && styles.keyDisabled,
                      pressed && !chosen && styles.keyPressed,
                    ]}
                    onPress={() => tentar(letra)}
                    disabled={chosen || ganhou || perdeu}
                  >
                    <ThemedText style={styles.keyText}>{letra}</ThemedText>
                  </Pressable>
                );
              })}
            </View>

            <ThemedText style={styles.errorText}>Erros: {erradas.length}/6</ThemedText>

            {(ganhou || perdeu) && (
              <View style={styles.resultCard}>
                <ThemedText style={styles.resultText}>
                  {ganhou ? 'Você ganhou!!!' : 'Perdeu, é uma pena...'}
                </ThemedText>
                <ThemedText style={styles.resultSubtext}>A palavra era: {palavra}</ThemedText>
                <Pressable style={styles.button} onPress={reiniciar}>
                  <ThemedText type="linkPrimary" style={styles.buttonText}>
                    Jogar novamente
                  </ThemedText>
                </Pressable>
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
  },
  title: {
    marginBottom: Spacing.four,
  },
  forcaCard: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: Spacing.four,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 10,
  },
  forcaHeader: {
    minHeight: 180,
    marginBottom: Spacing.four,
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  forcaPole: {
    position: 'absolute',
    left: 24,
    bottom: 0,
    width: 10,
    height: 180,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  forcaBeam: {
    position: 'absolute',
    left: 24,
    top: 0,
    width: 120,
    height: 10,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  forcaLine: {
    position: 'absolute',
    left: 130,
    top: 0,
    width: 2,
    height: 45,
    backgroundColor: '#444',
  },
  forcaHead: {
    position: 'absolute',
    left: 110,
    top: 45,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#222',
  },
  forcaBody: {
    position: 'absolute',
    left: 129,
    top: 90,
    width: 2,
    height: 60,
    backgroundColor: '#222',
  },
  forcaArmLeft: {
    position: 'absolute',
    left: 88,
    top: 102,
    width: 40,
    height: 2,
    backgroundColor: '#222',
    transform: [{ rotate: '135deg' }],
  },
  forcaArmRight: {
    position: 'absolute',
    left: 132,
    top: 102,
    width: 40,
    height: 2,
    backgroundColor: '#222',
    transform: [{ rotate: '45deg' }],
  },
  forcaLegLeft: {
    position: 'absolute',
    left: 88,
    top: 168,
    width: 40,
    height: 2,
    backgroundColor: '#222',
    transform: [{ rotate: '135deg' }],
  },
  forcaLegRight: {
    position: 'absolute',
    left: 132,
    top: 168,
    width: 40,
    height: 2,
    backgroundColor: '#222',
    transform: [{ rotate: '45deg' }],
  },
  wordRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: Spacing.four,
  },
  letterBox: {
    minWidth: 28,
    paddingVertical: Spacing.one,
    marginHorizontal: Spacing.one,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#444',
  },
  letterText: {
    fontSize: 22,
    fontWeight: '700',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: Spacing.three,
    marginHorizontal: -5,
  },
  key: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  keyDisabled: {
    opacity: 0.35,
    backgroundColor: '#D9D9D9',
  },
  keyPressed: {
    transform: [{ scale: 0.96 }],
  },
  keyText: {
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  errorText: {
    textAlign: 'center',
    marginBottom: Spacing.four,
  },
  resultCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 18,
    padding: Spacing.four,
    alignItems: 'center',
  },
  resultText: {
    fontWeight: '700',
    marginBottom: Spacing.one,
  },
  resultSubtext: {
    marginBottom: Spacing.three,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 12,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
  },
});
