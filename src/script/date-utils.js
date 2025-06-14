/**
 * datetime 속성을 위한 날짜 형식 변환 함수
 * @param {string} durationString - "YYYY.MM ~ YYYY.MM" 또는 "YYYY.MM.DD ~ YYYY.MM.DD" 형식의 기간 문자열
 * @returns {string} ISO 8601 형식의 날짜 또는 기간 문자열
 */
export const formatDateForDatetime = (durationString) => {
  // 진행 중인 프로젝트 처리
  if (durationString.includes('진행 중')) {
    // 시작 날짜만 추출
    const startDateStr = durationString.split('~')[0].trim();

    // YYYY.MM 형식 처리 (월만 있는 경우)
    if (startDateStr.split('.').length === 2) {
      const [year, month] = startDateStr.split('.');
      return `${year}-${month.padStart(2, '0')}`;
    }

    // YYYY.MM.DD 형식 처리 (일까지 있는 경우)
    if (startDateStr.split('.').length === 3) {
      const [year, month, day] = startDateStr.split('.');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }

    return startDateStr; // 파싱 실패 시 원본 반환
  }

  // 시작 및 종료 날짜가 있는 프로젝트 처리
  const [startDateStr, endDateStr] = durationString.split('~').map((d) => d.trim());

  // 시작 날짜 변환
  let startISODate;
  if (startDateStr.split('.').length === 2) {
    // YYYY.MM 형식
    const [year, month] = startDateStr.split('.');
    startISODate = `${year}-${month.padStart(2, '0')}`;
  } else if (startDateStr.split('.').length === 3) {
    // YYYY.MM.DD 형식
    const [year, month, day] = startDateStr.split('.');
    startISODate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  } else {
    startISODate = startDateStr; // 파싱 실패 시 원본 반환
  }

  // 종료 날짜 변환
  let endISODate;
  if (endDateStr.split('.').length === 2) {
    // YYYY.MM 형식
    const [year, month] = endDateStr.split('.');
    endISODate = `${year}-${month.padStart(2, '0')}`;
  } else if (endDateStr.split('.').length === 3) {
    // YYYY.MM.DD 형식
    const [year, month, day] = endDateStr.split('.');
    endISODate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  } else {
    endISODate = endDateStr; // 파싱 실패 시 원본 반환
  }

  // ISO 8601 기간 형식으로 반환 (시작/종료)
  return `${startISODate}/${endISODate}`;
};
