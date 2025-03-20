import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { routes } from "@/router"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          {
            routes.map((route) =>
              <Route 
                key={route.id}
                path={route.path} 
                element={<route.component />} 
                exact={route.exact} 
              />
            )
          }
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
