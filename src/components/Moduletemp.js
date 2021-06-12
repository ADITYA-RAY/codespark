import React from "react";
import axios from "axios";

export class Moduletemp extends React.Component {
	state = {
		details: [],
		title: "",
		writer: "",
        body: "",
	};

	componentDidMount() {
		let data;

		axios
			.get("https://codespark-backend.herokuapp.com/api/articles/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	}

	renderSwitch = (param) => {
		switch (param + 1) {
			case 1:
				return "primary ";
			case 2:
				return "secondary";
			case 3:
				return "success";
			case 4:
				return "danger";
			case 5:
				return "warning";
			case 6:
				return "info";
			default:
				return "yellow";
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("https://codespark-backend.herokuapp.com/api/articles/", {
				title: this.state.title,
				writer: this.state.writer,
                body: this.state.body,
			})
			.then((res) => {
				this.setState({
					title: "",
					writer: "",
                    body: "",
				});
			})
			.catch((err) => {});
	};

	render() {
		return (
			<div className="container jumbotron ">
				<form onSubmit={this.handleSubmit}>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text"
								id="basic-addon1">
								{" "}
								title{" "}
							</span>
						</div>
						<input type="text" className="form-control"
							placeholder="Name of the Poet/Author"
							aria-label="Username"
							aria-describedby="basic-addon1"
							value={this.state.title} name="title"
							onChange={this.handleInput} />
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
							Writer
							</span>
						</div>
						<textarea className="form-control "
								aria-label="With textarea"
								placeholder="Tell us what you think of ....."
								value={this.state.writer} name="writer"
								onChange={this.handleInput}>
						</textarea>
					</div>
                    <div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
							body
							</span>
						</div>
						<textarea className="form-control "
								aria-label="With textarea"
								placeholder="Tell us what you think of ....."
								value={this.state.body} name="body"
								onChange={this.handleInput}>
						</textarea>
					</div>

					<button type="submit" className="btn btn-primary mb-5">
						Submit
					</button>
				</form>

				<hr
					style={{
						color: "#000000",
						backgroundColor: "#000000",
						height: 0.5,
						borderColor: "#000000",
					}}
				/>

				{this.state.details.map((detail, id) => (
					<div key={id}>
						<div className="card shadow-lg">
							<div className={"bg-" + this.renderSwitch(id % 6) +
										" card-header"}>title {id + 1}</div>
							<div className="card-body">
								<blockquote className={"text-" + this.renderSwitch(id % 6) +
												" blockquote mb-0"}>
									<h1> {detail.title} </h1>
									<footer className="blockquote-footer">
										{" "}
										<cite title="Source Title">{detail.writer}</cite><br/>
                                        <cite title="Source Title">{detail.body}</cite>
									</footer>
								</blockquote>
							</div>
						</div>
						<span className="border border-primary "></span>
					</div>
				))}
			</div>
		);
	}
}
export default Moduletemp;
