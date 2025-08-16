import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  user: {
    name: string;
    email: string;
    memberSince: string;
    level: string;
  } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Por defecto autenticado para mostrar perfil completo
  const [user, setUser] = useState<{
    name: string;
    email: string;
    memberSince: string;
    level: string;
  } | null>({
    name: 'Juan Pérez Delgado',
    email: 'juan.perez@email.com',
    memberSince: 'January 2024',
    level: 'KALLPA Explorer'
  });

  const login = (email: string, password: string) => {
    // Simulación de login - acepta cualquier valor
    setIsAuthenticated(true);
    setUser({
      name: 'Juan Pérez Delgado',
      email: email,
      memberSince: 'January 2024',
      level: 'KALLPA Explorer'
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}