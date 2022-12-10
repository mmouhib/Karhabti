import './gasFill.scss';
import { IGasFillGetDto } from '../../../utils/api/Dtos';

export default function GasFill({
	data,
	id,
}: {
	id: number;
	data: IGasFillGetDto;
}) {
	return (
		<div className="gas-fill-container">
			<div className="id">
				<span className="label">{id + 1}</span>
			</div>
			<div className="date">
				<span className="label">date:</span>
				<p>{data.date}</p>
			</div>
			<div className="quantity">
				<span className="label">quantity:</span>
				<p> {data.quantity}</p>
			</div>
			<div className="price">
				<span className="label">price:</span>
				<p>{data.price}</p>
			</div>
			<div className="Unit">
				<span className="label">Unit:</span>
				<p>{data.unit}</p>
			</div>
		</div>
	);
}
