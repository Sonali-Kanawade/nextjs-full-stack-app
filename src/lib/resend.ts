import { Resend } from 'resend';

export const resend = new Resend(process.env.NEXTJS_API_RESSEND_KEY);