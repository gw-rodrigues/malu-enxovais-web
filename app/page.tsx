'use client'

import { Button } from '@/components/ui/button'
import Logo from '@/app/logo.svg'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <div className="bg-[url(/bg.png)] bg-cover">
      <div className="min-h-dvh w-full flex flex-col items-center justify-center gap-8 bg-gradient-to-tr from-blue-700/80 via-blue-900/80 to-blue-700/80 ">
        <main>
          <Image src={Logo} width={300} height={200} alt="Malu Enxovais Logo" />
          <Button
            type="button"
            className="w-full mt-4"
            onClick={() => redirect('/auth/login')}
          >
            Login page
          </Button>
        </main>

        <footer className="flex flex-col items-center justify-center text-center w-full gap-4 text-gray-400">
          <small>
            Malu Enxovais 2025. Todos os diretos reservados. <br />
            desenvolvido por{' '}
            <a
              href="https://gwrodrigues.dev"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              gwrodrigues.dev
            </a>
          </small>
        </footer>
      </div>
    </div>
  )
}
