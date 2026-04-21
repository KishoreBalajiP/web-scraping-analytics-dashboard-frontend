interface Props {
  keyword: string;
  setKeyword: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({
  keyword,
  setKeyword,
  onSearch,
}: Props) => {
  return (
    <div className="flex gap-2 mt-4 mb-6">
      <input
        className="border px-4 py-2 rounded w-full"
        placeholder="Search keyword..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
      />

      <button
        onClick={onSearch}
        className="bg-indigo-600 text-white px-4 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;