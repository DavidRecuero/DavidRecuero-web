import type { LegalDocument } from './legalDocument';
import { PIPEMESS_CONTACT_EMAIL, PRIVACY_POLICY_URL } from './pipemessLinks';

// Google Play requires a web page where players can ask for their account and data to be deleted
// without installing the app (DELETE_ACCOUNT_URL). Linked from the Data safety form and from the privacy policy.

export const deleteAccountPages: LegalDocument[] = [
  {
    lang: 'en',
    languageName: 'English',
    title: 'Pipe Mess – Delete your account and data',
    lastUpdated: 'Last updated: 3 November 2026',
    intro: [
      'Pipe Mess, developed by David Recuero, creates a game account automatically to save your progress in the cloud. You can delete that account and all the data linked to it at any time, in either of these two ways.',
    ],
    sections: [
      {
        heading: '1. From the game (immediate)',
        bullets: [
          'Open Pipe Mess and tap the Settings button in the main menu.',
          'Tap Delete account.',
          'Hold the Hold to delete button down for 2 seconds.',
          'The game confirms that the account has been deleted and closes.',
        ],
        paragraphs: [
          'You need an internet connection. The next time you open the game, it starts from scratch with a new, empty account.',
        ],
      },
      {
        heading: '2. By email (if you no longer have the game)',
        paragraphs: [
          `Write to ${PIPEMESS_CONTACT_EMAIL} with the subject "Delete my Pipe Mess account". If you can, include your player ID: it is shown at the bottom of the Settings screen of the game. If you don't have it, write anyway and we will help you identify your account.`,
          'We will delete the account and confirm it within 30 days. We may ask you for some information to make sure the account is yours.',
        ],
      },
      {
        heading: '3. What is deleted',
        bullets: [
          'Your game account (player ID) and its link to Google Play Games.',
          'The copy of your progress saved in the cloud: level, coins and boosters.',
          'If you delete it from the game, also the progress saved on your device.',
        ],
        paragraphs: [
          'The deletion is permanent: the progress cannot be recovered, and the developer does not keep any copy of it.',
        ],
      },
      {
        heading: '4. What is not deleted',
        paragraphs: [
          'Your Google Play Games profile belongs to your Google Account and is managed by Google. You can manage or delete it at https://play.google.com/games/profile or in your Google Account.',
          `More information in the privacy policy: ${PRIVACY_POLICY_URL}`,
        ],
      },
    ],
  },
  {
    lang: 'es',
    languageName: 'Español',
    title: 'Pipe Mess – Borrar tu cuenta y tus datos',
    lastUpdated: 'Última actualización: 3 de noviembre de 2026',
    intro: [
      'Pipe Mess, desarrollado por David Recuero, crea una cuenta de juego automáticamente para guardar tu progreso en la nube. Puedes borrar esa cuenta y todos los datos asociados cuando quieras, de cualquiera de estas dos maneras.',
    ],
    sections: [
      {
        heading: '1. Desde el juego (inmediato)',
        bullets: [
          'Abre Pipe Mess y toca el botón de Ajustes en el menú principal.',
          'Toca Borrar cuenta.',
          'Mantén pulsado el botón Mantén para borrar durante 2 segundos.',
          'El juego confirma que la cuenta se ha borrado y se cierra.',
        ],
        paragraphs: [
          'Necesitas conexión a internet. La próxima vez que abras el juego, empezará de cero con una cuenta nueva y vacía.',
        ],
      },
      {
        heading: '2. Por email (si ya no tienes el juego)',
        paragraphs: [
          `Escribe a ${PIPEMESS_CONTACT_EMAIL} con el asunto «Borrar mi cuenta de Pipe Mess». Si puedes, incluye tu ID de jugador: aparece al final de la pantalla de Ajustes del juego. Si no lo tienes, escribe igualmente y te ayudaremos a identificar tu cuenta.`,
          'Borraremos la cuenta y te lo confirmaremos en un plazo de 30 días. Podemos pedirte algún dato para comprobar que la cuenta es tuya.',
        ],
      },
      {
        heading: '3. Qué se borra',
        bullets: [
          'Tu cuenta de juego (ID de jugador) y su vínculo con Google Play Juegos.',
          'La copia de tu progreso guardada en la nube: nivel, monedas y potenciadores.',
          'Si la borras desde el juego, también el progreso guardado en tu dispositivo.',
        ],
        paragraphs: [
          'El borrado es definitivo: el progreso no se puede recuperar y el desarrollador no conserva ninguna copia.',
        ],
      },
      {
        heading: '4. Qué no se borra',
        paragraphs: [
          'Tu perfil de Google Play Juegos pertenece a tu cuenta de Google y lo gestiona Google. Puedes gestionarlo o borrarlo en https://play.google.com/games/profile o en tu cuenta de Google.',
          `Más información en la política de privacidad: ${PRIVACY_POLICY_URL}`,
        ],
      },
    ],
  },
  {
    lang: 'ca',
    languageName: 'Català',
    title: 'Pipe Mess – Esborrar el teu compte i les teves dades',
    lastUpdated: 'Darrera actualització: 3 de novembre de 2026',
    intro: [
      'Pipe Mess, desenvolupat per David Recuero, crea un compte de joc automàticament per desar el teu progrés al núvol. Pots esborrar aquest compte i totes les dades associades quan vulguis, de qualsevol d’aquestes dues maneres.',
    ],
    sections: [
      {
        heading: '1. Des del joc (immediat)',
        bullets: [
          'Obre Pipe Mess i toca el botó de Configuració al menú principal.',
          'Toca Esborrar el compte.',
          'Mantén premut el botó Mantén per esborrar durant 2 segons.',
          'El joc confirma que el compte s’ha esborrat i es tanca.',
        ],
        paragraphs: [
          'Necessites connexió a internet. La propera vegada que obris el joc, començarà de zero amb un compte nou i buit.',
        ],
      },
      {
        heading: '2. Per correu electrònic (si ja no tens el joc)',
        paragraphs: [
          `Escriu a ${PIPEMESS_CONTACT_EMAIL} amb l’assumpte «Esborrar el meu compte de Pipe Mess». Si pots, inclou el teu ID de jugador: apareix al final de la pantalla de Configuració del joc. Si no el tens, escriu igualment i t’ajudarem a identificar el teu compte.`,
          'Esborrarem el compte i t’ho confirmarem en un termini de 30 dies. Et podem demanar alguna dada per comprovar que el compte és teu.',
        ],
      },
      {
        heading: '3. Què s’esborra',
        bullets: [
          'El teu compte de joc (ID de jugador) i el seu vincle amb Google Play Jocs.',
          'La còpia del teu progrés desada al núvol: nivell, monedes i potenciadors.',
          'Si l’esborres des del joc, també el progrés desat al teu dispositiu.',
        ],
        paragraphs: [
          'L’esborrament és definitiu: el progrés no es pot recuperar i el desenvolupador no en conserva cap còpia.',
        ],
      },
      {
        heading: '4. Què no s’esborra',
        paragraphs: [
          'El teu perfil de Google Play Jocs pertany al teu compte de Google i el gestiona Google. Pots gestionar-lo o esborrar-lo a https://play.google.com/games/profile o al teu compte de Google.',
          `Més informació a la política de privacitat: ${PRIVACY_POLICY_URL}`,
        ],
      },
    ],
  },
];
