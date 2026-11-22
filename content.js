/* ============================================================
   CONTENIDO DEL SITIO · SITE CONTENT
   Edit this file with any text editor. Save, then reload index.html.
   Everything between quotes is text you can change.
   ============================================================ */
const SITE = {
  name: 'Francesca Ritchey',
  email: 'fritchey@mac.com',
  instagram: 'franritchey',          // without the @
  whatsapp: '525551060357',          // country code + number, no spaces. The number is NOT shown on the page.
  linkedin: '',                      // paste the full LinkedIn profile address. Empty = the link is hidden.
  store: 'https://www.purephoto.com/pages/francesca-ritchey',

  // Commercial categories. A category appears in the menu only when it has at least one photo below.
  categories: [
    { id: 'editorial',  es: 'Editorial',          en: 'Editorial' },
    { id: 'viaje',      es: 'Editorial de viaje', en: 'Travel Editorial' },
    { id: 'gastro',     es: 'Gastronómica',       en: 'Food' },
    { id: 'retratos',   es: 'Retratos',           en: 'Portraits' },
    { id: 'producto',   es: 'Producto',           en: 'Product' }
  ],

  // Personal projects. "store" = link to that project's PurePhoto collection. Leave '' if there is no current collection.
  projects: [
    { id: 'guardianes', es: 'Guardianes', en: 'Guardianes', store: '',
      desc: { es: '[Descripción breve del proyecto, de dos a tres líneas.]', en: '[Short project description, two or three lines.]' } },
    { id: 'mosaicos', es: 'Mosaicos', en: 'Mosaics',
      store: 'https://www.purephoto.com/pages/francesca-ritchey',   // replace with the Mosaics collection link
      desc: { es: '[Descripción breve del proyecto, de dos a tres líneas.]', en: '[Short project description, two or three lines.]' } },
    { id: 'chinampas', es: 'Chinampas Tláhuac', en: 'Chinampas Tláhuac', store: '',
      desc: { es: '[Descripción breve del proyecto, de dos a tres líneas.]', en: '[Short project description, two or three lines.]' } }
  ],

  /* PHOTOS. One line per picture.
     src:   file inside the images folder, for example 'images/editorial-01.jpg'. Leave '' to show a grey placeholder.
     group: a category id (editorial, viaje, gastro, retratos, producto) or a project id (guardianes, mosaicos, chinampas).
     size:  '' (square), 'big' (large, two columns by two rows), 'tall', or 'wide'.
     alt:   a short description of the picture (needed for screen readers).
     home:  true = also shown on the Home page.
     The pictures below are placeholders. Replace them as the real pictures arrive. */
  photos: [
    { src: '', group: 'editorial',  size: 'big',  alt: '', home: true },
    { src: '', group: 'retratos',   size: 'tall', alt: '', home: true },
    { src: '', group: 'gastro',     size: '',     alt: '', home: true },
    { src: '', group: 'mosaicos',   size: '',     alt: '', home: true },
    { src: '', group: 'guardianes', size: 'wide', alt: '', home: true },
    { src: '', group: 'producto',   size: '',     alt: '', home: true },
    { src: '', group: 'chinampas',  size: 'tall', alt: '', home: true },
    { src: '', group: 'viaje',      size: 'wide', alt: '', home: true },
    { src: '', group: 'retratos',   size: '',     alt: '', home: true },
    { src: '', group: 'mosaicos',   size: 'wide', alt: '', home: true },
    { src: '', group: 'editorial',  size: '',     alt: '' },
    { src: '', group: 'editorial',  size: 'tall', alt: '' },
    { src: '', group: 'mosaicos',   size: 'big',  alt: '' },
    { src: '', group: 'guardianes', size: 'big',  alt: '' },
    { src: '', group: 'chinampas',  size: 'big',  alt: '' }
  ],

  about: {
    portrait: '',   // for example 'images/portrait.jpg'
    es: [
      'Francesca Ritchey Chauvet es una fotógrafa mexicana- americana que actualmente radica en CDMX. Se graduó como comunicóloga de la Universidad Anáhuac Norte su fascinación por la fotografía la llevó después a estudiar en el prestigiado colegio de Maine Media College en Rockport, Maine, EUA en donde comenzó su carrera formal como fotógrafa.',
      'Inició su trayectoria artística por la necesidad de expresarse y comprender sus experiencias y su entorno. A través de la fotografía, invita a contemplar el mundo y a confrontar nuestro universo interior. Artistas como Carter Bresson, Mayer, Adams y Salgado la han inspirado a explorar las calles en busca del fascinante caos de las grandes ciudades. En el paisaje, aprecia el carácter efímero de cada instante y encuentra una forma de meditación silenciosa que la conecta consigo misma.',
      'Inspirada en artistas como Jan Hendrix y Pedro Friedeberg muchas veces juega con la percepción del espectador y el mundo establecido jugando con planos, colores y luces para crear paisajes nuevos a través de la imaginación que invitan a la auto reflexión y auto exploración.',
      'Ha participado en numerosas exposiciones colectivas e individuales en México y Estados Unidos. En 2007, obtuvo el tercer lugar en el Concurso Nacional de Fotografía, organizado por la Fundación BBVA Bancomer y la Revista Cuartoscuro. En 2012, fue seleccionada entre más de 500,000 obras para formar parte de la exposición 1001 Artist en Art Scope Miami. En 2022, recibió una mención honorífica de los International Photography Awards (IPA).',
      'Francesca disfruta profundamente de la capacidad de la imagen para contar historias con múltiples niveles de significado y ofrecer al espectador una nueva mirada sobre el mundo y la psique humana. Para ella, la esencia del arte está en reunir diversas emociones e ideas en un mismo marco e invitar a la introspección y la contemplación.',
      'Actualmente trabaja como fotografa comercial freelance para varias marcas mexicanas y como fotógrafa social en su compañía Bluebird Fotografía'
    ],
    en: []   // English bio: add paragraphs here. While empty, the Spanish text is shown.
  },

  // Exhibitions and awards, newest first. type: 'Exposición' / 'Premio' / 'Individual' / 'Colectiva'
  exhibitions: [
    { year: '2022', name: 'Mención honorífica, International Photography Awards (IPA)', venue: '', type: 'Premio' },
    { year: '2012', name: '1001 Artist', venue: 'Art Scope Miami', type: 'Exposición' },
    { year: '2007', name: 'Tercer lugar, Concurso Nacional de Fotografía', venue: 'Fundación BBVA Bancomer y Revista Cuartoscuro', type: 'Premio' }
  ]
};
