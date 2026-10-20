import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  const N = 13;
  const jam = 9;
  const gayaJudul = {color: '#1F3A5F', fontSize: '20px'}
  return (
    <>
      <section id="panel">
        <div>
          <h1 className='judul'style={gayaJudul}>Kantin Arya</h1>
          <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
          <p>Saldo Awal Kartu Kantin: Rp{(N * 1000)}</p>
        </div>
        <button disabled
          type="Bayar"
          className="btn-bayar"
        > Bayar
        </button>
      </section>
    </>
  )
}

export default App
