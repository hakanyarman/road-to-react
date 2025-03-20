const Search = (props) => {
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={props.onChange}></input>
        </div>
    )
}

export default Search;