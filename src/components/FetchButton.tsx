interface Props {
  onFetch: () => void;
}

const FetchButton = ({ onFetch }: Props) => {
  return (
    <button
      onClick={onFetch}
      className="bg-indigo-600 hover:bg-indigo-700 transition text-white px-6 py-2 rounded-lg shadow font-medium"
    >
      Fetch Gmail Emails
    </button>
  );
};

export default FetchButton;