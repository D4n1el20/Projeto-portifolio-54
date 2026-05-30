import { Image, Platform, ScrollView, StyleSheet, View } from 'react-native';
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

export default function HomeScreen() {
  return (
    <ThemedView style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View style={[styles.card, cardShadow]}>
            <Image
              source={require('../../assets/images/Minha-Foto.jpeg')}
              style={styles.photo}
            />

            <ThemedText type="title" style={styles.title}>
              Daniel Silva Costa
            </ThemedText>

            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Resumo
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Estudante de Ciência da Computação com projetos em web e mobile, buscando oportunidades em desenvolvimento de software.
            </ThemedText>

            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Habilidades
            </ThemedText>
            <View style={styles.list}>
              {[
                'Inglês intermediário',
                'Programação em Python',
                'Excel básico',
                'Programação em C',
                'Programação em Java',
                'Programação em HTML',
              ].map((item) => (
                <ThemedText key={item} style={styles.paragraph}>
                  • {item}
                </ThemedText>
              ))}
            </View>

            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Educação
            </ThemedText>
            <ThemedText style={styles.paragraph}>
              Cursando Ciência da Computação na Universidade Católica de Pernambuco.
            </ThemedText>

            <ThemedText type="subtitle" style={styles.sectionTitle}>
              Contato
            </ThemedText>
            <ThemedText style={styles.paragraph}>daniel1405costa@gmail.com</ThemedText>
            <ThemedText style={styles.paragraph}>WhatsApp: 81 99344-2633</ThemedText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#AB2E3B',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.four,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    maxWidth: MaxContentWidth,
    backgroundColor: '#AB2E3B',
    borderRadius: 24,
    padding: Spacing.four,
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 100,
    marginBottom: Spacing.four,
    alignSelf: 'center',
  },
  title: {
    marginBottom: Spacing.three,
    color: '#ffffff',
    textAlign: 'center',
  },
  sectionTitle: {
    marginTop: Spacing.four,
    marginBottom: Spacing.one,
    color: '#ffffff',
  },
  paragraph: {
    marginBottom: Spacing.two,
    color: '#ffffff',
    lineHeight: 22,
  },
  list: {
    marginBottom: Spacing.two,
  },
});
