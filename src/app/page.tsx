import Slider from '@/components/slider'
import Featured from '@/components/featured'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='min-h-[calc(100vh-6rem)] h-auto'>
      <Slider/>
      <Featured/>
    </div>
  )
}
