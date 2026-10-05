'use server';

import { Resend } from 'resend';
import { EmailData } from '../types';

// Init Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(data: EmailData) {

  //Mock for E2E testing purposes
  if (process.env.NODE_ENV === 'test' || process.env.NEXT_PUBLIC_E2E_TEST === 'true') {
    return { success: true };
  }

  try {
    // Mail to receive from the contact form
    const { error } = await resend.emails.send({
      from: 'Portfolio Web Contact <contact@davidrecuero.com>',
      to: process.env.CONTACT_EMAIL as string,
      replyTo: data.email, 
      subject: `Portfolio Web Contact: ${data.subject || 'New Message from ' + data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    // Confirmation email to the user (auto-reply)
    const { error: autoReplyError } = await resend.emails.send({
      from: 'David Recuero <contact@davidrecuero.com>',
      to: data.email, 
      subject: 'Message received!',
      text: `Hello ${data.name},\n\nThank you for reaching out. I have received your message and will respond as soon as possible.\n\nBest regards,\nDavid Recuero\n\n---\n\nYour message:\nSubject: ${data.subject}\n\n${data.message}`,
    });

    // Log any error that occurs during the auto-reply process without blocking the main email sending process  
    if (autoReplyError) {
      console.error('Error with auto-reply:', autoReplyError.message);
    }
      
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Internal server error' };
  }
}