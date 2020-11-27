import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
	Scheduler,
	TimelineView,
	DayView,
	WeekView,
	MonthView,
	AgendaView,
} from "@progress/kendo-react-scheduler";

import { PDFExport } from "@progress/kendo-react-pdf";

function App() {
	let pdfExportComponent;
	return (
		<div className="App">
			<div>
				<div className="example-config">
					<button
						className="k-button"
						onClick={() => {
							pdfExportComponent.save();
						}}
					>
						Export PDF
					</button>
				</div>

				<PDFExport
					scale={0.6}
					paperSize="A4"
					margin="2cm"
					ref={(component) => (pdfExportComponent = component)}
				>
					<Scheduler>
						<TimelineView />
						<DayView />
						<WeekView />
						<MonthView />
						<AgendaView />
					</Scheduler>
				</PDFExport>
			</div>
		</div>
	);
}

export default App;
