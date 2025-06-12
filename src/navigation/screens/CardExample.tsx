import { Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import FancyCard from "../../component/FancyCard";

export function CardExample() {
  return (
    <FancyCard/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
