class EventTable extends React.Component{

    render() {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th className="col-md-3">Name</th>
                        <th className="col-md-2">Date</th>
                        <th className="col-md-3">Place</th>
                        <th className="col-md-4">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getEventsElements()}
                </tbody>
            </table>
        )
    }

    getEventsElements() {
        var events = [];
        this.props.events.forEach(event => {
            events.push(<Event event={event} key={'event' + event.id} />);
        });
        return events;
    }
}