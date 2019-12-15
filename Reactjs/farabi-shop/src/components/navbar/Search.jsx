import React from 'react'
import Strings from '../../utils/Strings'

function Search() {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder={Strings.findYourThing}
            />
        </form>
    )
}

export default Search
