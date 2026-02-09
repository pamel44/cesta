import { Text, SafeAreaView  } from 'react-native';
import Sobrenome from './src/telas/sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text>hello!:)</Text>
      <Sobrenome sobrenome={'Pamela'}/>
    </SafeAreaView>
  );
}