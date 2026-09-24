'use client';

import { useRef, useState, type ChangeEvent, type FormEvent, type HTMLInputTypeAttribute } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ReservationInquiry } from '@/types/contact';
import styles from './contact-postcard-section.module.css';

type FieldName = Exclude<keyof ReservationInquiry, 'message'>;
interface Field {
  name: FieldName;
  label: string;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
  required?: boolean;
  fullWidth?: boolean;
}

const fields: Field[] = [
  { name: 'name', label: 'Name', autoComplete: 'given-name', required: true },
  { name: 'surname', label: 'Surname', autoComplete: 'family-name' },
  { name: 'checkIn', label: 'Check-In' },
  { name: 'checkOut', label: 'Check-Out' },
  { name: 'guests', label: 'Guests', type: 'number' },
  { name: 'rooms', label: 'Rooms', type: 'number' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: true, fullWidth: true },
  { name: 'mobile', label: 'Mobile', type: 'tel', autoComplete: 'tel', required: true, fullWidth: true },
];

export function ContactPostcardSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ReservationInquiry>({
    name: '', surname: '', checkIn: '', checkOut: '', guests: '', rooms: '', email: '', mobile: '', message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationInquiry, string>>>({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = event.target.name as keyof ReservationInquiry;
    const value = event.target.value;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
    setSubmissionMessage('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof ReservationInquiry, string>> = {};
    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!formData.mobile.trim()) nextErrors.mobile = 'Please enter your mobile number.';
    if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn) {
      nextErrors.checkOut = 'Choose a date after check-in.';
    }
    for (const name of ['guests', 'rooms'] as const) {
      const value = formData[name];
      if (value !== '' && (!Number.isInteger(Number(value)) || Number(value) < 1)) {
        nextErrors[name] = 'Enter a whole number of at least 1.';
      }
    }
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    // No delivery endpoint exists yet. Keep the inquiry intact and never claim it was sent.
    setSubmissionMessage('Your inquiry has not been sent. Online submission is not available yet.');
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className={styles.section}>
      <form ref={formRef} onSubmit={handleSubmit} noValidate className={styles.postcard}>
        <div className={styles.messageColumn}>
          <h2 id="contact-heading" className={styles.heading}>CONTACT US</h2>
          <label htmlFor="contact-message" className="sr-only">Message</label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className={styles.message}
          />
        </div>

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.line} />
          <Image
            src="/images/contact/flower.png"
            alt=""
            width={2074}
            height={2560}
            sizes="148px"
            quality={100}
            className={styles.flower}
          />
          <span className={styles.line} />
        </div>

        <div className={styles.details}>
          <div className={styles.fields}>
            {fields.map((field) => {
              const isDate = field.name === 'checkIn' || field.name === 'checkOut';
              const error = errors[field.name];
              const id = `contact-${field.name}`;
              return (
                <div key={field.name} className={cn(styles.field, field.fullWidth && styles.fullWidth)}>
                  <label htmlFor={id} className="sr-only">{field.label}</label>
                  <input
                    id={id}
                    name={field.name}
                    type={field.type || 'text'}
                    value={formData[field.name]}
                    placeholder={field.label}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    min={field.type === 'number' ? 1 : field.name === 'checkOut' ? formData.checkIn || undefined : undefined}
                    step={field.type === 'number' ? 1 : undefined}
                    inputMode={field.type === 'number' ? 'numeric' : undefined}
                    onChange={handleInputChange}
                    onFocus={isDate ? (event) => { event.currentTarget.type = 'date'; } : undefined}
                    onBlur={isDate ? (event) => { if (!event.currentTarget.value) event.currentTarget.type = 'text'; } : undefined}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    className={styles.input}
                  />
                  {error && <span id={`${id}-error`} className={styles.error}>{error}</span>}
                </div>
              );
            })}
          </div>

          <div className={styles.action}>
            <button type="submit" className={styles.send} aria-label="Send inquiry">
              <svg viewBox="0 0 162 54" aria-hidden="true" className={styles.ticket}>
                <path d="M15 .5H147A17 17 0 0 0 161.5 18V36A17 17 0 0 0 147 53.5H15A17 17 0 0 0 .5 36V18A17 17 0 0 0 15 .5Z" />
              </svg>
              <span className={styles.sendLabel}>
                SEND
                <svg viewBox="0 0 26 20" aria-hidden="true">
                  <path d="M2 7.5H20M2 12.5H20M15 3L23 10L15 17M11 3L19 10L11 17" />
                </svg>
              </span>
            </button>
          </div>
          {submissionMessage && <p className={styles.submissionMessage} role="status">{submissionMessage}</p>}
        </div>
      </form>
    </section>
  );
}
