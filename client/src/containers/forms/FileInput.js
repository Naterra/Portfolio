import React from 'react'

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    handleChange = (e) => {
        input.onChange(e.target.files[0])
    }

    render() {
        const { input: { value } } = this.props;

        return (<input
            type="file"
            value={value}
            onChange={this.handleChange}
        />);
    }
}

export default FileInput;