
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio con una web lista al instante y soporte 24/7." cta1="Comienza Ahora" />
<How step1Title="Comparte tus metas" step1Desc="Cuéntanos sobre tu negocio y objetivos." step2Title="Creamos tu sitio" step2Desc="Diseñamos una web enfocada en ventas digitales." step3Title="Lanzamiento 24h" step3Desc="Tu sitio operativo en un día con soporte continuo." />
<Aboutus headline="WebGo: Digitaliza tus Ventas Ahora" subheadline="Transformamos ventas tradicionales en online eficientemente, sin complicaciones ni pérdida de tiempo." beneficiotitulo1="Implementación Rápida" beneficio1="Digitaliza ventas en días, no meses." beneficiotitulo2="Gestión Sencilla" beneficio2="Nos ocupamos mientras tú te enfocas." />
<Services heading="Transforma tu Negocio Digitalmente en 24 Horas" description="Optimizamos tus ventas online sin que te preocupes por el tiempo." services={[{"name":"Diseño Express","icon":"bolt","description":"Webs de ventas en menos de 24 horas."},{"name":"SEO Optimización","icon":"search","description":"Aumenta tu visibilidad online rápidamente."},{"name":"Mantenimiento 24/7","icon":"tools","description":"Soporte continuo para tu sitio web."},{"name":"Integración de Pagos","icon":"credit-card","description":"Facilita transacciones seguras y rápidas."},{"name":"Gestión de Contenido","icon":"file-alt","description":"Actualizamos tu contenido para atraer clientes."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Conoce el comportamiento de tus clientes."}]} />
<BeforeAndAfter subheadline="Transformamos visiones digitales en realidades impactantes y exitosas." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender online si solo vendo por recomendación?","respuesta":"WebGo te ayuda a digitalizar tus ventas al crear un sitio web atractivo y fácil de usar. Así, tus clientes pueden encontrarte en línea y comprar tus productos fácilmente, lo que aumenta tus ventas sin depender únicamente de recomendaciones."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿qué solución ofrece WebGo?","respuesta":"WebGo se encarga de todo por ti. Diseñamos y gestionamos tu sitio web para que puedas centrarte en lo que mejor haces: tu negocio. Te mantenemos informado, pero sin abrumarte con tareas técnicas."},{"pregunta":"¿Qué beneficios obtengo al digitalizar mi negocio con WebGo?","respuesta":"Al trabajar con WebGo, obtienes más visibilidad en la web, lo que significa más clientes potenciales. Además, un sitio web bien diseñado mejora la confianza del cliente y facilita las ventas online, lo que impulsa el crecimiento de tu negocio."},{"pregunta":"¿Cómo me aseguro de que mi inversión en un sitio web valga la pena?","respuesta":"WebGo se enfoca en crear sitios web optimizados para conversiones. Eso significa que tu sitio está diseñado para atraer y retener clientes, asegurando que cada visita tenga el potencial de convertirse en una venta."},{"pregunta":"¿Cómo manejará WebGo el proceso de digitalización si no conozco mucho de tecnología?","respuesta":"No te preocupes, WebGo simplifica todo el proceso. Nuestro equipo te guiará paso a paso, explicando cada aspecto de manera sencilla, para que puedas disfrutar de los beneficios de vender online sin complicaciones tecnológicas."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio con WebGo" 
                      description="Descubre cómo digitalizar tus ventas sin complicaciones y deja de depender solo de recomendaciones. ¡Haz crecer tu negocio hoy!"
                      formPostUrl="api/contact-us"
                      projectId="ccBA4HqOmvRGN0Fv96itgM8d85H2"
                    />
<Footer />
    </main>
  );
}
