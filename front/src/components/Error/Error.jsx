import { useParams } from "react-router-dom";

export default function Error() {
    //params
    const params = useParams();
    console.log(params);

    return (
        <>
            <h1>Este es un mensaje de erro</h1>
            <span>{`ERROR 404: la ruta ${params.error} no existe`}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis accusantium praesentium voluptatum molestias veniam sunt, aliquid incidunt consectetur possimus id cupiditate quos hic tempore unde doloribus est corrupti expedita.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis accusantium praesentium voluptatum molestias veniam sunt, aliquid incidunt consectetur possimus id cupiditate quos hic tempore unde doloribus est corrupti expedita.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis accusantium praesentium voluptatum molestias veniam sunt, aliquid incidunt consectetur possimus id cupiditate quos hic tempore unde doloribus est corrupti expedita.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis accusantium praesentium voluptatum molestias veniam sunt, aliquid incidunt consectetur possimus id cupiditate quos hic tempore unde doloribus est corrupti expedita.</p>

        </>
    );
}