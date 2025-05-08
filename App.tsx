"use client"

import { useEffect } from "react"
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
} from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Icon from "react-native-vector-icons/Feather"
import LinearGradient from "react-native-linear-gradient"

const { width } = Dimensions.get("window")

const App = () => {
  // Animations
  const floatingBubble1 = new Animated.ValueXY({ x: 0, y: 0 })
  const floatingBubble2 = new Animated.ValueXY({ x: 0, y: 0 })
  const floatingBubble3 = new Animated.ValueXY({ x: 0, y: 0 })
  const cardAnimation = new Animated.Value(0)
  const fadeInHeader = new Animated.Value(0)
  const fadeInHero = new Animated.Value(0)
  const fadeInQuickActions = new Animated.Value(0)
  const fadeInLogin = new Animated.Value(0)

  useEffect(() => {
    // Start animations
    Animated.timing(fadeInHeader, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()

    Animated.timing(fadeInHero, {
      toValue: 1,
      duration: 600,
      delay: 300,
      useNativeDriver: true,
    }).start()

    Animated.timing(fadeInQuickActions, {
      toValue: 1,
      duration: 600,
      delay: 500,
      useNativeDriver: true,
    }).start()

    Animated.timing(fadeInLogin, {
      toValue: 1,
      duration: 600,
      delay: 700,
      useNativeDriver: true,
    }).start()

    // Floating animations
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatingBubble1, {
          toValue: { x: 30, y: 15 },
          duration: 7500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatingBubble1, {
          toValue: { x: 0, y: 0 },
          duration: 7500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start()

    Animated.loop(
      Animated.sequence([
        Animated.timing(floatingBubble2, {
          toValue: { x: -20, y: 20 },
          duration: 9000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatingBubble2, {
          toValue: { x: 0, y: 0 },
          duration: 9000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start()

    Animated.loop(
      Animated.sequence([
        Animated.timing(floatingBubble3, {
          toValue: { x: 25, y: -15 },
          duration: 10000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatingBubble3, {
          toValue: { x: 0, y: 0 },
          duration: 10000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start()

    // 3D Card animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(cardAnimation, {
          toValue: 1,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(cardAnimation, {
          toValue: 0,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }, [])

  // Interpolate card animation values
  const cardRotateX = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["10deg", "0deg"],
  })

  const cardRotateZ = cardAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["-5deg", "0deg"],
  })

  const cardTranslateY = cardAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -5, 0],
  })

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f3ff" />

        {/* Background Floating Elements */}
        <View style={styles.backgroundContainer}>
          <Animated.View
            style={[
              styles.floatingBubble1,
              {
                transform: [{ translateX: floatingBubble1.x }, { translateY: floatingBubble1.y }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.floatingBubble2,
              {
                transform: [{ translateX: floatingBubble2.x }, { translateY: floatingBubble2.y }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.floatingBubble3,
              {
                transform: [{ translateX: floatingBubble3.x }, { translateY: floatingBubble3.y }],
              },
            ]}
          />
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Header */}
          <Animated.View style={[styles.header, { opacity: fadeInHeader }]}>
            <View style={styles.logoContainer}>
              <LinearGradient colors={["#7c3aed", "#4f46e5"]} style={styles.logoBackground}>
                <Icon name="book-open" size={20} color="#fff" />
              </LinearGradient>
              <Text style={styles.logoText}>EduSync</Text>
            </View>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="bell" size={20} color="#6d28d9" />
            </TouchableOpacity>
          </Animated.View>

          {/* Hero Section */}
          <Animated.View
            style={[
              styles.heroSection,
              {
                opacity: fadeInHero,
                transform: [{ translateY: fadeInHero.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }],
              },
            ]}
          >
            <Text style={styles.heroTitle}>
              Ta vie scolaire,{"\n"}
              <Text style={styles.heroTitleHighlight}>réinventée.</Text>
            </Text>
            <Text style={styles.heroSubtitle}>
              Organise tes cours, devoirs et activités en un seul endroit. Simple, intuitif et conçu pour toi.
            </Text>

            {/* 3D Card */}
            <Animated.View
              style={[
                styles.card3D,
                {
                  transform: [
                    { perspective: 1000 },
                    { rotateX: cardRotateX },
                    { rotateZ: cardRotateZ },
                    { translateY: cardTranslateY },
                  ],
                },
              ]}
            >
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardTitle}>Prochain cours</Text>
                  <Text style={styles.cardSubtitle}>Mathématiques - Salle B204</Text>
                  <View style={styles.cardTimeContainer}>
                    <Icon name="calendar" size={16} color="#c7d2fe" />
                    <Text style={styles.cardTime}>Aujourd'hui, 14:00 - 16:00</Text>
                  </View>
                </View>

                <View style={styles.cardFooter}>
                  <View style={styles.avatarGroup}>
                    <View style={[styles.avatar, { backgroundColor: "#818cf8", zIndex: 3 }]}>
                      <Text style={styles.avatarText}>JD</Text>
                    </View>
                    <View style={[styles.avatar, { backgroundColor: "#a5b4fc", marginLeft: -10, zIndex: 2 }]}>
                      <Text style={styles.avatarText}>ML</Text>
                    </View>
                    <View style={[styles.avatar, { backgroundColor: "#c7d2fe", marginLeft: -10, zIndex: 1 }]}>
                      <Text style={styles.avatarText}>+3</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.cardButton}>
                    <Text style={styles.cardButtonText}>Voir détails</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Animated.View>
          </Animated.View>

          {/* Quick Actions */}
          <Animated.View
            style={[
              styles.quickActions,
              {
                opacity: fadeInQuickActions,
                transform: [
                  { translateY: fadeInQuickActions.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) },
                ],
              },
            ]}
          >
            <Text style={styles.sectionTitle}>Accès rapide</Text>
            <View style={styles.quickActionsGrid}>
              <TouchableOpacity activeOpacity={0.9}>
                <LinearGradient colors={["#ec4899", "#f43f5e"]} style={styles.quickActionItem}>
                  <View style={styles.quickActionIcon}>
                    <Icon name="calendar" size={20} color="#fff" />
                  </View>
                  <Text style={styles.quickActionText}>Emploi du temps</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.9}>
                <LinearGradient colors={["#f59e0b", "#ea580c"]} style={styles.quickActionItem}>
                  <View style={styles.quickActionIcon}>
                    <Icon name="file-text" size={20} color="#fff" />
                  </View>
                  <Text style={styles.quickActionText}>Mes devoirs</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.9}>
                <LinearGradient colors={["#10b981", "#0d9488"]} style={styles.quickActionItem}>
                  <View style={styles.quickActionIcon}>
                    <Icon name="message-square" size={20} color="#fff" />
                  </View>
                  <Text style={styles.quickActionText}>Messages</Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.9}>
                <LinearGradient colors={["#3b82f6", "#06b6d4"]} style={styles.quickActionItem}>
                  <View style={styles.quickActionIcon}>
                    <Icon name="award" size={20} color="#fff" />
                  </View>
                  <Text style={styles.quickActionText}>Notes</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </Animated.View>

          {/* Login/Signup Section */}
          <Animated.View
            style={[
              styles.loginSection,
              {
                opacity: fadeInLogin,
                transform: [{ translateY: fadeInLogin.interpolate({ inputRange: [0, 1], outputRange: [40, 0] }) }],
              },
            ]}
          >
            <View style={styles.loginCard}>
              <Text style={styles.loginTitle}>Commence dès maintenant</Text>
              <Text style={styles.loginSubtitle}>Connecte-toi pour accéder à tous tes cours et activités</Text>

              <TouchableOpacity activeOpacity={0.8}>
                <LinearGradient colors={["#7c3aed", "#4f46e5"]} style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>Se connecter</Text>
                  <Icon name="chevron-right" size={16} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.8}>
                <Icon name="user" size={16} color="#6d28d9" />
                <Text style={styles.secondaryButtonText}>Créer un compte</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.textLink}>
                <Text style={styles.textLinkText}>Continuer en tant qu'invité</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.quote}>« Organise ta réussite, chaque jour. »</Text>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f3ff", // violet-50
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  },
  floatingBubble1: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: "#c4b5fd", // violet-300
    opacity: 0.2,
    top: "10%",
    left: "15%",
  },
  floatingBubble2: {
    position: "absolute",
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#93c5fd", // blue-300
    opacity: 0.2,
    top: "30%",
    right: "10%",
  },
  floatingBubble3: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#a5b4fc", // indigo-300
    opacity: 0.2,
    bottom: "15%",
    left: "25%",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 16,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoBackground: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  logoText: {
    marginLeft: 12,
    fontSize: 24,
    fontWeight: "bold",
    color: "#6d28d9", // violet-700
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  heroSection: {
    paddingHorizontal: 24,
    paddingTop: 16,
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b", // slate-800
    marginBottom: 12,
  },
  heroTitleHighlight: {
    color: "#6d28d9", // violet-700
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#64748b", // slate-500
    marginBottom: 24,
    lineHeight: 24,
  },
  card3D: {
    width: "100%",
    height: 180,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  cardContent: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#e0e7ff", // indigo-100
    marginTop: 4,
  },
  cardTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  cardTime: {
    fontSize: 14,
    color: "#e0e7ff", // indigo-100
    marginLeft: 8,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatarGroup: {
    flexDirection: "row",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#4f46e5", // indigo-600
  },
  avatarText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  cardButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  cardButtonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#fff",
  },
  quickActions: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b", // slate-800
    marginBottom: 16,
  },
  quickActionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  quickActionItem: {
    width: (width - 48 - 12) / 2, // Screen width - padding - gap
    height: 100,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  quickActionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  loginSection: {
    paddingHorizontal: 24,
    marginTop: "auto",
    marginBottom: 24,
  },
  loginCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    marginBottom: 16,
  },
  loginTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1e293b", // slate-800
    marginBottom: 8,
  },
  loginSubtitle: {
    fontSize: 14,
    color: "#64748b", // slate-500
    marginBottom: 16,
  },
  primaryButton: {
    flexDirection: "row",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
    marginRight: 8,
  },
  secondaryButton: {
    flexDirection: "row",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd6fe", // violet-200
    backgroundColor: "transparent",
    marginBottom: 16,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6d28d9", // violet-700
    marginLeft: 8,
  },
  textLink: {
    alignItems: "center",
  },
  textLinkText: {
    fontSize: 12,
    color: "#6d28d9", // violet-700
    textDecorationLine: "underline",
  },
  quote: {
    textAlign: "center",
    fontSize: 12,
    color: "#64748b", // slate-500
    fontStyle: "italic",
    marginTop: 8,
  },
})

export default App
