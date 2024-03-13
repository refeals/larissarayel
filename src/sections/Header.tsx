import { motion } from "framer-motion"

import hero from "../assets/hero.png"
import heroMobile from "../assets/hero-mobile.png"

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, repeat: 0, delay: 0.3 }}
      className="w-full min-h-[600px] relative p-2 md:p-16 pb-20 flex items-center"
    >
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroMobile} />
          <source media="(min-width: 768px)" srcSet={hero} />
          <img
            src={hero}
            alt="Larissa Rayel"
            className="w-full h-full object-center md:object-top object-cover"
          />
        </picture>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] md:bg-inherit md:bg-gradient-to-r md:from-[rgba(0,0,0,0.5)] md:from-10% md:to-transparent" />

      <div className="absolute md:w-1/2 flex flex-col gap-8 text-center md:text-start bottom-[7%] md:bottom-auto">
        <h1 className="text-whitey text-3xl md:text-5xl font-bold">
          Larissa Rayel
        </h1>
        <h2 className="text-whitey opacity-65 text-xl font-medium">
          Clínica de Fisioterapia e Quiropraxia, atendendo com muito amor e
          dedicação para sanar sua dor!
        </h2>
        <a
          href="#agendar"
          className="bg-primary text-whitey text-base md:text-lg font-semibold p-4 rounded w-fit self-center md:self-auto"
        >
          Agende seu horário
        </a>
      </div>
    </motion.header>
  )
}
