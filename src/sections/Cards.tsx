import { motion } from "framer-motion"

import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import { useMediaQuery } from "../hooks/useMediaQuery"

export const Cards = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-6 p-8">
      <Card
        imgUrl={img1}
        title="Fisioterapia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit sequi!"
        delay={0}
      />
      <Card
        imgUrl={img2}
        title="Fisioterapia"
        text="LoreLorem ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam quod ullam quas ratione itaque natus minus, facere maiores eius nisi velit et ducimus sequi dignissimos soluta aliquid ut saepe!"
        delay={0.2}
      />

      <Card
        imgUrl={img3}
        title="Fisioterapia"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quae. Laborum consequatur!"
        delay={0.4}
      />
    </section>
  )
}

type CardProps = {
  imgUrl: string
  title: string
  text: string
  delay: number
}

const Card = ({ title, text, imgUrl, delay }: CardProps) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)")

  const initial = isDesktop ? { y: "80%" } : { x: "-100%" }
  const animate = isDesktop ? { y: 0 } : { x: 0 }

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      animate={{ opacity: 1, ...animate }}
      transition={{ duration: 0.2, repeat: 0, delay: 0.6 + delay }}
      whileHover={{ scale: 1.05 }}
      className="grid auto-rows-cards max-w-[320px] shadow-xl rounded-3xl"
    >
      <img
        src={imgUrl}
        alt={title}
        className="h-[240px] rounded-t-3xl w-full object-cover object-bottom"
      />
      <div className="px-8 py-6 flex flex-col gap-2 items-start">
        <h3 className="text-primary font-bold text-lg">{title}</h3>
        <p className="text-blackey font-medium">{text}</p>
      </div>
    </motion.div>
  )
}
