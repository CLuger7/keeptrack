import React, { useState } from "react";

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {

    const [Search, setSearch] = useState<string>("");

    const onClick = (e: any) => {
        setSearch(e.target.value);
        console.log(e);
    }
    return ( 
    <div>
        <input value={Search} onChange={(e) => onClick(e)}></input>
    </div> );
}

export default Search;
