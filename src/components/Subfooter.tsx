import keneBed from '@/assets/images/Kene-bed.png'
import keneWhite from '@/assets/images/kene-white.png'
import keneSipping from '@/assets/images/kene-sipping.png'
import girlGreen from '@/assets/images/girl-green.png'
import keneYellow from '@/assets/images/kene-yellow.png'

const Subfooter = () => {
  return (
    <div className='flex w-full overflow-clip'>
        <img src={keneBed} alt="Selfie of a girl on bed" className='w-[20%] h-auto'/>
        <img src={keneWhite} alt="A lady reading newspaper" className='w-[20%] h-auto'/>
        <img src={keneSipping} alt="A lady sipping a drink" className='w-[20%] h-auto'/>
        <img src={girlGreen} alt="A lady in green" className='w-[20%] h-auto'/>
        <img src={keneYellow} alt="A lady in yellow" className='w-[20%] h-auto'/>
      </div>
  )
}

export default Subfooter
