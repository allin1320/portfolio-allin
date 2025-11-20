export interface Contact {
  email: string;
  phone?: string;
  socialMediaProfiles: Record<string, string>;
}

export const contact: Contact = {
  email: "contact@allin.dev", // Placeholder, as not specified in apropos.txt
  phone: "+261 38 72 158 90",
  socialMediaProfiles: {
    linkedin: "https://www.linkedin.com/in/allin-ramanampisoa-784298173",
  },
};