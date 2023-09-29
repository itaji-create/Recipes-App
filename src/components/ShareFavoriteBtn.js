import copyToClipboard from '../utils/copyToClipboard';

function ShareFavoriteBtn(props) {
  const { exist, handleClick } = props;
    
  return (
    <div id="share-favorite">
      <button
        type="button"
        data-testid="share-btn"
        className="btn btn-outline-secondary m-1 p-1"
        onClick={ copyToClipboard }
      >
        Copy 📝
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary m-1 p-1"
        onClick={ handleClick }
      >
        { `Favorite ${exist ? '❤️' : '🤍'} `}
      </button>
    </div>
  )
}

export default ShareFavoriteBtn;