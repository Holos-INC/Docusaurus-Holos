# Ejemplos de navegación segura
## 1. `roles.ts`
```tsx
export enum UserRole {
  ADMIN = 'admin',
  ARTIST = 'artist',
  CLIENT = 'client',
}

export const PERMISSIONS = {
  [UserRole.ADMIN]: ['view_dashboard', 'manage_users', 'edit_artworks'],
  [UserRole.ARTIST]: ['view_dashboard', 'upload_artwork'],
  [UserRole.CLIENT]: ['view_dashboard', 'request_commission'],
};
```

## 2. `AuthContext.tsx`
```tsx
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { UserRole } from '../constants/roles';

interface AuthContextType {
  userRole: UserRole | null;
  setUserRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
```

## 3. `withPermission.tsx`
```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { PERMISSIONS, UserRole } from '../constants/roles';

type WithPermissionProps = {
  requiredPermission: string;
  children: React.ReactNode;
};

export const WithPermission: React.FC<WithPermissionProps> = ({ requiredPermission, children }) => {
  const { userRole } = useAuth();

  if (!userRole || !PERMISSIONS[userRole].includes(requiredPermission)) {
    return (
      <View>
        <Text>No tienes permiso para ver esta página</Text>
      </View>
    );
  }

  return <>{children}</>;
};
```

## 4. `AppNavigator.tsx`
```tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { AdminDashboard } from '../screens/AdminDashboard';
import { WithPermission } from '../components/WithPermission';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AdminDashboard"
          children={() => (
            <WithPermission requiredPermission="manage_users">
              <AdminDashboard />
            </WithPermission>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

## 5. `userService.ts`
```tsx
import axios from 'axios';
import { API_URL } from '../constants/config';
import { useAuth } from '../contexts/AuthContext';

export const getUserData = async () => {
  const { userRole } = useAuth();
  if (userRole !== 'admin') throw new Error('No tienes permiso para acceder a estos datos');

  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
```