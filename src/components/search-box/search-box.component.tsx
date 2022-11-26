import React, { Component } from "react";
type SearchBoxProps = {
  onChangeHandler: any;
  className: string;
  placeholder: string;
};
export class SearchBox extends Component<SearchBoxProps, {}> {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return (
      <div>
        <input
          type="search"
          className={className}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
