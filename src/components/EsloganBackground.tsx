import '@/styles/eslogan.css'
import LogoRumcoHeader from '../../public/icons/logoRumco.svg'
import Image from 'next/image'

export const EsloganBackground = () => {
  return (
    <>
      {/* <img src="https://lh3.googleusercontent.com/pw/AP1GczOgVAV7ZgOwWd0JNeMyu6RrQ6SpqeJo93mxWdn9jOwI3sWZWvFHNyskGEocYNVnvlabXMzQI-KjjMoPSWOxbKN8vls2I2v6pJQtLaINTxP2R9r1jhRt_1-qcpg6_vM42bUnBK6MNG2bI7d5h5CAcAk=w1440-h785-s-no-gm?authuser=0" alt="edificio en construcion" className='fondo-fixed'/> */}
      <Image 
      src="https://lh3.googleusercontent.com/pw/AP1GczOgVAV7ZgOwWd0JNeMyu6RrQ6SpqeJo93mxWdn9jOwI3sWZWvFHNyskGEocYNVnvlabXMzQI-KjjMoPSWOxbKN8vls2I2v6pJQtLaINTxP2R9r1jhRt_1-qcpg6_vM42bUnBK6MNG2bI7d5h5CAcAk=w1440-h785-s-no-gm?authuser=0"
      alt='edificio en construcion'
      fill
      className='fondo-fixed'
      />
      <section className='header-rumco-eslogan'>
        <LogoRumcoHeader className='logo-rumco'/>
          <h1 className='eslogan-title'>Tu hogar perdura en el tiempo y abraza tu historia con cada uno de sus detalles</h1>
      </section>
    </>

  )
} 
 