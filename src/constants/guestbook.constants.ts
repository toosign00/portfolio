// 방명록 관련 상수들
export const GUESTBOOK_CONSTANTS = {
  VALIDATION: {
    NAME_MIN_LENGTH: 1,
    NAME_MAX_LENGTH: 10,
    MESSAGE_MIN_LENGTH: 1,
    MESSAGE_MAX_LENGTH: 1000,
  },
  API: {
    IP_FETCH_TIMEOUT: 3000,
    MAX_RETRY_COUNT: 3,
    RETRY_DELAY_BASE: 1000,
    MAX_RETRY_DELAY: 30000,
  },
  UI: {
    FORM_ROWS: 4,
    DEBOUNCE_DELAY: 300,
  },
} as const;

// 방명록 에러 메시지
export const GUESTBOOK_ERROR_MESSAGES = {
  VALIDATION: {
    NAME_REQUIRED: '이름을 입력해주세요.',
    NAME_TOO_LONG: '이름은 10자 이하로 입력해주세요.',
    MESSAGE_REQUIRED: '메시지를 입력해주세요.',
    MESSAGE_TOO_LONG: '메시지는 1000자 이하로 입력해주세요.',
  },
  API: {
    NETWORK_ERROR: '네트워크 연결을 확인해주세요.',
    DUPLICATE_ERROR: '이미 등록된 내용입니다. 잠시 후 다시 시도해주세요.',
    PERMISSION_ERROR: '접근 권한이 없습니다. 페이지를 새로고침 후 다시 시도해주세요.',
    GENERAL_ERROR: '방명록 작성 중 오류가 발생했습니다.',
    FETCH_ERROR: '방명록 목록 조회 실패',
  },
  SUCCESS: {
    CREATE_SUCCESS: '소중한 메시지를 남겨주셔서 감사합니다!',
  },
} as const;
