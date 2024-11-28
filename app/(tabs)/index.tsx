import { TodoListComponent } from '@/components/TodoList';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function TodoScreen() {
  return (
    <SafeAreaView>
      <TodoListComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
});