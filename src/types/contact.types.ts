export interface ContactFormData {
  from_name: string;
  from_email: string;
  message: string;
  sent_time: string;
}

export interface ContactInfoData {
  phone: string;
  email: string;
}

export interface ContactFormProps {
  loading: boolean;
  onSubmit: (data: ContactFormData) => Promise<boolean>;
}
