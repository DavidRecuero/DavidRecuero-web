'use server';

import { Resend } from 'resend';
import { EmailData } from '../types';

// Init Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(data: EmailData) {
  try {
    // MAIL WE RECEIVE
    const { error } = await resend.emails.send({
      // Resend API requires the 'from' field to be a verified sender email address
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: process.env.CONTACT_EMAIL as string,
      replyTo: data.email, 
      subject: `Portfolio: ${data.subject || 'New Message from ' + data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    //WAITING FOR FINAL DOMAIN
    /*
    // CONFIRMATION EMAIL WE SEND BACK TO THE USER
    const { error: autoReplyError } = await resend.emails.send({
      from: 'David Recuero\'s Portfolio Contact <onboarding@resend.dev>',
      to: data.email, 
      subject: 'Message sent!',
      text: `Hello ${data.name},\n\nThank you for contacting me. I have received your message and will respond as soon as possible.\n\nBest regards,\nDavid Recuero\n\n\nSubject: ${data.subject}\nMessage:\n${data.message}`,
    });

    // Log any error that occurs during the auto-reply process without blocking the main email sending process  
    if (autoReplyError) {
      console.error('Error with auto-reply:', autoReplyError.message);
    }
      */
     
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Internal server error' };
  }
}