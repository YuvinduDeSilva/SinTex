import { lazy, Suspense } from 'react'
import { Box } from '@mui/material'
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'))
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'))
const CompliancePage = lazy(() => import('./pages/CompliancePage'))
const DemoPage = lazy(() => import('./pages/DemoPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))

function PageLoadingFallback() {
  return (
    <Box sx={{ minHeight: '40vh' }} />
  )
}

function AppLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleGetStarted = () => {
    navigate('/demo')
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'clip',
        background:
          'radial-gradient(1200px 560px at 84% -12%, rgba(31, 177, 122, 0.18), transparent 58%), radial-gradient(920px 420px at 0% 0%, rgba(16, 63, 86, 0.11), transparent 68%), #f2efe5',
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: 420,
          height: 420,
          top: 180,
          right: -130,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15, 143, 98, 0.15) 0%, rgba(15, 143, 98, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          width: 360,
          height: 360,
          bottom: 120,
          left: -120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15, 63, 86, 0.13) 0%, rgba(15, 63, 86, 0) 72%)',
          pointerEvents: 'none',
        }}
      />
      <Header onGetStarted={handleGetStarted} />
      <Box component="main" key={location.pathname} className="anim-page-enter" sx={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}

function App() {
  return (
    <Routes>
      <Route
        element={(
          <Suspense fallback={<PageLoadingFallback />}>
            <AppLayout />
          </Suspense>
        )}
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
