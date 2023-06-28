import React, { FC } from "react";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";

export interface PageAddListing1Props { }

const PageAddListing1: FC<PageAddListing1Props> = () => {
	return (
		<CommonLayout
			index="01"
			backtHref="/add-listing-1"
			nextHref="/add-listing-2"
		>
			<>
				<h2 className="text-2xl font-semibold">Форма для заполнения собственников</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				{/* FORM */}
				<div className="space-y-8">
					{/* ITEM */}
					<FormItem
						label="Название объекта (ЖК)"
						desc="Жилой комплекс"
					>
						<Select>
							<option value="Hotel">Expo Avenue</option>
							<option value="Cottage">Cottage</option>
							<option value="Villa">Villa</option>
							<option value="Cabin">Cabin</option>
							<option value="Farm stay">Farm stay</option>
							<option value="Houseboat">Houseboat</option>
							<option value="Lighthouse">Lighthouse</option>
						</Select>
					</FormItem>

					<FormItem
						label="Форма Аренды"

					>
						<Select>
							<option value="Hotel">Помесячно</option>
							<option value="Private room">Посуточно</option>
							<option value="Share room">По часам</option>
						</Select>
					</FormItem>
				</div>
			</>
		</CommonLayout>
	);
};

export default PageAddListing1;
