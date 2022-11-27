import "./search-box.styles.css";

type SearchBoxProps = {
  onChangeHandler: (event: any) => void;
  className: string;
  placeholder: string;
};

export const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: SearchBoxProps) => {
  return (
    <div>
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};
