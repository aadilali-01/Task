import ContentPage from '@/components/Content/page'
import Footer from '@/components/Footer/page'
import NavPage from '@/components/Nav/page'
import React from 'react'

const page = () => {
  return (
    <>
      <NavPage/>
      <ContentPage />
      <Footer/>
    </>
  )
}

export default page