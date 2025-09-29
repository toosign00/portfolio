import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
  { code: 'ja', label: '日本語' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className='fixed right-4 bottom-4 z-50 flex flex-col gap-2'>
      {languages.map((lang) => (
        <button
          key={lang.code}
          type='button'
          onClick={() => handleLanguageChange(lang.code)}
          className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-medium text-sm transition-all duration-200 ${
            i18n.language === lang.code
              ? 'border border-blue/30 bg-blue/20 text-white'
              : 'border border-white/10 bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
          }`}
          title={lang.label}
        >
          <span className='text-base'>{lang.code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};
