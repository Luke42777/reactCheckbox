
const ValidationMessage = (props) => {
    return( <p>{props.txt}</p>
    )
}


class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isSubmited: false,
    }

    handleChange = () => {
        this.setState({ 
            isConfirmed: !this.state.isConfirmed,
            isSubmited: false })
    }

    displayMessage = () => {
        if (this.state.isSubmited) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt="You can watch the movie" />
            }
            else {
                return <ValidationMessage txt="You are not allowed to watch the movie yet:(" />
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmited: true,
        })

    }

    render() {

        return (
            <>
                <h1>Buy ticket for horror of the year</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleChange} checked={this.state.isConfirmed} />
                    <label htmlFor="age">I'm over 16</label><br />
                    <button type="submit">Buy ticket</button>
                    {this.displayMessage()}
                </form>
            </>
        )
    }
}


ReactDOM.render(<React.StrictMode><TicketShop /></React.StrictMode>, document.getElementById("root"))