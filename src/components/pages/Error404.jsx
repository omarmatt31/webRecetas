import error from "../../assets/error404.png";

const Error404 = () => {
    return (
        <section className="mainSection text-center">
            <img src={error} alt="error 404" />
            <div>
                <button className="btn btn-danger" >Volver al inicio</button>
            </div>
        </section>
    );
};

export default Error404;