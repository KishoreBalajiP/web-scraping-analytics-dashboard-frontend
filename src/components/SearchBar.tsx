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
    <div className="flex w-full md:w-auto gap-2">

      <input
        className="border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none px-4 py-2 rounded-lg w-full md:w-64"
        placeholder="Search emails..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <button
        onClick={onSearch}
        className="bg-gray-800 hover:bg-black transition text-white px-5 rounded-lg"
      >
        Search
      </button>

    </div>
  );
};

export default SearchBar;