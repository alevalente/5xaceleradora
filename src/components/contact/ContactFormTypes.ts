
export interface FormData {
  name: string;
  email: string;
  company: string;
  website: string;
  phone: string;
  message: string;
  consent: boolean;
}

export interface InputFieldProps {
  icon: any;
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  isTextarea?: boolean;
}

export interface BenefitItem {
  icon: any;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple';
}
