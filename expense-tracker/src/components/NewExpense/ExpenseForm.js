import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	//Method One: Using different useStates
	const [enteredTitle, setEnteredTitle] = useState("");

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const [enteredAmount, setEnteredAmount] = useState("");

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const [enteredDate, setEnteredDate] = useState("");

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
	};

	//Method Two: Using one useState with spread operator
	//   const [userInput, setUserInput] = useState({
	//     enteredTitle: '',
	//     enteredAmount: '',
	//     enteredDate: ''
	//   });

	//   const titleChangeHandler = (event) => {
	//     setUserInput({
	//       ...userInput,
	//       enteredTitle: event.target.value,
	//   });
	// };

	//   const amountChangeHandler = (event) => {
	//     setUserInput({
	//       ...userInput,
	//       enteredAmount: event.target.value,
	//   });
	// };

	//   const dateChangeHandler = (event) => {
	//     setUserInput({
	//       ...userInput,
	//       enteredDate: event.target.value,
	//   });
	// };

	//Method 3: Using the previous state and spread operator
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// });

	// const titleChangeHandler = (event) => {
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, enteredTitle: event.target.value };
	// 	});
	// };

	// const amountChangeHandler = (event) => {
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, enteredAmount: event.target.value };
	// 	});
	// };
	// const dateChangeHandler = (event) => {
	// 	setUserInput((prevState) => {
	// 		return { ...prevState, enteredDate: event.target.value };
	// 	});
	// };

	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__controls">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__controls">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
            value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__controls">
					<label>Date</label>
					<input
						type="date"
						min="2023-01-01"
						max="2030-12-31"
            value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</div>
		</form>
	);
};

export default ExpenseForm;
