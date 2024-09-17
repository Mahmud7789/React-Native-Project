import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FlatCards from './components/FlatCards';
import ElivetedCard from './components/ElivetedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView>
        <ScrollView style={{backgroundColor:'#373A40'}}>
            <FlatCards/>
            <ElivetedCard/>
            <FancyCard/>
            <ContactList/>
            <ActionCard/>
        </ScrollView>
    </SafeAreaView>
  );
}


