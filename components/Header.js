import React, { PropTypes, Component } from 'react'

class Header extends Component {
    save() {
        this.props.add("New data!")
    }
    
    render() {
        return (
            <header>
                <button onClick={this.save.bind(this)}>Add</button>
            </header>
        )
    }
}

Header.PropTypes = {
    add: PropTypes.func.isRequired
}

export default Header