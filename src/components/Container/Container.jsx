import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import SearchBox from "../SearchBox/SearchBox";
import Results from "../Results/Results";

import header from "../../assets/Git-find-logos_transparent.png"

import { getReposWithName } from "../../APIs/repositoryAPIs";

import "./Container.css"

const Container = () => {

    const [repositories, setRepositories] = useState([]);
    const [returnedData, setReturnedData] = useState(false);

    const navigate = useNavigate();

    const handleSearch = async (value) => {
        let response = await getReposWithName(value);
        setRepositories(response?.data?.items);
        // If the API returns values, minimize the header
        if (response?.data?.items?.length > 0) {
            setReturnedData(true);
        } else {
            setReturnedData(false);
        }
    }

    const handleRepositorySelected = (repository_id) => {
        console.log(repositories.find(repository => repository.id === repository_id));
        navigate("/repository", {
            state: {
                repository: repositories.find(repository => repository.id === repository_id)
            }
        });
    }

    return (
        <>
            <div className="container">
                <div className={`search-box-container ${returnedData ? " mini" : " full"}`}>
                    <img src={header} alt="Logo" className={returnedData ? "header-mini" : "header"} />
                    <SearchBox handleSearch={handleSearch} displayMsg={""} />
                </div>

                {repositories.length > 0 && returnedData && <Results repositories={repositories} handleClick={handleRepositorySelected} />}
            </div>
        </>
    );
}

export default Container;

