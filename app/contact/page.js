import CenterText from '@/Reausable/CenterText'
import Topbar from '@/Reausable/Topbar'
import React from 'react'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaLocationArrow } from 'react-icons/fa'
import Fromfield from '@/components/Fromfield'
const cont = [
  {
    id: 1,
    icon: <AiFillPhone />,
    name: 'phone',
    idOne: ' (+91)-9990127407',
    idTwo: ' (+91)-8448925560'
  },

  {
    id: 2,
    icon: <MdEmail />,
    name: 'mail',
    idOne: ' vikash7522000@gmail.com',
    idTwo: ' Vikash844892@gmail.com'
  },
  {
    id: 3,
    icon: <FaLocationArrow />,
    name: 'phone',
    idOne: 'House no 28 , Palla Village',
    idTwo: 'Faridabad,Haryana,India'
  },




]

const Contcat = () => {
  return (
    <div>
      <Topbar >
        <CenterText title='Contact' tilte1='Home / contact' />
      </Topbar>
      <div className='container mx-auto my-12'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28011.248883443885!2d77.4105214!3d28.647556449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1695707095037!5m2!1sen!2sin" className='w-full h-[600px]  ' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {
          cont.map((value, index, array) => {
            return (
              <div key={index} className='border border-gray h-56 py-8 px-3 flex flex-col place-items-center gap-3' >
                <h1 className='text-3xl p-4 hover:bg-yellow rounded-full bg-black'>{value.icon} </h1>
                <h1 className='text-xl text-yellow uppercase'>{value.name} </h1>
                <div>
                  <h5>{value.idOne} </h5>
                  <h5>{value.idTwo} </h5>
                </div>
              </div>
            )
          })
        }
      </div>
      <Fromfield />
    </div>
  )
}

export default Contcat
