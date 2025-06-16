import { useParams, useNavigate } from 'react-router-dom';
import type { Project } from '@/data/projectsData';
import { TechnologyStack } from './TechnologyStack';
import { ProjectInfo } from './ProjectInfo';
import { ProjectDetails } from './ProjectDetails';
import { projects } from '@/data/projectsData';
import { IoArrowBackOutline, IoSearch } from 'react-icons/io5';
import { Button } from '@/components/common/Button';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

// 썸네일 URL 생성 함수
const getThumbnailUrl = (projectId: string): string => {
  return `https://toosign.kr/assets/images/${projectId}.webp`;
};

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p: Project) => p.id === id);

  // SEO 메타데이터 설정
  useDocumentMeta({
    title: project ? `${project.title} - 프로젝트 상세` : '페이지를 찾을 수 없습니다 - 포트폴리오',
    description: project
      ? project.summary || project.description.substring(0, 160)
      : '요청하신 프로젝트 페이지를 찾을 수 없습니다.',
    keywords: project
      ? `${project.title}, ${project.technologies.join(', ')}, 프로젝트, 포트폴리오`
      : undefined,
    ogTitle: project ? `${project.title} - 프로젝트 상세` : undefined,
    ogDescription: project ? project.summary || project.description.substring(0, 160) : undefined,
    ogImage: id ? getThumbnailUrl(id) : undefined,
    ogUrl: `${window.location.origin}/project/${id}`,
    twitterCard: 'summary_large_image',
    canonical: `${window.location.origin}/project/${id}`,
    robots: project ? 'index, follow' : 'noindex, nofollow',
    structuredData: project
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.summary || project.description.substring(0, 160),
          author: {
            '@type': 'Person',
            name: '노현수',
          },
          dateCreated: project.period?.split(' - ')[0] || '',
          programmingLanguage: project.technologies,
          url: `${window.location.origin}/project/${id}`,
          ...(project.github && { codeRepository: project.github }),
          ...(project.deploy && { url: project.deploy.url }),
        }
      : undefined,
  });

  // 404 페이지 처리
  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a101a]">
        <div className="flex flex-col items-center">
          <IoSearch className="mx-auto mb-4 text-6xl text-gray-400" />
          <h1 className="mb-4 text-2xl font-bold text-white">프로젝트를 찾을 수 없습니다</h1>
          <p className="mb-8 text-gray-400">
            요청하신 프로젝트가 존재하지 않거나 삭제되었을 수 있습니다.
          </p>
          <Button variant="secondary" size="md" onClick={() => navigate('/')}>
            메인으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  const details = project.details;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a101a]">
      <div className="w-full max-w-xl px-8 py-4">
        <button
          className="hover:text-blue mb-8 flex cursor-pointer items-center gap-0.5 text-sm text-gray-400"
          onClick={() => navigate('/')}
          aria-label="메인페이지로 돌아가기"
        >
          <IoArrowBackOutline className="text-lg" /> 메인으로 돌아가기
        </button>

        <article className="flex flex-col items-start gap-6">
          <h1 className="mb-1 text-2xl font-bold text-white">{project.title}</h1>

          <div className="text-gray mb-1 text-sm font-semibold" style={{ lineHeight: '1.5' }}>
            {project.summary}
          </div>

          <div className="mb-2 text-base font-normal text-white" style={{ lineHeight: '1.7' }}>
            {project.description}
          </div>

          <TechnologyStack technologies={project.technologies} />
          <ProjectInfo project={project} />
          <ProjectDetails details={details} />
        </article>
      </div>
    </div>
  );
};
