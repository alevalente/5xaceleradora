
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InputFieldProps, FormData } from './ContactFormTypes';

interface ContactFormFieldProps extends InputFieldProps {
  formData: FormData;
  focusedField: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: (name: string) => void;
  onBlur: () => void;
}

const ContactFormField: React.FC<ContactFormFieldProps> = ({ 
  icon: Icon, 
  label, 
  name, 
  type = "text", 
  placeholder, 
  required = false,
  isTextarea = false,
  formData,
  focusedField,
  onChange,
  onFocus,
  onBlur
}) => {
  const isFocused = focusedField === name;
  const hasValue = formData[name as keyof FormData];
  
  return (
    <div className="relative group">
      <label className={cn(
        "flex items-center text-sm font-medium mb-2 transition-colors duration-200",
        isFocused ? "text-blue-600" : "text-gray-700"
      )}>
        <Icon className={cn(
          "h-4 w-4 mr-2 transition-colors duration-200",
          isFocused ? "text-blue-600" : hasValue ? "text-green-500" : "text-gray-400"
        )} />
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {isTextarea ? (
          <textarea
            name={name}
            value={formData[name as keyof FormData] as string}
            onChange={onChange}
            onFocus={() => onFocus(name)}
            onBlur={onBlur}
            required={required}
            rows={4}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none",
              isFocused 
                ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-100/50 transform scale-[1.02]" 
                : hasValue 
                  ? "border-green-300 bg-green-50/30" 
                  : "border-gray-200 hover:border-gray-300 bg-white"
            )}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={formData[name as keyof FormData] as string}
            onChange={onChange}
            onFocus={() => onFocus(name)}
            onBlur={onBlur}
            required={required}
            className={cn(
              "w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none",
              isFocused 
                ? "border-blue-500 bg-blue-50/50 shadow-lg shadow-blue-100/50 transform scale-[1.02]" 
                : hasValue 
                  ? "border-green-300 bg-green-50/30" 
                  : "border-gray-200 hover:border-gray-300 bg-white"
            )}
            placeholder={placeholder}
          />
        )}
        {hasValue && (
          <CheckCircle className="absolute right-3 top-3 h-5 w-5 text-green-500 animate-scale-in" />
        )}
      </div>
    </div>
  );
};

export default ContactFormField;
