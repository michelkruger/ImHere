import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'

type Props = {
  name:string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }:Props) {

  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text style={styles.name}>
          { name }
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}