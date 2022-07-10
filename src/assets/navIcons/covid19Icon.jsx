export const covid19Icon = (pathStroke = "#072D4B") => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
        stroke={pathStroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 9V15" stroke={pathStroke} strokeWidth="2" />
      <path d="M15 12L9 12" stroke={pathStroke} strokeWidth="2" />
    </svg>
  );
};
