class EventApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        this.getDataFromApi();
    }

    getDataFromApi() {
        var self = this;
        $.ajax({
            url: '/api/events',
            success: function(data) {
                self.setState( {events: data} );
            },
            error: function(xhr, status, error) {
                alert('Cannot get data from API: ', error);
            }
        })
    }

    handleSearch(events) {
        this.setState({ events: events })
    }

    render() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>ReactJS Tutorial</h1>
                    <p>by Donovan</p>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <SearchForm handleSearch={(e)=>this.handleSearch(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <EventTable events={this.state.events} />
                    </div>
                </div>
            </div>
        )
    }
}