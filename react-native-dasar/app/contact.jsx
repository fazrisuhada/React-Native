import { Colors } from "@/constants/Colors";
import { Fontisto } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Appearance, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const imgColor = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Fontisto name="coffeescript" size={250} color={imgColor} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Coffe Shop</Text>

        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text>Bandung Coffee</Text>
            <Text>Bandung City, KS 888-90834</Text>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Phone:{"\n"}
            <Link href={"#"} style={styles.link}>
              111-222-3333
            </Link>
            {"\n"}
            or{" "}
            <Link href={"#"} style={styles.link}>
              Click Here to WA!
            </Link>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Hours:{"\n"}
            <Text>Open 8am to 23p daily.</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      paddingTop: 0,
      flexGrow: 1,
    },
    imgContainer: {
      backgroundColor: colorScheme === "dark" ? "#353636" : "#D0D0D0",
      height: 250,
    },
    textContainer: {
      backgroundColor: theme.background,
      padding: 12,
    },
    title: {
      color: theme.text,
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: 32,
      marginBottom: 10,
    },
    textView: {
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
    },
    link: {
      textDecorationLine: "underline",
    },
  });
}
