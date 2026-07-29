import React from 'react';

interface FormFieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export default function FormField({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder = '...',
  rows,
}: FormFieldProps) {
  const baseClassName =
    "w-full px-4 py-3 rounded-lg bg-input-background text-text-input placeholder-text-muted focus:outline-none transition-colors text-sm";

  return (
    <div>
      <label htmlFor={id} className="block text-xs text-secondary mb-2">
        {label}
      </label>
      
      {rows ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClassName} resize-none`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClassName}
        />
      )}
    </div>
  );
}