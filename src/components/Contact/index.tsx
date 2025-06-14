import React, { useRef } from 'react';
import { SectionLayout } from '@/layout/SectionLayout';
import { SectionHeader } from '@/layout/SectionHeader';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import { useContactForm } from '@/hooks/useContactForm';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { loading, handleSubmit } = useContactForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name') as string,
      user_email: formData.get('user_email') as string,
      message: formData.get('message') as string,
    };

    const success = await handleSubmit(data);
    if (success) {
      form.current.reset();
    }
  };

  return (
    <SectionLayout>
      <SectionHeader
        title="감사합니다."
        description="궁금한 점이 있으시다면 아래의 연락처로 연락 부탁드립니다."
      />
      <div className="mb-12 flex flex-col items-center gap-2 text-center text-white">
        <div className="flex w-[15.625rem] items-center justify-center gap-2">
          <HiOutlinePhone className="text-blue text-xl" />
          <span>+82 10-8514-8477</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <MdOutlineEmail className="text-blue text-xl" />
          <span>kevinsoo1014@gmail.com</span>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={onSubmit}
        className="bg-ui-background-black mx-auto flex max-w-md flex-col gap-4 rounded-xl p-6 shadow-lg"
      >
        <label className="text-left font-semibold text-white">이름</label>
        <input
          type="text"
          name="user_name"
          required
          className="rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <label className="text-left font-semibold text-white">이메일</label>
        <input
          type="email"
          name="user_email"
          required
          className="rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <label className="text-left font-semibold text-white">메시지</label>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded border border-gray-700 bg-[#23272f] p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
    </SectionLayout>
  );
};
