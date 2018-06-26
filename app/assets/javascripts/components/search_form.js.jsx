class SearchForm extends React.Component {
    
    handleSearch(event) {
        var query = event.target.value;
        var self = this;
        $.ajax({
            url: '/api/events/search',
            data: { query: query },
            success: function(data) {
                self.props.handleSearch(data);
            }, 
            error: function(xhr, status, error) {
                alert('Search error: ', status, xhr, error);
            }
        })
    }

    render() {
        return(
            <input onChange={(e) => this.handleSearch(e)}
                   type="text"
                   className="form-control"
                   placeholder="Type search phrase here..." />
        )
    }
}