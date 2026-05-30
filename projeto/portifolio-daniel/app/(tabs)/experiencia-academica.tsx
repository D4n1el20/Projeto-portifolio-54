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

export default function ExperienciaAcademicaScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Experiência Acadêmica
          </ThemedText>

          <View style={[styles.card, cardShadow]}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Educação em andamento
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Cursando Ciência da Computação na Universidade Católica de Pernambuco.
            </ThemedText>

            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Projetos acadêmicos
            </ThemedText>
            <View style={styles.list}>
              <ThemedText style={styles.paragraph}>
                • Projeto extensionista na Biblioteca Caranguejo Tabaiares: Workshop de Cubo Mágico e Excel para crianças e funcionários.
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                • Projeto de API offline para equipe de robótica do Colégio Liceu Nóbrega de Artes e Ofícios, com mapa expansível estilo xadrez.
              </ThemedText>
              <ThemedText style={styles.paragraph}>
                • Desenvolvimento do Jogo da Forca como atividade de Programação Web e Mobile.
              </ThemedText>
            </View>
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
  title: { marginBottom: Spacing.four },
  card: {
    width: '100%',
    maxWidth: MaxContentWidth,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: Spacing.four,
    elevation: 10,
  },
  sectionTitle: { marginBottom: Spacing.two },
  paragraph: { marginBottom: Spacing.two },
  list: { marginBottom: Spacing.two },
});
