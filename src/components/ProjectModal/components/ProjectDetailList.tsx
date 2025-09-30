import { useTranslation } from 'react-i18next';
import type { ProjectDetail } from '@/types/projects.types';

export const ProjectDetailList = ({ details }: { details?: ProjectDetail[] }) => {
  const { t } = useTranslation();
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
            key={`${item.title}-${idx}`}
            className='leading-relaxed tracking-normal'
            style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}
          >
            <h4 className='mb-3 font-semibold text-lg text-white'>{item.title}</h4>

            {Array.isArray(item.description) ? (
              <ul className='list-disc space-y-3 pl-5'>
                {item.description.map((line, i) => (
                  <li
                    key={`${line.slice(0, 20)}-${i}`}
                    className='break-keep text-base text-gray-400 leading-relaxed'
                  >
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <div className='relative space-y-3 pl-5'>
                <span className='absolute top-0 left-0'>•</span>
                {item.description.split('\n\n').map((paragraph, i) => (
                  <p
                    key={`${item.title}-${i}`}
                    className='break-keep text-base text-gray-400 leading-relaxed'
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* 이미지가 있으면 표시 */}
            {item.image && (
              <div className='mt-4'>
                <img
                  src={item.image}
                  alt={item.image_alt || item.title}
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
