import React, { createContext, useContext, useState } from 'react';

const lightTheme = {
  background: '#F5F5F5',
  text: '#333',
  button: '#007BFF',
};

const darkTheme = {
  background: '#222',
  text: '#FFF',
  button: '#FF5722',
};

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
