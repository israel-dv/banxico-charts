// import { Inter } from 'next/font/google'
import { log } from 'console'
import Head from 'next/head'
import { useState } from 'react'

import { ListSeries } from 'src/components/ListSeries'
import { RoundedButton } from 'src/components/RoundedButton'
import { SwitchOption } from 'src/components/SwitchOption'
import { useGetSeries } from 'src/hooks/useGetSeries'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isEmptyList, setIsEmptyList] = useState<boolean>(false)
  const [selectedSeries, setSelectedSeries] = useState<string[]>([])
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  const { data: series, isLoading } = useGetSeries({ onError: () => setIsEmptyList(true) })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full h-f flex items-center flex-col">
        <div className="mt-52">
          <h1 className="text-3xl bold text-center py-8">Welcome to Banxico Charts.</h1>
          <p className="pb-8 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo quaerat odio,
            odit labore pariatur nesciunt ut voluptatem laboriosam omnis accusantium rem optio.
            Molestiae nobis commodi quos eveniet esse voluptatum.
          </p>
        </div>
        {series ? (
          <ListSeries
            isLoading={isLoading}
            series={series.data}
            isEmpty={isEmptyList}
            setSeries={setSelectedSeries}
          />
        ) : (
          <div>error</div>
        )}
        <div className="w-full py-7 flex justify-end">
          <RoundedButton
            disabled={selectedSeries.length === 0}
            onClick={() => setIsShowModal((showModal) => !showModal)}
          >
            Next
          </RoundedButton>
        </div>
        {isShowModal ? (
          <div className="h-full w-full bg-gray-opacity absolute flex justify-center items-center">
            <div className="h-2/3 w-1/2 bg-gray-50 flex flex-col px-11 py-16 rounded-xl">
              <SwitchOption optionA="Table" optionB="Chart" className="my-1" />
              <div className="flex w-full justify-between">
                <RoundedButton
                  onClick={() => setIsShowModal((showModal) => !showModal)}
                  disabled={false}
                  className="bg-blue-400 text-white text-center justify-center w-full mr-5"
                >
                  CLOSE
                </RoundedButton>
                <RoundedButton
                  onClick={() => setIsShowModal((showModal) => !showModal)}
                  disabled={false}
                  className="bg-black text-white text-center justify-center w-full"
                >
                  APPLY
                </RoundedButton>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </>
  )
}
