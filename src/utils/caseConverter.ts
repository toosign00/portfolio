/**
 * snake_case를 camelCase로 변환하는 유틸리티 함수들
 */

/**
 * 문자열을 snake_case에서 camelCase로 변환
 * @param str snake_case 문자열
 * @returns camelCase 문자열
 */
export const snakeToCamel = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * 객체의 모든 키를 snake_case에서 camelCase로 변환
 * @param obj 변환할 객체
 * @returns 키가 camelCase로 변환된 객체
 */
export const convertKeysToCamelCase = (obj: unknown): unknown => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamelCase);
  }

  const converted: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
    const camelKey = snakeToCamel(key);
    converted[camelKey] = convertKeysToCamelCase(value);
  }

  return converted;
};

/**
 * 프로젝트 데이터를 위한 특화된 변환 함수
 * @param projectData 서버에서 받은 프로젝트 데이터
 * @returns camelCase로 변환된 프로젝트 데이터
 */
export const convertProjectData = (projectData: unknown): unknown => {
  return convertKeysToCamelCase(projectData);
};

/**
 * 프로젝트 목록 데이터를 위한 특화된 변환 함수
 * @param projectsData 서버에서 받은 프로젝트 목록 데이터
 * @returns camelCase로 변환된 프로젝트 목록 데이터
 */
export const convertProjectsData = (projectsData: unknown[]): unknown[] => {
  return projectsData.map(convertKeysToCamelCase);
};
