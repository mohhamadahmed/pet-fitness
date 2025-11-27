import React from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const SocialButton = ({ label, background, textColor }) => (
  <Pressable style={[styles.socialButton, { backgroundColor: background }]}>
    <Text style={[styles.socialLabel, { color: textColor }]}>{label}</Text>
  </Pressable>
);

const OutlineButton = ({ label }) => (
  <Pressable style={styles.outlineButton}>
    <Text style={styles.outlineLabel}>{label}</Text>
  </Pressable>
);

export default function App() {
  return (
    <LinearGradient
      colors={["#0f172a", "#111827", "#0b1324"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.badge}>Pet Fitness</Text>
          <Text style={styles.title}>Stronger bonds. Happier pets.</Text>
          <Text style={styles.subtitle}>
            Personalized workouts, smart reminders, and joyful milestones to keep your
            pet fit alongside you.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome back!</Text>
          <Text style={styles.cardSubtitle}>Choose how you want to connect</Text>

          <View style={styles.socialRow}>
            <SocialButton label="Connect with Google" background="#F6F7FB" textColor="#1f2937" />
            <SocialButton label="Connect with Facebook" background="#1877F2" textColor="#f8fafc" />
          </View>

          <View style={styles.dividerRow}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.authRow}>
            <SocialButton label="Sign in" background="#10b981" textColor="#f8fafc" />
            <OutlineButton label="Create account" />
          </View>

          <Text style={styles.helperText}>
            By continuing you agree to the Pet Fitness terms and confirm your pet gets
            extra treats after workouts.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.highlight}>Daily streak: 12 days • Next milestone: Park sprint</Text>
          <Text style={styles.footerCopy}>Stay motivated with gentle nudges and playful celebrations.</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 20,
  },
  header: {
    gap: 10,
    marginTop: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    color: '#34d399',
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 32,
    color: '#f8fafc',
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 16,
    lineHeight: 22,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 24,
    padding: 20,
    gap: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
  },
  cardTitle: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: '#94a3b8',
    fontSize: 14,
  },
  socialRow: {
    flexDirection: 'column',
    gap: 12,
  },
  socialButton: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLabel: {
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(148, 163, 184, 0.4)',
  },
  dividerText: {
    color: '#cbd5e1',
    fontWeight: '600',
  },
  authRow: {
    flexDirection: 'row',
    gap: 12,
  },
  outlineButton: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1.25,
    borderColor: 'rgba(148, 163, 184, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
  },
  outlineLabel: {
    color: '#e2e8f0',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  helperText: {
    color: '#94a3b8',
    fontSize: 12,
    lineHeight: 18,
  },
  footer: {
    gap: 6,
  },
  highlight: {
    color: '#34d399',
    fontWeight: '700',
    fontSize: 13,
    letterSpacing: 0.4,
  },
  footerCopy: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 18,
  },
});
