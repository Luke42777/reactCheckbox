
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

const OrderForm = (props) => {
    const {submit,change,checked} = props;
    
    return(
        <form onSubmit={submit}>
        <input type="checkbox" id="age" onChange={change} checked={checked} />
        <label htmlFor="age">I'm over 16</label><br />
        <button type="submit">Buy ticket</button>
    </form>
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
                <OrderForm submit={this.handleSubmit} change={this.handleChange} checked={isConfirmed} />
                {displayMessage(isConfirmed,isSubmited)}
            </>
        )
    }
}


ReactDOM.render(<React.StrictMode><TicketShop /></React.StrictMode>, document.getElementById("root"))