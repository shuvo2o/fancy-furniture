import { Link, Outlet } from 'react-router-dom'
import { useEffect, useContext } from 'react' 
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeProvider, ThemeContext } from './context/ThemeContext' 

function AppContent() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    // এই অংশটিই আপনার HTML ট্যাগে dark ক্লাস বসাবে
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar />
      {/* dark:bg-gray-900 যোগ করা হয়েছে যাতে পুরো ব্যাকগ্রাউন্ড কালো হয় */}
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
      <AppContent />
    </ThemeProvider>
  )
}

export default App