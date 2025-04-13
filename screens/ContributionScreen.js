import React from 'react'
import { Linking, Pressable, Text, View , StyleSheet} from 'react-native'

export default function ContributionScreen() {

  const backendRepositoryUrl = "https://github.com/Rahul12KumarSingh/DeviceConectr-Backend";
  const frontendRepositoryUrl = "https://github.com/Rahul12KumarSingh/DeviceConnector";


  return (
    <View style={styles.container} >
      <Text style={styles.title}>
        Want to contribute to this project?
      </Text>

      <Text style={styles.description}>
        We are open to contributions! If you want to contribute to this project, We will be happy to accept your contributions .
      </Text>


      <View style={styles.repoContainer}>
        <Text style={styles.repoTitle}  >
          backend Repository
        </Text>

        <Pressable
          onPress={() => Linking.openURL(backendRepositoryUrl)}
        >
          <Text style={styles.link}>
            {backendRepositoryUrl}
          </Text>
        </Pressable>

        <Text style={styles.repoTitle}>
          Frontend Repository
        </Text>

        <Pressable
          onPress={() => Linking.openURL(frontendRepositoryUrl)}
        >
          <Text style={styles.link}>
            {frontendRepositoryUrl}
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    color: '#dcdcdc',
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'center',
    lineHeight: 22,
  },
  repoContainer: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
  },
  repoTitle: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  link: {
    color: '#00bfff',
    fontSize: 15,
    textDecorationLine: 'underline',
    marginBottom: 18,
  },
});
