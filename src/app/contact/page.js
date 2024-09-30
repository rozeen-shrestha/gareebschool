import CONTACT from '@/components/contact/page'
import CFOOTER from '@/components/footer/page'
import CNAV from '@/components/navbar/page'
import React from 'react'

const page = () => {
  return (
    <div>
    <CNAV/>
    <CONTACT/>
    <CFOOTER/>
    </div>
  )
}

export default page