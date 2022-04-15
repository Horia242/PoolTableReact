

function TextWithImg( { imgUrl, title, children } ) {
    return (
        <div className="text_with_img">
            <img src={imgUrl} alt={title} />
            <h3> {title} </h3>
            <p> {children} </p>
        </div>
    );
}

export default TextWithImg;