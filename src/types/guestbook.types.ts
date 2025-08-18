// 방명록 항목 타입
export interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

// 방명록 폼 데이터 타입
export interface GuestbookFormData {
  name: string;
  message: string;
}

// 방명록 생성 요청 타입
export interface CreateGuestbookEntry {
  name: string;
  message: string;
}

// 컴포넌트 Props 타입들
export interface GuestbookFormProps {
  onSubmit: (data: GuestbookFormData) => void;
  loading: boolean;
}

export interface GuestbookEntryProps {
  entry: GuestbookEntry;
}

export interface GuestbookListProps {
  entries: GuestbookEntry[];
  loading?: boolean;
}
