import AudioPlayer from '../../components/player/AudioPlayer.jsx';
import { Categories } from '../../constans.js'
import { useParams } from "react-router-dom";

export const CategoryPage = () => {

    const params = useParams();
    const category = Categories.find((c) => c.id === Number(params.id));
    const categoryId = `${category.id}`;

    return (
        <div>
            <h1>{`Category Page ${categoryId}`} </h1>
        </div>
    )
}