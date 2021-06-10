import React from "react";
import axios from "axios";

export class Articlebase extends React.Component {
    state = {
        details: [],
        title: "",
        writer: "",
        body: "",
    };

    componentDidMount() {
        let data;

        axios
            .get("http://localhost:8000/api/articles/")
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => { });
    }




    render() {
        return (
            <div className="container jumbotron ">


             
                {this.state.details.map((detail, id) => (
                    <div key={id}>
                        <div className="card shadow-lg">
                           
                            <div className="card-body">
                             
                                    <h1> {detail.title} </h1>
                                   
                                        <cite title="Source Title">{detail.writer}</cite><br />
                                        <cite title="Source Title">{detail.body}</cite>
                                   
                               
                            </div>
                        </div>
                        <span className="border border-primary "></span>
                    </div>
                ))}
            </div>
        );
    }
}
export default Articlebase;
