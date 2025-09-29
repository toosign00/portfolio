import { useTranslation } from 'react-i18next';
import { useLocalizedText } from '@/i18n/hooks/useLocalizedText';
import type { ProjectDetail } from '@/types/projects.types';

export const ProjectDetailList = ({ details }: { details?: ProjectDetail[] }) => {
  const { t, i18n } = useTranslation();
  const getLocalizedText = useLocalizedText();
  if (!details || details.length === 0) return null;

  return (
    <div className='mb-6'>
      <h3
        id='project-detail-list-title'
        className='mb-4 font-bold text-white text-xl tracking-tight'
        style={{ letterSpacing: '-0.01em', lineHeight: '1.3' }}
      >
        {t('projectModals.details')}
      </h3>
      <ul className='space-y-6 text-gray-200' aria-labelledby='project-detail-list-title'>
        {details.map((item, idx) => (
          <li
            key={`${getLocalizedText(item.title)}-${idx}`}
            className='leading-relaxed tracking-normal'
            style={{ letterSpacing: '0.01em' }}
          >
            <h4 className='mb-3 font-semibold text-lg text-white'>
              {getLocalizedText(item.title)}
            </h4>

            {(() => {
              const currentLang = i18n.language as keyof typeof item.description;
              const localizedDesc = item.description[currentLang] || item.description.ko;
              const descArray = Array.isArray(localizedDesc) ? localizedDesc : [localizedDesc];
              return (
                <ul className='space-y-2'>
                  {descArray.map((line, _i) => (
                    <li key={`${line.slice(0, 20)}-${line}`} className='ml-6 list-disc'>
                      <div
                        className={`flex-1 ${i18n.language === 'ja' ? 'break-words' : 'break-keep'} text-base text-gray-400 leading-relaxed`}
                      >
                        {line.split('\n').map((textLine, lineIndex) => (
                          <div
                            key={`${line.slice(0, 15)}-${lineIndex}`}
                            className={lineIndex > 0 ? 'mt-4' : ''}
                          >
                            {textLine}
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              );
            })()}

            {/* 이미지가 있으면 표시 */}
            {item.image && (
              <div className='mt-4'>
                <img
                  src={item.image}
                  alt={
                    item.image_alt ? getLocalizedText(item.image_alt) : getLocalizedText(item.title)
                  }
                  className='w-full rounded-lg border border-gray-700 shadow-lg'
                  loading='lazy'
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
