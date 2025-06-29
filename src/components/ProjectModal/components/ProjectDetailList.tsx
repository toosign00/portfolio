import type { ProjectDetail } from '@/types/projects.type';

export const ProjectDetailList = ({ details }: { details?: ProjectDetail[] }) => {
  if (!details || details.length === 0) return null;

  return (
    <div className='mb-6'>
      <h3
        id='project-detail-list-title'
        className='mb-4 text-xl font-bold tracking-tight text-white'
        style={{ letterSpacing: '-0.01em', lineHeight: '1.3' }}
      >
        상세 내용
      </h3>
      <ul className='space-y-6 text-gray-200' aria-labelledby='project-detail-list-title'>
        {details.map((item, idx) => (
          <li
            key={`${item.title}-${idx}`}
            className='leading-relaxed tracking-normal'
            style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}
          >
            <h4 className='mb-3 text-lg font-semibold text-white'>{item.title}</h4>

            {Array.isArray(item.description) ? (
              <ul className='list-disc space-y-2 pl-5'>
                {item.description.map((line, i) => (
                  <li
                    key={`${line.slice(0, 20)}-${i}`}
                    className='text-base leading-relaxed text-gray-400'
                  >
                    {line}
                  </li>
                ))}
              </ul>
            ) : (
              <p className='relative pl-5 text-base leading-relaxed text-gray-400'>
                <span className='absolute top-0 left-0'>•</span>
                {item.description}
              </p>
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
