import { Link, Outlet } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar />
      <main className='min-h-screen transition-colors duration-300 bg-white dark:bg-gray-800'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App