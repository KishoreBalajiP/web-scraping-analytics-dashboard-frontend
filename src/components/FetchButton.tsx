interface Props {
  onFetch: () => void;
}

const FetchButton = ({ onFetch }: Props) => {
  return (
    <button
      onClick={onFetch}
      className="bg-green-600 text-white px-5 py-2 rounded shadow"
    >
      Fetch Gmail Emails
    </button>
  );
};

export default FetchButton;