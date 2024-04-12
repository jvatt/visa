type Props = {
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
function QuizButton({ className, children, ...props }: Props) {
  return (
    <button
      className={`p-1 bg-fuchsia-900 hover:bg-fuchsia-800 active:bg-fuchsia-600 ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default QuizButton;
