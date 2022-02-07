import TextInput from "../common/TextInput/TextInput";

import "./SearchBox.css";

const SearchBox = ({ handleSearch }) => {

    const handleTypingStopped = (value) => {
        handleSearch(value)
    }

    return (
        <TextInput
            timeoutFunction={handleTypingStopped}
            label={"Just start typing and results will appear!"}
        />
    );
}

export default SearchBox;
