import type { ProjectThumbnail } from '@/types/projects.types';

// 썸네일 이미지의 srcSet 속성값을 생성
export const getThumbnailSrcSet = (thumbnail: ProjectThumbnail): string => {
  const { baseUrl, bucket, keyBase, filename, widths, ext } = thumbnail;
  return widths
    .map((width) => `${baseUrl}/${bucket}/${keyBase}/${filename}-${width}.${ext} ${width}w`)
    .join(', ');
};

// 특정 크기의 썸네일 이미지 URL을 생성 (기본값: 640px, srcSet 미지원 브라우저 대비 fallback)
export const getThumbnailUrl = (thumbnail: ProjectThumbnail, width = 640): string => {
  const { baseUrl, bucket, keyBase, filename, ext } = thumbnail;
  return `${baseUrl}/${bucket}/${keyBase}/${filename}-${width}.${ext}`;
};
