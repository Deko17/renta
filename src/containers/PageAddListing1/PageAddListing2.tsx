import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "components/AnyReactComponent/LocationMarker";
import Label from "components/Label/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import CommonLayout from "./CommonLayout";
import FormItem from "./FormItem";

export interface PageAddListing2Props { }

const PageAddListing2: FC<PageAddListing2Props> = () => {
	return (
		<CommonLayout
			index="02"
			nextHref="/add-listing-3"
			backtHref="/add-listing-1"
		>
			<>
				<h2 className="text-2xl font-semibold">Местоположение</h2>
				<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
				{/* FORM */}
				<div className="space-y-8">
					<ButtonSecondary>
						<MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
						<span className="ml-3">Use current location</span>
					</ButtonSecondary>
					{/* ITEM */}
					<FormItem label="Район">
						<Select>
							<option value="Viet Nam">Алматы р-н</option>
							<option value="Thailand">Есильский р-н</option>
							<option value="France">Нура р-н</option>
							<option value="Singapore">р-н Байконур</option>
							<option value="Jappan">Сарыарка р-н</option>
						</Select>
					</FormItem>
					<FormItem label="Улица">
						<Input placeholder="..." />
					</FormItem>
					<FormItem label="Номер Квартиры">
						<Input />
					</FormItem>
					<div>
						<Label>Адрес Точка на карте</Label>
						<span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
							1110 Pennsylvania Avenue NW, Washington, DC 20230
						</span>
						<div className="mt-4">
							<div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
								<div className="rounded-xl overflow-hidden">
									<GoogleMapReact
										bootstrapURLKeys={{
											key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
										}}
										yesIWantToUseGoogleMapApiInternals
										defaultZoom={15}
										defaultCenter={{
											lat: 51.1694, // Latitude for Astana, Kazakhstan
											lng: 71.4491,
										}}
									>
										<LocationMarker lat={51.1694} lng={71.4491} />
									</GoogleMapReact>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</CommonLayout>
	);
};

export default PageAddListing2;
