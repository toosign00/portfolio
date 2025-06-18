export interface ContactFormData {
  user_name: string;
  user_email: string;
  message: string;
}

export interface ContactInfoData {
  phone: string;
  email: string;
}

export interface ContactInfoProps {
  info: ContactInfoData;
}

export interface ContactFormProps {
  loading: boolean;
  onSubmit: (data: ContactFormData) => Promise<boolean>;
}
