import type { EducationProps } from '@/types/education.types';

export const educations: EducationProps[] = [
  {
    period: '2025.02 - 2025.08',
    org: '멋쟁이사자처럼 부트캠프',
    course: '프론트엔드 부트캠프 13기 수료',
    desc: [
      '웹 표준과 접근성을 고려한 시맨틱 마크업 구현 능력 습득',
      'TypeScript, React, Next.js, Tailwind CSS를 활용한 모던 프론트엔드 개발 역량 개발',
      'Git/GitHub 기반 협업과 팀 프로젝트를 통해 실무 환경에서의 역량 강화',
    ],
  },
  {
    period: '2023.03 - 2025.02',
    org: '계원예술대학교',
    course: '디지털미디어디자인과 프로그래밍 세부 전공',
    desc: [
      '기획부터 개발까지 전체 프로세스에 대한 통합적 관점과 다분야 협업 역량 습득',
      'UI/UX 디자인 원칙 기반의 사용자 중심 인터페이스 설계 방법론 습득',
      'HTML, CSS, JavaScript 핵심 웹 기술을 통한 프론트엔드 개발 기초 역량 확립',
    ],
  },
] as const;
