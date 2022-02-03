import { getReposWithName } from "../../APIs/repositoryAPIs";
import TextInput from "../common/TextInput/TextInput";
import "./SearchBox.css";

const SearchBox = () => {

    const handleSearch = async (value) => {
        console.log("---------------")
        console.log(process.env.REACT_APP_GH_KEY)
        console.log(`searching for ${value}`)

        // Trigger API call here
        await getReposWithName(value)
    }

    return (
        <TextInput
            timeoutFunction={handleSearch}
            label={"Just start typing and results will appear!"}
        />
    );
}

export default SearchBox;
