function Articles(props) {

    const definitions = props.data;
    
    return (
        <>
            {definitions.map((item, index) =>
            <section key={index} className="Section">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </section>
            )}
        </>
    );
}

export default Articles;