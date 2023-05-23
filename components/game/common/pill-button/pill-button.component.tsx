type Props = {
  children: string;
  onClickFunc: () => void;
};

export default function PillButton({ children, onClickFunc }: Props) {
  return (
    <button
      type="button"
      className="w-28 rounded-full bg-purple py-2 font-bold uppercase text-white transition-colors hover:bg-red"
      onClick={() => onClickFunc()}
    >
      {children}
    </button>
  );
}
