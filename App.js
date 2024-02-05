import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require('./assets/1.jpg')} style={styles.profileImage} />
        <Text style={styles.textName}>Diego Zarazúa Zarazúa</Text>
        <Text style={styles.textTitle}>Desarrollador de Software</Text>

        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>Experiencia Laboral</Text>
          <Text style={styles.seccionContenido}>
          -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          <Text style={styles.seccionContenido}>
          -Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>Educación</Text>
          <Text style={styles.seccionContenido}>
            Ingeniería en Software - UAQ (2021-2024)
          </Text>
          <Text style={styles.seccionContenido}>
            Tecnico en Soporte y mantenimiento de equipos de computo
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionTitulo}>Habilidades Técnicas</Text>
          <Text style={styles.seccionContenido}>
            - JavaScript, HTML, CSS
          </Text>
          <Text style={styles.seccionContenido}>- python</Text>
          <Text style={styles.seccionContenido}>- C++</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  textName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  textTitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  seccion: {
    marginBottom: 20,
    width: '100%',
  },
  seccionTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  seccionContenido: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
