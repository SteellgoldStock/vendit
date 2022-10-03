import en_US from './en_US.json';
import fr_FR from './fr_FR.json';

export const getLang = (lang?: string) => {
  switch (lang) {
    case 'fr':
      return fr_FR;
    default:
      return en_US;
  }
}

export const params = (str: string, params: any) => {
  let result = str;
  Object.keys(params).forEach(key => {
    result = result.replace(new RegExp(`{${key}}`, 'g'), params[key]);
  });
  return result;
}