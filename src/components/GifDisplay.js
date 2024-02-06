function GifDisplay({gif}) {

    return (
        <div className="the-gif">
            {gif && <img src={gif.images.original.url} alt="Random GIF" />}
        </div>
    )
}

export default GifDisplay