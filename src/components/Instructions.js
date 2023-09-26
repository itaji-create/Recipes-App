function Instructions(props) {
  const { videoId, details } = props;
  return (
    <div gluid className="alert alert-success mb-5">
      <b>Instructions:</b>
      <p  className="" data-testid="instructions">{ details.strInstructions }</p>
      <br />
      {videoId && (
        <div className='text-center'>
          <iframe
            title="recipe"
            src={ `https://www.youtube.com/embed/${videoId}` }
            frameBorder="0"
            height={ '197' }
            width={ '350' }
            allowFullScreen
          />
        </div>
      )}
    </div>
  )
}

export default Instructions;
