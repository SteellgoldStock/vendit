import en_US from './en_US.json';
import fr_FR from './fr_FR.json';

export const getLang = (lang?: string) : any => {
  switch (lang) {
    case 'fr':
      return fr_FR;
    default:
      return en_US;
  }
}

export const params = (message: string, params?: any) : any => {;
  const words = message.match(/\{[^}]+\}/g);
  if (words) for (let i = 0; i < words.length; i++) message = message.replace(words[i], String(params[i]));
  return message;
}