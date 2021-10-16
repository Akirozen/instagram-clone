import Head from 'next/head'
import { getProviders, signIn as SignIn } from 'next-auth/react'
import Header from '../../components/Header'

const signIn = ({ providers }) => {
  console.log(providers)

  return (
    <div className="">
      <Head>
        <title>Saimir's Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default signIn
