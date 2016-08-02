import React, { Component, PropTypes } from 'react'

class TextInput extends Component {
    
}

TextInput.propTypes = {
    onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
    placeholder: PropTypes.string,
}