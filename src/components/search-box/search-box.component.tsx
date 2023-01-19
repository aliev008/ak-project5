import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
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
