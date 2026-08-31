export type Language = "es" | "en"

export const translations = {
  es: {
    nav: {
      link1: "Especificaciones",
      link2: "Distribución B2B",
      cta: "Contactar",
    },
    hero: {
      title: "Rendimiento implacable, precisión absoluta.",
      ctaButton: "Quiero ser distribuidor",
    },
    ticker: {
      names: ["Distribuidor 1", "Distribuidor 2", "Distribuidor 3", "Distribuidor 4", "Distribuidor 5"],
    },
    features: {
      bgText: "SPECS",
      title: "Estándar técnico no negociable",
      subtitle: "Explora las características que hacen de nuestros cartuchos la herramienta definitiva para precisión y seguridad.",
      listButton: "Ver lista completa",
      closeButton: "Cerrar lista",
      helpDesktop: "Haz clic en un punto para ver los detalles.",
      helpMobile: "Toca un punto para ver los detalles.",
      items: [
        {
          title: "Finger Ledge Design",
          description: "Soporte ergonómico para los dedos. Más control y precisión, reduciendo la fatiga en sesiones extensas.",
        },
        {
          title: "Material médico transparente",
          description: "Plástico grado médico esterilizado con gas EO, con carcasa transparente que da visión total del flujo de tinta y posición de la aguja. Higiene impecable, listo para uso inmediato.",
        },
        {
          title: "Membrana de sílice antirreflujo",
          description: "Barrera impenetrable que evita que la tinta o fluidos regresen y contaminen la máquina.",
        },
        {
          title: "Ajuste Super Tight y operación estable",
          description: "La configuración queda perfectamente centrada sin bamboleo, asegurando trazos con precisión milimétrica. Diseño estabilizado que reduce el ruido y la vibración para un trabajo más fluido.",
        },
        {
          title: "Acero 304H con Easier to Ink",
          description: "Acero 304H (High Carbon) que mantiene el filo en sesiones largas, logrando penetración limpia y mejor cicatrización. Sus micro-surcos mejoran la adherencia y flujo de tinta, con menos repasadas.",
        },
      ],
    },
    whyDistribute: {
      bgText: "PARTNERSHIP",
      title: "Por qué distribuir Mr. Hyde",
      subtitle: "Beneficios diseñados para mayoristas e importadores de insumos de tatuaje.",
      services: [
        {
          title: "Identidad de Marca Fuerte",
          description: "No es un cartucho genérico más. Empaque y branding con carácter que el estudio recordará y volverá a pedir.",
        },
        {
          title: "Consistencia Lote a Lote",
          description: "La misma calidad premium en cada caja. Evita reclamos de tus clientes y asegura su fidelidad a largo plazo.",
        },
        {
          title: "Certeza de Suministro",
          description: "Stock garantizado para pedidos por volumen. Condiciones claras y tiempos de entrega en los que puedes confiar.",
        },
      ],
    },
    sponsorCarousel: {
      prevLabel: "Anterior",
      nextLabel: "Siguiente",
      caption: "Mr. Hyde trabaja con un Pro Team de tatuadores referentes en la industria en distintos países, y sigue sumando talento de este calibre para posicionar aún más la marca.",
    },
    contactForm: {
      bgText: "JOIN US",
      title: "Conviértete en distribuidor",
      subtitle: "Completa el formulario para solicitar información sobre precios por volumen, catálogo y condiciones de distribución.",
      labels: {
        name: "Nombre completo",
        company: "Nombre de la empresa / Tienda",
        email: "Correo electrónico",
        phone: "Teléfono / WhatsApp",
        details: "Volumen estimado (Cajas/mes) o Detalles adicionales",
      },
      placeholders: {
        name: "Tu nombre",
        company: "Nombre de negocio",
        email: "correo@empresa.com",
        phone: "+1 234 567 8900",
        details: "Cuéntanos sobre tu capacidad de distribución...",
      },
      submitButton: "Solicitar información",
      successMessage: "¡Gracias! Hemos recibido tu solicitud y te contactaremos pronto.",
      errorMessage: "Hubo un problema al enviar el formulario. Intenta de nuevo o escríbenos directamente.",
      emailSubject: (nombre: string, empresa: string) =>
        `Nueva solicitud de distribución — ${nombre}${empresa ? ` (${empresa})` : ""}`,
      buildEmailMessage: (nombre: string, empresa: string, telefono: string, detalles: string, email: string) =>
        `Hola,\n\n${nombre}${empresa ? `, de ${empresa},` : ""} quiere distribuir Mr. Hyde.\n\n${telefono ? `Teléfono: ${telefono}\n` : ""}${detalles ? `Volumen/Detalles: ${detalles}\n` : ""}\nCorreo de contacto: ${email}`,
    },
    footer: {
      description: "Cartuchos de tatuaje de alto rendimiento para artistas profesionales.",
      productTitle: "Producto",
      productLink1: "Especificaciones",
      productLink2: "Distribución B2B",
      supportTitle: "Soporte",
      supportLink1: "Contacto B2B",
      supportLink2: "Garantía y Devoluciones",
      copyright: (year: number) => `© ${year} Mr. Hyde Tattoo Cartridges. Todos los derechos reservados.`,
    },
  },
  en: {
    nav: {
      link1: "Specifications",
      link2: "B2B Distribution",
      cta: "Contact Us",
    },
    hero: {
      title: "Relentless performance. Absolute precision.",
      ctaButton: "Become a Distributor",
    },
    ticker: {
      names: ["Distributor 1", "Distributor 2", "Distributor 3", "Distributor 4", "Distributor 5"],
    },
    features: {
      bgText: "SPECS",
      title: "Non-Negotiable Technical Standards",
      subtitle: "Explore what makes our cartridges the ultimate tool for precision and safety.",
      listButton: "View full list",
      closeButton: "Close list",
      helpDesktop: "Click a point to see the details.",
      helpMobile: "Tap a point to see the details.",
      items: [
        {
          title: "Finger Ledge Design",
          description: "Ergonomic finger support for more control and precision, cutting down on fatigue during long sessions.",
        },
        {
          title: "Transparent Medical-Grade Material",
          description: "EO gas-sterilized, medical-grade plastic with a transparent housing that gives you full visibility of ink flow and needle position. Impeccable hygiene, ready to use right out of the pack.",
        },
        {
          title: "Anti-Backflow Silica Membrane",
          description: "An impenetrable barrier that keeps ink and fluids from flowing back and contaminating the machine.",
        },
        {
          title: "Super-Tight Fit, Stable Operation",
          description: "The setup stays perfectly centered with zero wobble, for millimeter-precise linework. A stabilized design that cuts down on noise and vibration for a smoother workflow.",
        },
        {
          title: "304H Steel, Easier to Ink",
          description: "High-carbon 304H steel that holds its edge through long sessions, for clean penetration and better healing. Its micro-grooves improve ink adhesion and flow, so you need fewer passes.",
        },
      ],
    },
    whyDistribute: {
      bgText: "PARTNERSHIP",
      title: "Why Distribute Mr. Hyde",
      subtitle: "Benefits built for wholesalers and importers of tattoo supplies.",
      services: [
        {
          title: "A Strong Brand Identity",
          description: "It's not just another generic cartridge. Packaging and branding with real character — the kind a studio remembers and reorders.",
        },
        {
          title: "Batch-to-Batch Consistency",
          description: "The same premium quality in every box. Fewer customer complaints, more long-term loyalty.",
        },
        {
          title: "Reliable Supply",
          description: "Guaranteed stock for volume orders, with clear terms and delivery times you can count on.",
        },
      ],
    },
    sponsorCarousel: {
      prevLabel: "Previous",
      nextLabel: "Next",
      caption: "Mr. Hyde partners with a Pro Team of leading tattoo artists across different countries, and keeps adding talent of this caliber to push the brand even further.",
    },
    contactForm: {
      bgText: "JOIN US",
      title: "Become a Distributor",
      subtitle: "Fill out the form to request pricing for volume orders, our catalog, and distribution terms.",
      labels: {
        name: "Full name",
        company: "Company / Shop name",
        email: "Email address",
        phone: "Phone / WhatsApp",
        details: "Estimated volume (Boxes/month) or additional details",
      },
      placeholders: {
        name: "Your name",
        company: "Your business name",
        email: "you@company.com",
        phone: "+1 234 567 8900",
        details: "Tell us about your distribution capacity...",
      },
      submitButton: "Request Information",
      successMessage: "Thanks! We've received your request and will be in touch soon.",
      errorMessage: "Something went wrong sending the form. Please try again or reach out to us directly.",
      emailSubject: (nombre: string, empresa: string) =>
        `New Distribution Request — ${nombre}${empresa ? ` (${empresa})` : ""}`,
      buildEmailMessage: (nombre: string, empresa: string, telefono: string, detalles: string, email: string) =>
        `Hi,\n\n${nombre}${empresa ? `, from ${empresa},` : ""} is interested in distributing Mr. Hyde.\n\n${telefono ? `Phone: ${telefono}\n` : ""}${detalles ? `Volume/Details: ${detalles}\n` : ""}\nContact email: ${email}`,
    },
    footer: {
      description: "High-performance tattoo cartridges for professional artists.",
      productTitle: "Product",
      productLink1: "Specifications",
      productLink2: "B2B Distribution",
      supportTitle: "Support",
      supportLink1: "B2B Contact",
      supportLink2: "Warranty & Returns",
      copyright: (year: number) => `© ${year} Mr. Hyde Tattoo Cartridges. All rights reserved.`,
    },
  },
} as const
