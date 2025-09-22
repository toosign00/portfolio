export interface ImageTransformOptions {
  width: number;
  height?: number;
  quality: number;
  format?: 'webp' | 'jpg' | 'png';
}

// 이미지 URL 변환 함수
export const transformSrcImage = (originalUrl: string, options: ImageTransformOptions): string => {
  try {
    const url = new URL(originalUrl);

    // Cloudinary URL인지 확인
    if (!url.hostname.includes('cloudinary.com')) {
      return originalUrl;
    }

    const pathParts = url.pathname.split('/');
    const uploadIndex = pathParts.indexOf('upload');

    if (uploadIndex === -1) {
      return originalUrl;
    }

    const transformations: string[] = [];

    if (options.width) transformations.push(`w_${options.width}`);
    if (options.height) transformations.push(`h_${options.height}`);
    if (options.quality) transformations.push(`q_${options.quality}`);

    // 변환 파라미터가 없으면 원본 반환
    if (transformations.length === 0) {
      return originalUrl;
    }

    // 변환 파라미터를 URL에 삽입
    const beforeUpload = pathParts.slice(0, uploadIndex + 1);
    const afterUpload = pathParts.slice(uploadIndex + 1);
    const transformationString = transformations.join(',');

    const newPath = [...beforeUpload, transformationString, ...afterUpload].join('/');
    return `${url.origin}${newPath}`;
  } catch {
    return originalUrl;
  }
};

// 반응형 썸네일 이미지 srcSet 생성 함수
export const generateSrcSet = (srcUrl: string): string => {
  const baseSizes = [360, 480, 640, 854, 1280, 1920, 2560];
  const devicePixelRatios = [1, 2, 3]; // 1x, 2x, 3x DPR 지원

  const srcSetEntries: string[] = [];

  baseSizes.forEach((width) => {
    devicePixelRatios.forEach((dpr) => {
      const actualWidth = width * dpr;
      const transformedUrl = transformSrcImage(srcUrl, {
        width: actualWidth,
        quality: 100,
      });

      srcSetEntries.push(`${transformedUrl} ${actualWidth}w`);
    });
  });

  return srcSetEntries.join(', ');
};

// 반응형 썸네일 이미지 sizes 속성
export const getSrcSizes = (): string => {
  return '(max-width: 480px) calc(100vw - 4rem), (max-width: 767px) calc(100vw - 4rem), (max-width: 1024px) calc(50vw - 2.5rem), calc(33.333vw - 2rem)';
};
