import Head from 'next/head'
  import styles from '../styles/Home.module.css'
import Form from '../components/form';
import UserTable from '../components/userTable';
import prisma from "../db"; 
  
  
  export async function getServerSideProps(){
    let users = await prisma.user.findMany()
    users = JSON.parse(JSON.stringify(users))
    return {
      props: {
        initialContact: users
      }
    }
  }
export default function Home({initialContact}) {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="flex  h-screen  text-center">
          <Form/>
          <UserTable users={initialContact}/>
        </div>       

    </>
  )
}
