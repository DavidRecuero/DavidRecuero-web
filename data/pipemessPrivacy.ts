import type { LegalDocument, LegalLang, LegalSection } from './legalDocument';
import { DELETE_ACCOUNT_URL, PIPEMESS_CONTACT_EMAIL } from './pipemessLinks';

// Kept for the existing imports (tests, other pages)
export type PrivacyLang = LegalLang;
export type PrivacySection = LegalSection;
export type PrivacyPolicy = LegalDocument;

export const PRIVACY_CONTACT_EMAIL = PIPEMESS_CONTACT_EMAIL;

export const privacyPolicies: PrivacyPolicy[] = [
  {
    lang: 'en',
    languageName: 'English',
    title: 'Pipe Mess – Privacy Policy',
    lastUpdated: 'Last updated: 3 November 2026',
    intro: [
      'This privacy policy explains what personal data the mobile game Pipe Mess (the "Game") processes, why, and what rights you have. The Game is developed by David Recuero, who is the data controller.',
      `If you have any question about this policy or your data, write to ${PRIVACY_CONTACT_EMAIL}.`,
    ],
    sections: [
      {
        heading: '1. Your game account and cloud save',
        paragraphs: [
          'To save your progress in the cloud, so you can continue on another device or after reinstalling, the Game creates a game account for you automatically the first time it connects to the internet. No registration, email or password is needed. If you play with Google Play Games, the account is linked to your Play Games player ID, so it is the same on every device where you sign in. If you play as a guest, the account is anonymous and belongs to that installation of the Game.',
          'The account stores: a player ID created for the Game, the link to your Play Games player ID (if you use Play Games), and a copy of your game progress (current level, coins, boosters and the date of the last save). The player ID is shown at the bottom of the Settings screen, so you can give it to support.',
          'This service is provided by Unity Gaming Services (Authentication and Cloud Save), from Unity Technologies, which processes the data on behalf of the developer, as a data processor. Like any online service, Unity also processes the technical data needed to provide it, such as your IP address, device model and app version. More information in the Unity Privacy Policy (https://unity.com/legal/privacy-policy).',
          'The Game works without an internet connection: your progress is then saved on your device and uploaded the next time it connects.',
        ],
      },
      {
        heading: '2. Data processed when you sign in with Google Play Games',
        paragraphs: [
          'Signing in with Google Play Games is optional: you can play the whole Game as a guest. If you sign in, the Game receives from Google your Play Games player ID, your Play Games display name and the URL of your profile picture, plus a one-time code that it hands to Unity to sign you in to your game account.',
          'Your Play Games name and picture are used only to show them in the Game. They are kept in memory while the Game is running and are not sent to any server of the developer or of Unity.',
          'Google provides the sign-in service and processes this data, together with technical diagnostics of its own software, under the Google Privacy Policy (https://policies.google.com/privacy). You can manage or delete your Play Games profile and its data at https://play.google.com/games/profile or in your Google Account.',
        ],
      },
      {
        heading: '3. Data stored on your device',
        paragraphs: [
          'The Game also keeps on your device your progress (the same data as in the cloud save), your settings (language, music and sound effects) and the session of your game account, so it can sign you in again without asking. The settings are not sent anywhere. This data is deleted when you clear the app data or uninstall the Game.',
        ],
      },
      {
        heading: '4. Deleting your account and data',
        paragraphs: [
          'You can delete your game account and its data at any time from the Game (Settings, Delete account): the account and the cloud save are deleted immediately, together with the progress on your device.',
          `If you no longer have the Game, you can ask for it by email. All the details are at ${DELETE_ACCOUNT_URL}`,
        ],
      },
      {
        heading: '5. What the Game does not do',
        bullets: [
          'It does not show advertising and does not use the advertising ID.',
          'It does not include in-app purchases.',
          'It does not include analytics or tracking tools.',
          'It does not access your location, contacts, photos, camera, microphone or other apps.',
          'It does not sell your personal data or share it with third parties, apart from the service providers described in this policy.',
        ],
        paragraphs: [
          'If any of this changes in a future version, this policy will be updated before that version is released.',
        ],
      },
      {
        heading: '6. Google Play',
        paragraphs: [
          'The Game is distributed through Google Play. Google may collect data related to the download and use of the app (for example, crash reports if you have enabled sharing them with developers) under its own privacy policy.',
        ],
      },
      {
        heading: '7. Legal basis and international transfers',
        paragraphs: [
          'The game account, the cloud save and the sign-in data are processed to provide the service you use: playing and keeping your progress (Article 6(1)(b) GDPR). Google and Unity may process data outside the European Economic Area, with the safeguards described in their privacy policies.',
        ],
      },
      {
        heading: '8. Retention',
        paragraphs: [
          'The game account and the cloud save are kept while the account exists, and are deleted when you delete the account. Data on your device remains there until you delete it. Data held by Google is kept according to your Google Account settings.',
        ],
      },
      {
        heading: '9. Children',
        paragraphs: [
          'The Game is not directed at children under 13, and the developer does not knowingly collect personal data from them.',
        ],
      },
      {
        heading: '10. Your rights',
        paragraphs: [
          `You have the right to access, rectify, erase, restrict and object to the processing of your personal data, and to data portability. To exercise them, write to ${PRIVACY_CONTACT_EMAIL}. You can also lodge a complaint with the Spanish Data Protection Agency (https://www.aepd.es).`,
        ],
      },
      {
        heading: '11. Changes to this policy',
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
    lastUpdated: 'Última actualización: 3 de noviembre de 2026',
    intro: [
      'Esta política de privacidad explica qué datos personales trata el juego para móviles Pipe Mess (el «Juego»), con qué finalidad y qué derechos tienes. El Juego lo desarrolla David Recuero, que es el responsable del tratamiento.',
      `Si tienes cualquier pregunta sobre esta política o sobre tus datos, escribe a ${PRIVACY_CONTACT_EMAIL}.`,
    ],
    sections: [
      {
        heading: '1. Tu cuenta de juego y el guardado en la nube',
        paragraphs: [
          'Para guardar tu progreso en la nube, y que puedas seguir en otro dispositivo o después de reinstalar, el Juego te crea una cuenta de juego automáticamente la primera vez que se conecta a internet. No hace falta registrarse ni dar un email o una contraseña. Si juegas con Google Play Juegos, la cuenta se vincula a tu ID de jugador de Play Juegos, así que es la misma en todos los dispositivos donde inicies sesión. Si juegas como invitado, la cuenta es anónima y pertenece a esa instalación del Juego.',
          'La cuenta guarda: un ID de jugador creado para el Juego, el vínculo con tu ID de jugador de Play Juegos (si usas Play Juegos) y una copia de tu progreso (nivel actual, monedas, potenciadores y la fecha del último guardado). El ID de jugador aparece al final de la pantalla de Ajustes, para que puedas dárselo a soporte.',
          'Este servicio lo presta Unity Gaming Services (Authentication y Cloud Save), de Unity Technologies, que trata los datos por cuenta del desarrollador, como encargado del tratamiento. Como cualquier servicio en línea, Unity trata también los datos técnicos necesarios para prestarlo, como tu dirección IP, el modelo de dispositivo y la versión de la app. Más información en la Política de privacidad de Unity (https://unity.com/legal/privacy-policy).',
          'El Juego funciona sin conexión a internet: en ese caso tu progreso se guarda en el dispositivo y se sube la próxima vez que se conecte.',
        ],
      },
      {
        heading: '2. Datos tratados si inicias sesión con Google Play Juegos',
        paragraphs: [
          'Iniciar sesión con Google Play Juegos es opcional: puedes jugar a todo el Juego como invitado. Si inicias sesión, el Juego recibe de Google tu ID de jugador de Play Juegos, tu nombre visible de Play Juegos y la URL de tu foto de perfil, además de un código de un solo uso que entrega a Unity para iniciar sesión en tu cuenta de juego.',
          'Tu nombre y tu foto de Play Juegos se usan solo para mostrarlos dentro del Juego. Se mantienen en memoria mientras el Juego está abierto y no se envían a ningún servidor del desarrollador ni de Unity.',
          'Google presta el servicio de inicio de sesión y trata estos datos, junto con diagnósticos técnicos de su propio software, según la Política de privacidad de Google (https://policies.google.com/privacy). Puedes gestionar o borrar tu perfil de Play Juegos y sus datos en https://play.google.com/games/profile o en tu cuenta de Google.',
        ],
      },
      {
        heading: '3. Datos guardados en tu dispositivo',
        paragraphs: [
          'El Juego también guarda en tu dispositivo tu progreso (los mismos datos que en la nube), tus ajustes (idioma, música y efectos de sonido) y la sesión de tu cuenta de juego, para volver a iniciarla sin pedirte nada. Los ajustes no se envían a ningún sitio. Estos datos se borran al eliminar los datos de la app o desinstalar el Juego.',
        ],
      },
      {
        heading: '4. Borrar tu cuenta y tus datos',
        paragraphs: [
          'Puedes borrar tu cuenta de juego y sus datos cuando quieras desde el Juego (Ajustes, Borrar cuenta): la cuenta y el guardado en la nube se borran al momento, junto con el progreso de tu dispositivo.',
          `Si ya no tienes el Juego, puedes pedirlo por email. Tienes todos los detalles en ${DELETE_ACCOUNT_URL}`,
        ],
      },
      {
        heading: '5. Lo que el Juego no hace',
        bullets: [
          'No muestra publicidad ni usa el ID de publicidad.',
          'No incluye compras dentro de la aplicación.',
          'No incluye herramientas de analítica ni de seguimiento.',
          'No accede a tu ubicación, contactos, fotos, cámara, micrófono ni a otras apps.',
          'No vende tus datos personales ni los comparte con terceros, aparte de los proveedores de servicios descritos en esta política.',
        ],
        paragraphs: [
          'Si algo de esto cambia en una versión futura, esta política se actualizará antes de publicar esa versión.',
        ],
      },
      {
        heading: '6. Google Play',
        paragraphs: [
          'El Juego se distribuye a través de Google Play. Google puede recoger datos relacionados con la descarga y el uso de la app (por ejemplo, informes de errores si has activado compartirlos con los desarrolladores) según su propia política de privacidad.',
        ],
      },
      {
        heading: '7. Base legal y transferencias internacionales',
        paragraphs: [
          'La cuenta de juego, el guardado en la nube y los datos de inicio de sesión se tratan para prestarte el servicio que usas: jugar y conservar tu progreso (artículo 6.1.b del RGPD). Google y Unity pueden tratar datos fuera del Espacio Económico Europeo, con las garantías que describen en sus políticas de privacidad.',
        ],
      },
      {
        heading: '8. Conservación',
        paragraphs: [
          'La cuenta de juego y el guardado en la nube se conservan mientras exista la cuenta y se borran cuando la borras. Los datos de tu dispositivo permanecen ahí hasta que los borres. Los datos que tiene Google se conservan según la configuración de tu cuenta de Google.',
        ],
      },
      {
        heading: '9. Menores',
        paragraphs: [
          'El Juego no está dirigido a menores de 13 años y el desarrollador no recoge conscientemente datos personales de ellos.',
        ],
      },
      {
        heading: '10. Tus derechos',
        paragraphs: [
          `Tienes derecho a acceder, rectificar, suprimir, limitar y oponerte al tratamiento de tus datos personales, así como a su portabilidad. Para ejercerlos, escribe a ${PRIVACY_CONTACT_EMAIL}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (https://www.aepd.es).`,
        ],
      },
      {
        heading: '11. Cambios en esta política',
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
    lastUpdated: 'Darrera actualització: 3 de novembre de 2026',
    intro: [
      'Aquesta política de privacitat explica quines dades personals tracta el joc per a mòbils Pipe Mess (el «Joc»), amb quina finalitat i quins drets tens. El Joc el desenvolupa David Recuero, que és el responsable del tractament.',
      `Si tens qualsevol pregunta sobre aquesta política o sobre les teves dades, escriu a ${PRIVACY_CONTACT_EMAIL}.`,
    ],
    sections: [
      {
        heading: '1. El teu compte de joc i el desament al núvol',
        paragraphs: [
          'Per desar el teu progrés al núvol, i que puguis continuar en un altre dispositiu o després de reinstal·lar, el Joc et crea un compte de joc automàticament la primera vegada que es connecta a internet. No cal registrar-se ni donar un correu electrònic o una contrasenya. Si jugues amb Google Play Jocs, el compte es vincula al teu ID de jugador de Play Jocs, de manera que és el mateix a tots els dispositius on iniciïs la sessió. Si jugues com a convidat, el compte és anònim i pertany a aquella instal·lació del Joc.',
          'El compte desa: un ID de jugador creat per al Joc, el vincle amb el teu ID de jugador de Play Jocs (si fas servir Play Jocs) i una còpia del teu progrés (nivell actual, monedes, potenciadors i la data del darrer desament). L’ID de jugador apareix al final de la pantalla de Configuració, perquè el puguis donar al suport.',
          'Aquest servei el presta Unity Gaming Services (Authentication i Cloud Save), d’Unity Technologies, que tracta les dades per compte del desenvolupador, com a encarregat del tractament. Com qualsevol servei en línia, Unity tracta també les dades tècniques necessàries per prestar-lo, com la teva adreça IP, el model de dispositiu i la versió de l’app. Més informació a la Política de privadesa d’Unity (https://unity.com/legal/privacy-policy).',
          'El Joc funciona sense connexió a internet: en aquest cas el teu progrés es desa al dispositiu i es puja la propera vegada que es connecti.',
        ],
      },
      {
        heading: '2. Dades tractades si inicies la sessió amb Google Play Jocs',
        paragraphs: [
          'Iniciar la sessió amb Google Play Jocs és opcional: pots jugar a tot el Joc com a convidat. Si inicies la sessió, el Joc rep de Google el teu ID de jugador de Play Jocs, el teu nom visible de Play Jocs i l’URL de la teva foto de perfil, a més d’un codi d’un sol ús que lliura a Unity per iniciar la sessió al teu compte de joc.',
          'El teu nom i la teva foto de Play Jocs es fan servir només per mostrar-los dins del Joc. Es mantenen a la memòria mentre el Joc està obert i no s’envien a cap servidor del desenvolupador ni d’Unity.',
          'Google presta el servei d’inici de sessió i tracta aquestes dades, juntament amb diagnòstics tècnics del seu propi programari, d’acord amb la Política de privadesa de Google (https://policies.google.com/privacy). Pots gestionar o esborrar el teu perfil de Play Jocs i les seves dades a https://play.google.com/games/profile o al teu compte de Google.',
        ],
      },
      {
        heading: '3. Dades desades al teu dispositiu',
        paragraphs: [
          'El Joc també desa al teu dispositiu el teu progrés (les mateixes dades que al núvol), la teva configuració (idioma, música i efectes de so) i la sessió del teu compte de joc, per tornar-la a iniciar sense demanar-te res. La configuració no s’envia enlloc. Aquestes dades s’esborren quan elimines les dades de l’app o desinstal·les el Joc.',
        ],
      },
      {
        heading: '4. Esborrar el teu compte i les teves dades',
        paragraphs: [
          'Pots esborrar el teu compte de joc i les seves dades quan vulguis des del Joc (Configuració, Esborrar el compte): el compte i el desament al núvol s’esborren al moment, juntament amb el progrés del teu dispositiu.',
          `Si ja no tens el Joc, ho pots demanar per correu electrònic. Tens tots els detalls a ${DELETE_ACCOUNT_URL}`,
        ],
      },
      {
        heading: '5. El que el Joc no fa',
        bullets: [
          'No mostra publicitat ni fa servir l’ID de publicitat.',
          'No inclou compres dins de l’aplicació.',
          'No inclou eines d’analítica ni de seguiment.',
          'No accedeix a la teva ubicació, contactes, fotos, càmera, micròfon ni a altres apps.',
          'No ven les teves dades personals ni les comparteix amb tercers, a part dels proveïdors de serveis descrits en aquesta política.',
        ],
        paragraphs: [
          'Si alguna d’aquestes coses canvia en una versió futura, aquesta política s’actualitzarà abans de publicar aquesta versió.',
        ],
      },
      {
        heading: '6. Google Play',
        paragraphs: [
          'El Joc es distribueix a través de Google Play. Google pot recollir dades relacionades amb la descàrrega i l’ús de l’app (per exemple, informes d’errors si has activat compartir-los amb els desenvolupadors) d’acord amb la seva pròpia política de privadesa.',
        ],
      },
      {
        heading: '7. Base legal i transferències internacionals',
        paragraphs: [
          'El compte de joc, el desament al núvol i les dades d’inici de sessió es tracten per prestar-te el servei que fas servir: jugar i conservar el teu progrés (article 6.1.b del RGPD). Google i Unity poden tractar dades fora de l’Espai Econòmic Europeu, amb les garanties que descriuen a les seves polítiques de privadesa.',
        ],
      },
      {
        heading: '8. Conservació',
        paragraphs: [
          'El compte de joc i el desament al núvol es conserven mentre existeixi el compte i s’esborren quan l’esborres. Les dades del teu dispositiu hi romanen fins que les esborris. Les dades que té Google es conserven segons la configuració del teu compte de Google.',
        ],
      },
      {
        heading: '9. Menors',
        paragraphs: [
          'El Joc no està adreçat a menors de 13 anys i el desenvolupador no recull conscientment dades personals seves.',
        ],
      },
      {
        heading: '10. Els teus drets',
        paragraphs: [
          `Tens dret a accedir, rectificar, suprimir, limitar i oposar-te al tractament de les teves dades personals, així com a la seva portabilitat. Per exercir-los, escriu a ${PRIVACY_CONTACT_EMAIL}. També pots presentar una reclamació davant l’Agència Espanyola de Protecció de Dades (https://www.aepd.es).`,
        ],
      },
      {
        heading: '11. Canvis en aquesta política',
        paragraphs: [
          'Aquesta política es pot actualitzar quan canviï el Joc. La data del principi indica la darrera versió.',
        ],
      },
    ],
  },
];
