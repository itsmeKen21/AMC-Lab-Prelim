import React, {useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
    const [currentSection, setCurrentSection] = useState('name');

    const resumeData = {
        imageUrl: require('./assets/IDPIC1.png'),
        name: 'Jhon Kenneth G. Laurel',
        course: 'Bachelor of Science in Information Technology',
        education: {
          elementary: 'Kasarinlan Elementary School',
          elementaryYear: '2007',
          highschool: 'Kasarinlan High School',
          highschoolYear: '2014',
          college: 'Global Reciprocal Colleges',
          collegeYear: '2024',
        },
        about: '',
        projects: {

        },
        contact: '09462388076',
        email: 'ken.lau021@gmail.com',

      }

    const handlePress = () => {
      setCurrentSection((prevSection) => {
        switch (prevSection) {
          case 'name':
            return 'education';
          case 'education':
            return 'about';
          case 'about':
            return 'projects';
          case 'projects':
            return 'projects1';
          case 'projects1':
            return 'contact';
          case 'contact':
            return 'name';
          default:
            return 'name';
        }
      });
    };

    return (
      <SafeAreaView style={{ flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
              {currentSection === 'name' && (
                <>
                  <Image source={resumeData.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.header}>{resumeData.name}</Text>
                    <Text style={styles.info}>{resumeData.course}</Text>
                  </View>
                </>
              )}

              {currentSection === 'education' && (
                <>
                  <Image source={resumeData.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.header}>{resumeData.elementary}</Text>
                    <Text style={styles.info}>{resumeData.elementaryYear}</Text>
                  </View>
                </>
              )}
              {currentSection === 'contact' && (
                <>
                  <Image source={resumeData.imageUrl} style={styles.image} />
                  <View style={styles.textContainer}>
                    <Text style={styles.header}>{resumeData.contact}</Text>
                    <Text style={styles.info}>{resumeData.email}</Text>
                  </View>
                </>
              )}
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  contentContainer: {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    textAlign: 'justify',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
  },
  info: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
  },
  image: {
    borderRadius: '50%',
    width: 200,
    height: 200,
    marginBottom: 20,
  }
});

export default App;