export const snakeToCamel = (str: string): string => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

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

export const convertProjectData = (projectData: unknown): unknown => {
  return convertKeysToCamelCase(projectData);
};

export const convertProjectsData = (projectsData: unknown[]): unknown[] => {
  return projectsData.map(convertKeysToCamelCase);
};
