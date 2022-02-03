import TextInput from "../common/TextInput/TextInput";
import "./SearchBox.css";

const SearchBox = () => {

    const handleSearch = (value) => {
        console.log("---------------")
        console.log(`searching for ${value}`)
        // Trigger API call here
    }

    return (
        <TextInput timeoutFunction={handleSearch} />
    );
}

export default SearchBox;
