import React, { useRef } from 'react';
import type { ContactFormData } from '@/types/contact.type';

interface ContactFormProps {
  loading: boolean;
  onSubmit: (data: ContactFormData) => Promise<boolean>;
}

export const ContactForm = ({ loading, onSubmit }: ContactFormProps) => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data: ContactFormData = {
      user_name: formData.get('user_name') as string,
      user_email: formData.get('user_email') as string,
      message: formData.get('message') as string,
    };

    const success = await onSubmit(data);
    if (success) {
      form.current.reset();
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="bg-ui-background-black mx-auto flex max-w-md flex-col gap-4 rounded-xl p-6 shadow-lg"
    >
      <label htmlFor="user_name" className="text-left font-semibold text-white">
        이름
      </label>
      <input
        id="user_name"
        type="text"
        name="user_name"
        required
        className="focus:ring-blue rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:outline-none focus-visible:ring-2"
      />
      <label htmlFor="user_email" className="text-left font-semibold text-white">
        이메일
      </label>
      <input
        id="user_email"
        type="email"
        name="user_email"
        required
        className="focus:ring-blue rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:outline-none focus-visible:ring-2"
      />
      <label htmlFor="message" className="text-left font-semibold text-white">
        메시지
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={5}
        className="focus:ring-blue resize-none rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:outline-none focus-visible:ring-2"
      />
      <button
        type="submit"
        className="submit--btn bg-blue cursor-pointer rounded py-2 font-semibold text-black transition hover:opacity-80 disabled:opacity-60"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="mr-2 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
            전송중...
          </span>
        ) : (
          <span>
            보내기 <i className="bi bi-send"></i>
          </span>
        )}
      </button>
    </form>
  );
};
