import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

function Overlay() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        textAlign: 'center',
        pointerEvents: 'none',
        userSelect: 'none',
        fontSize: '13px',
        opacity: 0.7,
        mixBlendMode: 'difference'
      }}>
      [ - GALLERY - ]
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
  </>
)
