import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"
import ProjectCarousel from "@/components/ProjectCarousel"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-light text-black">Juan Andrés Botero Pavas</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#sobre-mi" className="text-gray-600 hover:text-black transition-colors">
                Sobre mí
              </a>
              <a href="#proyectos" className="text-gray-600 hover:text-black transition-colors">
                Proyectos
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-black transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diseño Industrial
            </p>
            <h2 className="text-4xl md:text-6xl font-light text-black mb-6">Soluciones funcionales y estéticamente atractivas</h2>
          </div>
        </div>
      </section>

      {/* Sobre mí Section */}
      <section id="sobre-mi" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light text-black mb-12 text-center">Sobre mí</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">

            <div className="h-96 flex items-center justify-center">
              <div className="h-full">
                <img
                  src="/about_profile.jpeg"
                  alt="Juan Andrés Botero - Diseñador Industrial"
                  className="h-full w-auto object-cover rounded-sm"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
  Soy <strong>Juan Andrés Botero Pavas</strong>, estudiante de octavo semestre de Diseño Industrial en la Universidad ICESI. Me apasiona crear productos que integren funcionalidad, sostenibilidad y estética, siempre con un enfoque centrado en el usuario.
</p>
              <p className="text-gray-700 leading-relaxed">
                A lo largo de mi formación, he participado en proyectos enfocados en el diseño de productos de consumo y mobiliario, explorando materiales y procesos que promuevan soluciones responsables con el entorno. Creo firmemente que el buen diseño debe ser accesible, duradero y respetuoso con el medio ambiente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mi enfoque combina la investigación de usuario, la experimentación con tecnologías y la búsqueda constante de propuestas que aporten valor real a las personas.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 px-6">
        <ProjectCarousel />
      </section>

      

      {/* Contacto Section */}
      <section id="contacto" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-light text-black mb-16 text-center">Contacto</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-light text-black mb-6">Hablemos de tu proyecto</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Estoy siempre interesado en nuevos desafíos de diseño y colaboraciones creativas. Si tienes un
                  proyecto en mente o simplemente quieres conversar sobre diseño, no dudes en contactarme.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">jbotero780@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">+57 314 837 3953</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700">Cali, Colombia</span>
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-600" />
                </a>
              </div>
            </div>

            {/* Formulario de contacto */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Nombre completo" className="border-gray-200 focus:border-gray-400" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Correo electrónico"
                      className="border-gray-200 focus:border-gray-400"
                    />
                  </div>
                  <div>
                    <Input placeholder="Asunto" className="border-gray-200 focus:border-gray-400" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      className="border-gray-200 focus:border-gray-400 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">Enviar mensaje</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">© 2025 Juan Andrés Botero Pavas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
