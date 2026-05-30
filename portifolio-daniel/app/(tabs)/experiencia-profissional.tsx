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

export default function ExperienciaProfissionalScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <ThemedText type="title" style={styles.title}>
            Experiência Profissional
          </ThemedText>

          <View style={[styles.card, cardShadow]}>
            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Experiência profissional
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Jovem Aprendiz Administrativo do Financeiro na ASA Indústria.
            </ThemedText>
            <View style={styles.list}>
              <ThemedText style={styles.paragraph}>• Criação de borderôs</ThemedText>
              <ThemedText style={styles.paragraph}>• Comparação de dados</ThemedText>
              <ThemedText style={styles.paragraph}>• Uso de tabelas em Excel</ThemedText>
            </View>
            <ThemedText style={styles.paragraph}>
              Nessas atividades, aprimorei o controle de processos administrativos e o trabalho com dados, além de desenvolver disciplina e atenção aos detalhes.
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
