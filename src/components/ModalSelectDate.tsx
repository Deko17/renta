import React, { FC, Fragment, useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface ModalSelectDateProps {
	startDate: Date | null;
	endDate: Date | null;
	numOfDays: number;
	onChangeDate: (start: Date, end: Date) => void;
	renderChildren: ({ openModal }: { openModal: () => void }) => React.ReactNode;
}

const ModalSelectDate: FC<ModalSelectDateProps> = ({
	startDate,
	endDate,
	numOfDays,
	onChangeDate,
	renderChildren,
}) => {
	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const openModal = () => {
		setShowModal(true);
	};

	const onChangeDateRange = (dates: [Date, Date]) => {
		const [start, end] = dates;
		onChangeDate(start, end);
	};

	useEffect(() => {
		if (startDate && endDate) {
			const daysDiff = Math.ceil(
				(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
			);
			onChangeDate(startDate, endDate);
		}
	}, [startDate, endDate, onChangeDate]);

	const renderButtonOpenModal = () => {
		return renderChildren({ openModal });
	};

	return (
		<>
			{renderButtonOpenModal()}
			{showModal && (
				<div className="fixed inset-0 z-50 overflow-y-auto">
					<div className="flex items-center justify-center min-h-screen">
						<div className="fixed inset-0 bg-black opacity-50"></div>
						<div className="relative bg-white dark:bg-gray-900 rounded-lg w-[900px]">
							<div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
								<h3 className="text-lg font-medium text-gray-900 dark:text-white">
									When's your trip?
								</h3>
								<button
									className="text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300"
									onClick={closeModal}
								>
									<XMarkIcon className="w-6 h-6" />
								</button>
							</div>
							<div className="px-6 py-4">
								<DatePicker
									selected={startDate}
									onChange={onChangeDateRange}
									startDate={startDate}
									endDate={endDate}
									selectsRange
									monthsShown={2}
									showPopperArrow={false}
									inline
								/>
							</div>
							<div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 dark:border-gray-700">
								<div>
									<span className="block font-semibold">Selected dates:</span>
									{startDate && endDate ? (
										<span>
											{`${startDate.toDateString()} - ${endDate.toDateString()}`}
										</span>
									) : (
										<span>Select dates</span>
									)}
								</div>
								<div>
									<span className="block font-semibold">Number of days:</span>
									<span>{numOfDays}</span>
								</div>
							</div>
							<div className="flex justify-end px-6 py-4">
								<button
									className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
									onClick={closeModal}
								>
									Cancel
								</button>
								<button
									className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-500 rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-400"
									onClick={closeModal}
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalSelectDate;
