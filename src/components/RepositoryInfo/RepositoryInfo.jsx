import { useLocation } from "react-router-dom";

import "./RepositoryInfo.css"

const RepositoryInfo = () => {

    const { state } = useLocation();
    const { repository } = state;


    return (
        <div class="card">
            <div class="optional-header">
                <div class="thumbnail thumbnail--40x40"><img src={repository?.owner?.avatar_url} alt="" width="40" height="40" /></div>
                <div class="primary-title">
                    <div class="title">{repository?.owner?.login}</div>
                    <div class="subhead">{repository?.owner?.html_url}</div>
                </div>
            </div>
            <div class="primary-title">
                <div class="primary-text">{repository?.name}</div>
                <div class="secondary-text">{repository?.full_name} </div>
            </div>
            <div class="supporting-text">{repository.description}</div>
        </div>
    );
}

export default RepositoryInfo;

