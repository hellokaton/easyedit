import { ComponentProps } from "react";

export function DownloadIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.775 6.375A.625.625 0 0012.15 7c0 2.84-2.31 5.15-5.15 5.15-2.84 0-5.15-2.31-5.15-5.15A.625.625 0 00.6 7a6.35 6.35 0 001.875 4.525A6.354 6.354 0 007 13.4a6.35 6.35 0 004.525-1.875A6.354 6.354 0 0013.4 7a.625.625 0 00-.625-.625z"
        fill="#171717"
      />
      <path
        d="M6.143 9.19c.23.23.535.355.857.355.325 0 .63-.128.858-.355L9.43 7.617a.625.625 0 10-.885-.885l-.92.923v-6.43a.625.625 0 00-1.25 0v6.43l-.922-.923a.625.625 0 10-.885.885L6.143 9.19z"
        fill="#171717"
      />
    </svg>
  );
}
