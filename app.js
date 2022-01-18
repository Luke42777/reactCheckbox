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
class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isSubmited: false,
    }

    handleChange = () => {
        this.setState({ isConfirmed: !this.state.isConfirmed, })
    }

    displayMessage = () => {
        if (this.state.isSubmited) {
            if (this.state.isConfirmed) {
                return <PositiveMessage />
            }
            else {
                return <NegativeMessage />
            }
        }
    }

    handlerSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmited: true,
        })

    }

    render() {

        return (
            <>
                <h1>Buy ticket for horror of the year</h1>
                <form onSubmit={this.handlerSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleChange} checked={this.state.isConfirmed} />
                    <label htmlFor="age">I'm over 16</label><br />
                    <button type="submit" onC>Buy ticket</button>
                    {this.displayMessage()}
                </form>
            </>
        )
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

ReactDOM.render(<React.StrictMode><TicketShop /></React.StrictMode>, document.getElementById("root"))