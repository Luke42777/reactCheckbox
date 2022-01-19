
const ValidationMessage = (props) => {
    return( <p>{props.txt}</p>
    )
}

const displayMessage = (isConf,isSubm) => {
    if (isSubm) {
        if (isConf) {
            return <ValidationMessage txt="You can watch the movie" />
        }
        else {
            return <ValidationMessage txt="You are not allowed to watch the movie yet:(" />
        }
    }
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

   

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmited: true,
        })

    }

    render() {

        const {isConfirmed,isSubmited} = this.state;

        return (
            <>
                <h1>Buy ticket for horror of the year</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox" id="age" onChange={this.handleChange} checked={isConfirmed} />
                    <label htmlFor="age">I'm over 16</label><br />
                    <button type="submit">Buy ticket</button>
                    {displayMessage(isConfirmed,isSubmited)}
                </form>
            </>
        )
    }
}


ReactDOM.render(<React.StrictMode><TicketShop /></React.StrictMode>, document.getElementById("root"))