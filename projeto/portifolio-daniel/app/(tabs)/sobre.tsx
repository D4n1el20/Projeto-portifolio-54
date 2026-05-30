import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

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

export default function SobreScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Sobre o App
          </ThemedText>

          <View style={[styles.card, cardShadow]}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Tecnologias e dependências usadas
            </ThemedText>
            <View style={styles.list}>
              {[
                'Expo Router',
                'Expo SDK 54',
                'React Native',
                'TypeScript',
                'Expo Image',
                'Expo Splash Screen',
                'Expo Status Bar',
                'Expo Constants',
                'React Native Gesture Handler',
                'React Native Reanimated',
                'React Native Safe Area Context',
                'React Native Screens',
              ].map((tech) => (
                <ThemedText key={tech} style={styles.paragraph}>
                  • {tech}
                </ThemedText>
              ))}
            </View>
            <ThemedText style={styles.paragraph}>
              Esse app foi desenvolvido com Expo Router para gerenciar rotas internas e está totalmente integrado em telas nativas do Expo. Todas as páginas são parte do mesmo app, inclusive o jogo da forca.
            </ThemedText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  safeArea: { flex: 1 },
  container: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    alignItems: 'center',
  },
  title: {
    marginBottom: Spacing.four,
  },
  card: {
    width: '100%',
    maxWidth: MaxContentWidth,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: Spacing.four,
    elevation: 10,
  },
  sectionTitle: {
    marginBottom: Spacing.two,
  },
  list: {
    marginBottom: Spacing.three,
  },
  paragraph: {
    marginBottom: Spacing.two,
  },
});
