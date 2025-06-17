interface ProjectDetailListProps {
  details: string[] | undefined;
}

export const ProjectDetailList = ({ details }: ProjectDetailListProps) => {
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
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
