import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster
        position="top-right"
        duration={1000}
        toastOptions={{
          style: {
            backgroundColor: '#fb5770',
            color: '#ffffff',
            borderRadius: '8px',
          },
        }}
      />
    </Provider>
  </StrictMode>,
)
