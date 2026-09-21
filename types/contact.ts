export interface ReservationInquiry {
  message: string;
  name: string;
  surname: string;
  checkIn: string;
  checkOut: string;
  guests: string | number;
  rooms: string | number;
  email: string;
  mobile: string;
}

export interface ContactFormState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
  successMessage?: string;
}
