import React from 'react'
import Strings from '../../utils/Strings'
import { connect } from 'react-redux'
import { changeSearchText } from '../../store/actions/itemsActions'


const mapStateToProps = state => {
    return {
        searchText: state.Items.searchText
    }
}

const mapDispatchToProps = { changeSearchText }

function Search(props) {
    const onChange = (e) => {
        props.changeSearchText(e.target.value)
    }
    return (
        <form className="form-inline my-2 my-lg-0">
            <input
                className="form-control mr-sm-2"
                type="search"
                onChange={(e) => onChange(e)}
                value={props.searchText}
                placeholder={Strings.findYourThing}
            />
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
