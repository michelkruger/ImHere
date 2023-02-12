import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles'

import { Participant } from '../components/Participant';

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const handleParticipantAdd = () => {
    if(participants.includes(participantName)) {
      return Alert.alert('Participante existe', 'Já existe um participante com esse nome na lista.')
    }
    setParticipants( prevent => [...prevent, participantName] )
    setParticipantName('')
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert(`Remover`, `deseja remover ${name} da sua lista?`, [
      {
        text:'Não',
        style:'cancel'
      },
      {
        text:'Sim',
        onPress: () => { setParticipants( prevent => prevent.filter( participant => participant !== name)), Alert.alert('Removido!')} 
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textPrimary}>
        Nome do evento
      </Text>
      <Text style={styles.textSecundary}>
        sábado, 14 de janeiro de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <Participant
            key={`${index}+${item}`}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.WhitoutParticipant}>
            Ninguém cadastrado para o evento.
          </Text>
        )}
      />
    </View>
  );
}