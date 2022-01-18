const PositiveMessage = () => {
    return (
        <p><strong>You can watch the movie</strong></p>
    )

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////
const NegativeMessage = () => {
    return (
        <p>
            <strong>You are not allowed to watch the movie yet:(</strong>
        </p>
    )

}


////////////////////////////////////////////////////////////////////////////////////////////////////////////
class CheckboxAgeConfirmation extends React.Component {
    state = {
        isConfirmed: false,
    }

    handleChange = () => {
        this.setState({ isConfirmed: !this.state.isConfirmed, })
    }

    displayMessage = () =>
    {
        if(this.state.isConfirmed){
            return <PositiveMessage />
        }
        else{
            return <NegativeMessage />
        }
    }

    render() {

        return (
            <>
                <h1>Buy ticket for horror of the year</h1>
                <input type="checkbox" id="age" onChange={this.handleChange} checked={this.state.isConfirmed} />
                <label htmlFor="age">I'm over 16</label>
                {this.displayMessage()}

            </>
        )
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

ReactDOM.render(<React.StrictMode><CheckboxAgeConfirmation /></React.StrictMode>, document.getElementById("root"))