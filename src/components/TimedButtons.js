import Session from "./SessionComponent.js";
import Break from "./BreakComponent.js";

export default function TimedButtons() {
	return (
		<div
			id="timed-buttons"
			className="timed-buttons"
		>
			<Session />
			<Break />
		</div>
	);
}
