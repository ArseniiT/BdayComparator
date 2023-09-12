import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import Person from './components/Person';
import Button from './components/Button';

const styles = StyleSheet.create({
  container: {
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is the Birthday comparator app</Text>
      <Person
        title='Base user'
        imageUrl='https://cdn-icons-png.flaticon.com/512/2641/2641391.png'
      />
      <Button style={styles.addButton}
        title='Add new person'
        // imageUrl='https://cdn.icon-icons.com/icons2/1760/PNG/512/4105962-add-expand-plus_113920.png'
      />
      <StatusBar style="auto" />
    </View>
  );
}
