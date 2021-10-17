import Head from 'next/head'
import { getProviders, signIn as SignIn } from 'next-auth/react'
import Header from '../../components/Header'
import Image from 'next/image'

const signIn = ({ providers }) => {
  // console.log(providers)

  return (
    <div className="">
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img src="/images/insta-text.png" alt="" className="w-80" />
        <p className="text-sm italic ">
          This is not a REAL app. It is built only for educational purposes.
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => SignIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
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
