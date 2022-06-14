import './TrackList.css';
import TrackFunction from '../Track/TrackFunction';

function TrackListFunction(props) {
	const {tracks, onAdd, onRemove, isRemoval} = props;
	
	return (
		<div className="TrackList">
			{
				tracks.map(track => {
					return <TrackFunction 
						track={track} 
						key={track.id} 
						onAdd={onAdd}
						onRemove={onRemove}
						isRemoval={isRemoval} />
				})
			}
		</div>
	);
}

export default TrackListFunction;