export type PrivacyLang = 'en' | 'es' | 'ca';

export interface PrivacySection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface PrivacyPolicy {
  lang: PrivacyLang;
  languageName: string;
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: PrivacySection[];
}

export const PRIVACY_CONTACT_EMAIL = 'pipemess.game@gmail.com';

export const privacyPolicies: PrivacyPolicy[] = [
  {
    lang: 'en',
    languageName: 'English',
    title: 'Pipe Mess – Privacy Policy',
    lastUpdated: 'Last updated: 30 October 2026',
    intro: [
      'This privacy policy explains what personal data the mobile game Pipe Mess (the "Game") processes, why, and what rights you have. The Game is developed by David Recuero, who is the data controller.',
      `If you have any question about this policy or your data, write to ${PRIVACY_CONTACT_EMAIL}.`,
    ],
    sections: [
      {
        heading: '1. Data processed when you sign in with Google Play Games',
        paragraphs: [
          'Signing in with Google Play Games is optional: you can play the whole Game as a guest. If you sign in, the Game receives from Google your Play Games player ID, your Play Games display name and the URL of your profile picture.',
          'The Game uses this data only to identify your session and to show your name and picture in the Game. It is kept in memory while the Game is running and is not sent to any server operated by the developer.',
          'Google provides the sign-in service and processes this data, together with technical diagnostics of its own software, under the Google Privacy Policy (https://policies.google.com/privacy). You can manage or delete your Play Games profile and its data at https://play.google.com/games/profile or in your Google Account.',
        ],
      },
      {
        heading: '2. Data stored only on your device',
        paragraphs: [
          'Your game progress, coins, boosters, settings (language, music and sound effects) and, if you play as a guest, a randomly generated guest identifier are saved only on your device. This data is not sent to the developer. It is deleted when you clear the app data or uninstall the Game.',
        ],
      },
      {
        heading: '3. What the Game does not do',
        bullets: [
          'It does not show advertising and does not use the advertising ID.',
          'It does not include in-app purchases.',
          'It does not include analytics or tracking tools.',
          'It does not access your location, contacts, photos, camera, microphone or other apps.',
          'It does not sell or share your personal data with third parties.',
        ],
        paragraphs: [
          'If any of this changes in a future version, this policy will be updated before that version is released.',
        ],
      },
      {
        heading: '4. Google Play',
        paragraphs: [
          'The Game is distributed through Google Play. Google may collect data related to the download and use of the app (for example, crash reports if you have enabled sharing them with developers) under its own privacy policy.',
        ],
      },
      {
        heading: '5. Legal basis and international transfers',
        paragraphs: [
          'Sign-in data is processed to provide the service you request (Article 6(1)(b) GDPR). Google may process data outside the European Economic Area, with the safeguards described in its privacy policy.',
        ],
      },
      {
        heading: '6. Retention',
        paragraphs: [
          'The developer does not store your personal data on its own servers. Data on your device remains there until you delete it. Data held by Google is kept according to your Google Account settings.',
        ],
      },
      {
        heading: '7. Children',
        paragraphs: [
          'The Game is not directed at children under 13, and the developer does not knowingly collect personal data from them.',
        ],
      },
      {
        heading: '8. Your rights',
        paragraphs: [
          `You have the right to access, rectify, erase, restrict and object to the processing of your personal data, and to data portability. To exercise them, write to ${PRIVACY_CONTACT_EMAIL}. You can also lodge a complaint with the Spanish Data Protection Agency (https://www.aepd.es).`,
        ],
      },
      {
        heading: '9. Changes to this policy',
        paragraphs: [
          'This policy may be updated when the Game changes. The date at the top shows the latest version.',
        ],
      },
    ],
  },
  {
    lang: 'es',
    languageName: 'Español',
    title: 'Pipe Mess – Política de privacidad',
    lastUpdated: 'Última actualización: 30 de octubre de 2026',
    intro: [
      'Esta política de privacidad explica qué datos personales trata el juego para móviles Pipe Mess (el «Juego»), con qué finalidad y qué derechos tienes. El Juego lo desarrolla David Recuero, que es el responsable del tratamiento.',
      `Si tienes cualquier pregunta sobre esta política o sobre tus datos, escribe a ${PRIVACY_CONTACT_EMAIL}.`,
    ],
    sections: [
      {
        heading: '1. Datos tratados si inicias sesión con Google Play Juegos',
        paragraphs: [
          'Iniciar sesión con Google Play Juegos es opcional: puedes jugar a todo el Juego como invitado. Si inicias sesión, el Juego recibe de Google tu ID de jugador de Play Juegos, tu nombre visible de Play Juegos y la URL de tu foto de perfil.',
          'El Juego usa estos datos solo para identificar tu sesión y mostrar tu nombre y tu foto dentro del Juego. Se mantienen en memoria mientras el Juego está abierto y no se envían a ningún servidor del desarrollador.',
          'Google presta el servicio de inicio de sesión y trata estos datos, junto con diagnósticos técnicos de su propio software, según la Política de privacidad de Google (https://policies.google.com/privacy). Puedes gestionar o borrar tu perfil de Play Juegos y sus datos en https://play.google.com/games/profile o en tu cuenta de Google.',
        ],
      },
      {
        heading: '2. Datos guardados solo en tu dispositivo',
        paragraphs: [
          'Tu progreso, monedas, potenciadores, ajustes (idioma, música y efectos de sonido) y, si juegas como invitado, un identificador de invitado generado al azar se guardan solo en tu dispositivo. Estos datos no se envían al desarrollador y se borran al eliminar los datos de la app o desinstalar el Juego.',
        ],
      },
      {
        heading: '3. Lo que el Juego no hace',
        bullets: [
          'No muestra publicidad ni usa el ID de publicidad.',
          'No incluye compras dentro de la aplicación.',
          'No incluye herramientas de analítica ni de seguimiento.',
          'No accede a tu ubicación, contactos, fotos, cámara, micrófono ni a otras apps.',
          'No vende ni comparte tus datos personales con terceros.',
        ],
        paragraphs: [
          'Si algo de esto cambia en una versión futura, esta política se actualizará antes de publicar esa versión.',
        ],
      },
      {
        heading: '4. Google Play',
        paragraphs: [
          'El Juego se distribuye a través de Google Play. Google puede recoger datos relacionados con la descarga y el uso de la app (por ejemplo, informes de errores si has activado compartirlos con los desarrolladores) según su propia política de privacidad.',
        ],
      },
      {
        heading: '5. Base legal y transferencias internacionales',
        paragraphs: [
          'Los datos de inicio de sesión se tratan para prestarte el servicio que solicitas (artículo 6.1.b del RGPD). Google puede tratar datos fuera del Espacio Económico Europeo, con las garantías que describe en su política de privacidad.',
        ],
      },
      {
        heading: '6. Conservación',
        paragraphs: [
          'El desarrollador no guarda tus datos personales en servidores propios. Los datos de tu dispositivo permanecen ahí hasta que los borres. Los datos que tiene Google se conservan según la configuración de tu cuenta de Google.',
        ],
      },
      {
        heading: '7. Menores',
        paragraphs: [
          'El Juego no está dirigido a menores de 13 años y el desarrollador no recoge conscientemente datos personales de ellos.',
        ],
      },
      {
        heading: '8. Tus derechos',
        paragraphs: [
          `Tienes derecho a acceder, rectificar, suprimir, limitar y oponerte al tratamiento de tus datos personales, así como a su portabilidad. Para ejercerlos, escribe a ${PRIVACY_CONTACT_EMAIL}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (https://www.aepd.es).`,
        ],
      },
      {
        heading: '9. Cambios en esta política',
        paragraphs: [
          'Esta política puede actualizarse cuando cambie el Juego. La fecha del principio indica la última versión.',
        ],
      },
    ],
  },
  {
    lang: 'ca',
    languageName: 'Català',
    title: 'Pipe Mess – Política de privacitat',
    lastUpdated: 'Darrera actualització: 30 d’octubre de 2026',
    intro: [
      'Aquesta política de privacitat explica quines dades personals tracta el joc per a mòbils Pipe Mess (el «Joc»), amb quina finalitat i quins drets tens. El Joc el desenvolupa David Recuero, que és el responsable del tractament.',
      `Si tens qualsevol pregunta sobre aquesta política o sobre les teves dades, escriu a ${PRIVACY_CONTACT_EMAIL}.`,
    ],
    sections: [
      {
        heading: '1. Dades tractades si inicies la sessió amb Google Play Jocs',
        paragraphs: [
          'Iniciar la sessió amb Google Play Jocs és opcional: pots jugar a tot el Joc com a convidat. Si inicies la sessió, el Joc rep de Google el teu ID de jugador de Play Jocs, el teu nom visible de Play Jocs i l’URL de la teva foto de perfil.',
          'El Joc fa servir aquestes dades només per identificar la teva sessió i mostrar el teu nom i la teva foto dins del Joc. Es mantenen a la memòria mentre el Joc està obert i no s’envien a cap servidor del desenvolupador.',
          'Google presta el servei d’inici de sessió i tracta aquestes dades, juntament amb diagnòstics tècnics del seu propi programari, d’acord amb la Política de privadesa de Google (https://policies.google.com/privacy). Pots gestionar o esborrar el teu perfil de Play Jocs i les seves dades a https://play.google.com/games/profile o al teu compte de Google.',
        ],
      },
      {
        heading: '2. Dades desades només al teu dispositiu',
        paragraphs: [
          'El teu progrés, les monedes, els potenciadors, la configuració (idioma, música i efectes de so) i, si jugues com a convidat, un identificador de convidat generat a l’atzar es desen només al teu dispositiu. Aquestes dades no s’envien al desenvolupador i s’esborren quan elimines les dades de l’app o desinstal·les el Joc.',
        ],
      },
      {
        heading: '3. El que el Joc no fa',
        bullets: [
          'No mostra publicitat ni fa servir l’ID de publicitat.',
          'No inclou compres dins de l’aplicació.',
          'No inclou eines d’analítica ni de seguiment.',
          'No accedeix a la teva ubicació, contactes, fotos, càmera, micròfon ni a altres apps.',
          'No ven ni comparteix les teves dades personals amb tercers.',
        ],
        paragraphs: [
          'Si alguna d’aquestes coses canvia en una versió futura, aquesta política s’actualitzarà abans de publicar aquesta versió.',
        ],
      },
      {
        heading: '4. Google Play',
        paragraphs: [
          'El Joc es distribueix a través de Google Play. Google pot recollir dades relacionades amb la descàrrega i l’ús de l’app (per exemple, informes d’errors si has activat compartir-los amb els desenvolupadors) d’acord amb la seva pròpia política de privadesa.',
        ],
      },
      {
        heading: '5. Base legal i transferències internacionals',
        paragraphs: [
          'Les dades d’inici de sessió es tracten per prestar-te el servei que sol·licites (article 6.1.b del RGPD). Google pot tractar dades fora de l’Espai Econòmic Europeu, amb les garanties que descriu a la seva política de privadesa.',
        ],
      },
      {
        heading: '6. Conservació',
        paragraphs: [
          'El desenvolupador no desa les teves dades personals en servidors propis. Les dades del teu dispositiu hi romanen fins que les esborris. Les dades que té Google es conserven segons la configuració del teu compte de Google.',
        ],
      },
      {
        heading: '7. Menors',
        paragraphs: [
          'El Joc no està adreçat a menors de 13 anys i el desenvolupador no recull conscientment dades personals seves.',
        ],
      },
      {
        heading: '8. Els teus drets',
        paragraphs: [
          `Tens dret a accedir, rectificar, suprimir, limitar i oposar-te al tractament de les teves dades personals, així com a la seva portabilitat. Per exercir-los, escriu a ${PRIVACY_CONTACT_EMAIL}. També pots presentar una reclamació davant l’Agència Espanyola de Protecció de Dades (https://www.aepd.es).`,
        ],
      },
      {
        heading: '9. Canvis en aquesta política',
        paragraphs: [
          'Aquesta política es pot actualitzar quan canviï el Joc. La data del principi indica la darrera versió.',
        ],
      },
    ],
  },
];
