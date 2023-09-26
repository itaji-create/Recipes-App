function Instructions(props) {
  const { videoId, details } = props;
  return (
    <div className="alert alert-success mb-5">
      <p>Instructions</p>
      <p  className='text-center' id="instructions" data-testid="instructions">{ details.strInstructions }</p>
      {videoId && (
        <div className='text-center'>
          <iframe
            title="recipe"
            src={ `https://www.youtube.com/embed/${videoId}` }
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

export default Instructions;