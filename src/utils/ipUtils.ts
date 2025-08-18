// IP 주소를 가져오는 유틸리티 함수들

export const getClientIP = async (): Promise<string | null> => {
  try {
    // 여러 IP 서비스를 시도해서 가장 빠른 것 사용
    const ipServices = [
      'https://api.ipify.org?format=json',
      'https://ipapi.co/json/',
      'https://httpbin.org/ip',
    ];

    // Promise.race로 가장 빠른 응답 사용
    const promises = ipServices.map(async (url) => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3초 타임아웃

      try {
        const response = await fetch(url, {
          signal: controller.signal,
          headers: {
            Accept: 'application/json',
          },
        });

        clearTimeout(timeoutId);

        if (!response.ok) throw new Error('Network error');

        const data = await response.json();

        // 각 서비스마다 다른 응답 형식 처리
        if (url.includes('ipify')) {
          return data.ip;
        }
        if (url.includes('ipapi')) {
          return data.ip;
        }
        if (url.includes('httpbin')) {
          return data.origin;
        }

        return null;
      } catch (error) {
        clearTimeout(timeoutId);
        throw error;
      }
    });

    const result = await Promise.race(promises);
    return result || null;
  } catch (error) {
    console.warn('IP 주소를 가져올 수 없습니다:', error);
    return null;
  }
};

// IP 주소 유효성 검증
export const isValidIP = (ip: string): boolean => {
  // IPv4 정규식
  const ipv4Regex =
    /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // IPv6 정규식 (간단버전)
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
};
