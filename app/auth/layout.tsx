import { ThemeSwitcher } from '@/components/theme-switcher'

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[url(/bg.png)] bg-cover">
      <div className="min-h-dvh w-full flex flex-col items-center justify-center gap-8 bg-gradient-to-tr from-blue-700/80 via-blue-900/80 to-blue-700/80 ">
        <main>{children}</main>

        <footer className="flex items-center justify-center text-center w-full gap-4 text-gray-400">
          <p>
            <small>
              Malu Enxovais 2025. <br /> Todos os diretos reservados. <br />{' '}
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
