import type { EducationProps } from '@/types/education.type';

export const educations: EducationProps[] = [
  {
    period: '2025.02 - 2025.08',
    org: '멋쟁이사자처럼 부트캠프',
    course: '프론트엔드 부트캠프 13기 수료',
    desc: [
      '웹 표준 및 웹 접근성을 준수하는 시맨틱 마크업 구현',
      'React, TypeScript, Tailwind CSS 기반 모던 프론트엔드 개발 학습',
      'Git/GitHub 협업 워크플로우 및 팀 프로젝트 경험을 통한 실무 역량 강화',
    ],
  },
  {
    period: '2023.03 - 2025.02',
    org: '계원예술대학교',
    course: '디지털미디어디자인과 프로그래밍 세부 전공',
    desc: [
      '기획-디자인-개발 전 과정에 대한 통합적 이해와 다분야 협업 능력 배양',
      'UI/UX 디자인 원칙과 사용자 중심 인터페이스 설계 방법론 학습',
      'HTML, CSS, JavaScript 핵심 웹 기술과 프론트엔드 개발 기초 역량 구축',
    ],
  },
] as const;
