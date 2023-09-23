import FormInput from "../components/FormInput";
import "./VisaModel.css";
import { useState } from "react";

const VisaModal = () => {
	const [Values, setValues] = useState({
		Firstname: "",
		Lastname: "",
		Creditnumber: "",
		Css: "",
		Expirationyear: "",
		Lastmonth: "",
	});

	const inputs = [
		{
			id: 1,
			name: "first name",
			type: "text",
			placeholder: "First Name",
			errorMessage: " first name should be atlest 0-15 characters!",
			label: "First Name",
			pattern: "^[A-Za-z0-9]{0,15}$",
			required: true,
		},
		{
			id: 2,
			name: "last name",
			type: "text",
			placeholder: "Last Name",
			errorMessage: "last name should be 10-15 characters!",
			label: "Last Name",
			pattern: "^[A-Za-z0-9]{10,15}",
			required: true,
		},
		{
			id: 3,
			name: "credit card (no)",
			type: "password",
			placeholder: "Credit (No)",
			errorMessage: "It should be 3 characters!",
			label: "Credit (No)",
			required: true,
		},
		{
			id: 4,
			name: "css",
			type: "password",
			placeholder: "Css",
			errorMessage: "password does not match it should include 4 characters!",
			label: "Css",
			required: true,
		},
		{
			id: 5,
			name: "expiration year",
			type: "number",
			placeholder: "Expiration Year",
			errorMessage: "expiration year should be 2 characters!",
			label: "Expiration Year",
			required: true,
		},
		{
			id: 6,
			name: "last month",
			type: "number",
			placeholder: "Last Month",
			errorMessage: "last month should be 2 characters!",
			label: "Last Month",
			required: true,
		},
	];

	const handlesubmit = (e) => {
		e.preventDefault();
	};

	const onChange = (e) => {
		setValues({ ...Values, [e.target.name]: e.target.value });
	};

	return (
		<div className="app">
			<form onSubmit={handlesubmit}>
				<h1>VISA</h1>
				{inputs.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={Values[input.name]}
						onChange={onChange}
					/>
				))}
				<button className="button1">Submit</button>
			</form>
		</div>
	);
};

export default VisaModal;
