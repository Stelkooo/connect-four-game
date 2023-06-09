type Props = {
  color: 'red' | 'yellow' | 'white';
  children: JSX.Element | JSX.Element[];
  centered?: boolean;
  onClickFunc?: () => void;
};

export default function Button({
  color,
  children,
  centered = false,
  onClickFunc = undefined,
}: Props) {
  const styleConfig: Record<typeof color, { bg: string; text: string }> = {
    red: {
      bg: 'bg-red',
      text: 'text-white',
    },
    yellow: {
      bg: 'bg-yellow',
      text: 'text-black',
    },
    white: {
      bg: 'bg-white',
      text: 'text-black',
    },
  };
  return (
    <button
      type="button"
      onClick={onClickFunc}
      className={`${styleConfig[color].bg} ${
        styleConfig[color].text
      } inline-flex w-full ${
        centered ? 'justify-center' : 'justify-between'
      } heading-medium items-center rounded-[1.25rem] border-3 border-black p-5 shadow-brand transition-all hover:border-purple hover:shadow-purple`}
    >
      {children}
    </button>
  );
}
