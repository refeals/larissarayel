import { Instagram } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-primary p-12 flex gap-2 justify-between text-whitey">
      <div>
        <p className="text-base">Larissa Rayel Fisioterapeuta</p>
        <p className="text-base">Rua Virgilio Pozzi, 404s</p>
        <p className="text-base">São Carlos, SP</p>
      </div>
      <div>
        <a
          href="https://www.instagram.com/larissarayelfisio/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="flex gap-2 items-center"
        >
          Instagram <Instagram size={24} />
        </a>
      </div>
    </footer>
  )
}
