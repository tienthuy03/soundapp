import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tts from 'react-native-tts'
interface textProps {
  id: number,
  word: string

}
const App = () => {
  const [ttsInitialized, setTtsInitialized] = useState(false); // Track TTS initialization
  const [selectedLanguage, setSelectedLanguage] = useState('vi');
  const [rate, setRate] = useState(1); // Tốc độ đọc
  const [volume, setVolume] = useState(1); // Âm lượng
  const languages = {
    vi: 'vi-VN',
    en: 'en-US',
  };
  const itemnText = ({ item }: { item: textProps }) => {
    return (
      <Pressable style={{
        width: '100%', height: 40,
        backgroundColor: "yellow", marginBottom: 16
      }} onPress={() => speakText(item.word)}>
        <Text>{item.word}</Text>
      </Pressable>
    )
  }

  const initializeTts = async () => {
    const result = await Tts.getInitStatus(); //lấy trạng thái trong tts dâc chuyển đổi thành công sang giọng nói chưa
    if (result === 'success') {
      //nếu thành công sẽ xét trạng thái thành true
      setTtsInitialized(true);
    }
  };
  useEffect(() => {
    initializeTts();
  }, []);
  const speakText = (word: string) => {
    if (ttsInitialized) {
      Tts.speak(word
      );
    } else {
      console.log('TTS engine not yet initialized. Text will not be spoken.');
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={itemnText} />
  )
}

export default App

const styles = StyleSheet.create({})

const data = [
  {
    id: 1,
    word: 'Cow'
  },
  {
    id: 2,
    word: 'Chicken'
  },
  {
    id: 3,
    word: 'Bee'
  },
  {
    id: 4,
    word: 'Wolk'
  },
  {
    id: 5,
    word: 'Bird'
  },
  {
    id: 6,
    word: 'Sheep'
  },

  {
    id: 7,
    word: ' Earthworm'
  },
]