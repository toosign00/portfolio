import type { ProjectDetail } from '@/data/projectsData';

export const ProjectDetailList = ({ details }: { details?: ProjectDetail[] }) => {
  if (!details || details.length === 0) return null;
  return (
    <div className="mb-2">
      <h3
        className="mb-2 text-base font-bold tracking-tight text-white"
        style={{ letterSpacing: '-0.01em', lineHeight: '1.3' }}
      >
        상세 내용
      </h3>
      <ul className="list-disc space-y-2 pl-5 text-sm font-normal text-gray-200">
        {details.map((item, idx) => (
          <li
            key={idx}
            className="leading-relaxed tracking-normal"
            style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}
          >
            <div className="font-semibold text-white">{item.title}</div>
            <div className="text-gray-400">{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
