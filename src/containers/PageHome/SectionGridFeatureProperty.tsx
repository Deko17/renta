import React, { FC, ReactNode } from "react";
import { DEMO_STAY_LISTINGS } from "data/listings";
import { StayDataType } from "data/types";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import HeaderFilter from "./HeaderFilter";
import PropertyCardH from "components/PropertyCardH/PropertyCardH";

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);
//
export interface SectionGridFeaturePropertyProps {
	stayListings?: StayDataType[];
	gridClass?: string;
	heading?: ReactNode;
	subHeading?: ReactNode;
	headingIsCenter?: boolean;
	tabs?: string[];
}

const SectionGridFeatureProperty: FC<SectionGridFeaturePropertyProps> = ({
	stayListings = DEMO_DATA,
	gridClass = "",
	heading = "Наши квартиры",
	// subHeading = "Popular places to stay that Chisfis recommends for you",
	headingIsCenter,
	tabs = ["Стандарт", "Комфорт", "Бизнес", "Бизнес+"],
}) => {
	const renderCard = (stay: StayDataType, index: number) => {
		return <PropertyCardH key={index} className="h-full" data={stay} />;
	};

	return (
		<div className="nc-SectionGridFeatureProperty relative">
			<HeaderFilter
				tabActive={"Стандарт"}
				// subHeading={subHeading}
				tabs={tabs}
				heading={heading}
				onClickTab={() => { }}
			/>
			<div
				className={`grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 ${gridClass}`}
			>
				{DEMO_DATA.map(renderCard)}
			</div>
			<div className="flex mt-16 justify-center items-center">
				<ButtonPrimary>Показать Больше</ButtonPrimary>
			</div>
		</div>
	);
};

export default SectionGridFeatureProperty;
