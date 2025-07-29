import { ThemeSwitcher } from '@/components/theme-switcher'
import { LoginForm } from '@/components/login-form'

export default function Home() {
  return (
    <div className="bg-[url(/bg.png)] bg-cover">
      <div className="min-h-dvh w-full flex flex-col items-center justify-center gap-60 bg-gradient-to-tr from-blue-900/40 via-blue-900/80 to-blue-900/40 ">
        <main>
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </main>

        <footer className="flex items-center justify-center text-center border-t w-full pt-8 text-gray-400">
          <p>
            Malu Enxovais 2025. <br /> Todos os diretos reservados. <br />
            <small>
              {' '}
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
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </div>
  )
}
