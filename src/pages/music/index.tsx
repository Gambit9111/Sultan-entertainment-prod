import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '../_app'
import Layout from '../../components/layout'

const Home: NextPageWithLayout  = () => {
    return (
      <>
        <main>
          <h1 className='text-myWhite'>MUSIC INDEX</h1>
        </main>
      </>
    );
  };
  
  Home.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
  
  export default Home;