import { Badge } from './Badge';

interface CareerItemProps {
  period: string;
  company: string;
  role: string;
  description: string[];
  skills: string[];
}

export function CareerItem({ period, company, role, description, skills }: CareerItemProps) {
  return (
    <div className="relative border-l border-white pl-8 text-left">
      <div className="border-pink absolute top-0 left-0 h-4 w-4 -translate-x-[0.5625rem] rounded-full border-4 bg-white"></div>

      <div className="text-gray mb-2 text-sm">{period}</div>
      <h3 className="mb-1 text-xl font-semibold text-white">{company}</h3>
      <p className="text-pink mb-4">{role}</p>

      <ul className="mb-4 list-inside list-disc space-y-1 text-white/80">
        {description.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline" className="border-gary bg-ui-background text-gray">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
