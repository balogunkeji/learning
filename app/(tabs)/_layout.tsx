import { Tabs } from 'expo-router';
import React from 'react';
import { Home, Musicnote, Profile2User, Setting2 } from 'iconsax-react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { paddingTop: 16, backgroundColor: '#fff', height: 85, borderTopWidth: 0,  display: 'flex', justifyContent: 'center', alignItems: 'center' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <Home size="32" color="#371B34" variant="Bold"/>
            ) : (
              <Home size="32" color="#CDD0E3"/>)
          ),
        }}
      />
      <Tabs.Screen
        name="music"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <Musicnote size="32" color="#371B34" variant="Bold"/>
            ) : (
              <Musicnote size="32" color="#CDD0E3"/>)
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <Profile2User size="32" color="#371B34" variant="Bold"/>
            ) : (
              <Profile2User size="32" color="#CDD0E3"/>)
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            focused ? (
              <Setting2 size="32" color="#371B34" variant="Bold"/>
            ) : (
              <Setting2 size="32" color="#CDD0E3"/>)
          ),
        }}
      />
    </Tabs>
  );
}
