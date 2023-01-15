import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

import { Participant } from '../components/Participant';

export function Home() {

  const participants = ['Michel', 'Gabriele', 'Cristiano']

  const handleParticipantAdd = () => {
    alert('oi')
  }

  const handleParticipantRemove = (name: string) => {
    alert(`você removeu ${name}`)
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