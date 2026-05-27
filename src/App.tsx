import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

function App() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] text-white">
      {/* Glow fundo */}
      <div className="absolute left-[-200px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute bottom-[-240px] right-[-180px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />

      {/* Conteúdo */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Título */}
        <h1 className="text-[3.5rem] font-black leading-[1] tracking-[-0.06em] sm:text-[5.5rem]">
          Bem-vindo ao{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Grivox
          </span>
        </h1>

        {/* Texto */}
        <p className="mt-6 max-w-[520px] text-[1.15rem] leading-[1.8] text-zinc-400">
          Baixe o aplicativo e tenha acesso à plataforma da Grivox.
        </p>

        {/* Botão download */}
        <a href="/gay.jpeg" download="gay.jpeg">
          <button className="group mt-14 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 px-14 py-6 text-[1.15rem] font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-all duration-300 hover:scale-[1.04]">
            <Download
              size={24}
              className="transition-transform duration-300 group-hover:-translate-y-[2px]"
            />

            Baixar imagem
          </button>
        </a>
      </motion.section>
    </main>
  )
}

export default App