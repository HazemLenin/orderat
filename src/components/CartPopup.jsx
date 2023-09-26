/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMinus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { useDrop } from "react-dnd";
import { useLocation } from "react-router-dom";

const PopupIcon = () => {
	const [cart, add, remove, decreaseAmount] = useContext(CartContext);
	const location = useLocation();

	const [{ isOver }, drop] = useDrop(
		() => ({
			accept: "product",
			drop: (item) => add(item.restaurantId, item.productId),
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
			}),
		}),
		[cart]
	);
	const [isOpen, setIsOpen] = useState(false);

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div ref={drop} className="fixed bottom-3 right-3">
			<button
				onClick={togglePopup}
				className=" justify-center items-center text-red-700 shadow-xl  rounded-full w-14 h-14 bg-white"
			>
				<FontAwesomeIcon icon={faCartShopping} />
			</button>
			{!!cart.length && location.pathname != "/checkout" && (
				<div className="absolute bottom-16 mb-3 right-2 rounded-lg w-72 shadow-xl p-5 bg-white  ">
					<ul>
						{cart.map((item, index) => (
							<li className="flex justify-between" key={index}>
								<span> {item.name}</span> <span>{item.amount}</span>
								<button
									onClick={() => decreaseAmount(item.restaurantId, item.id)}
									className="text-red-700"
								>
									<FontAwesomeIcon icon={faMinus} />
								</button>
							</li>
						))}
					</ul>
					<Link
						to="/checkout"
						className="bg-red-700 w-full mt-5 block rounded text-center text-white"
					>
						CheckOut
					</Link>
				</div>
			)}
		</div>
	);
};

export default PopupIcon;
