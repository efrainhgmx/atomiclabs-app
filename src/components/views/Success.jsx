import React from 'react';
import { Footer, Header } from '../molecules';
import { SuccessSection } from '../organisms';

const Success = () => {
  return (
   <>
      <main className='Success'>
        <Header />
        <SuccessSection />
    </main>
    <Footer />
   </>
  )
}

export default Success