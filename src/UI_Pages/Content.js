
import data from '../Backend/Data'
import { useParams } from 'react-router-dom'
import FoodItem from './FoodItem'
import Display from './Display'
import ImageSlider from './ImageSlider'
import './Content.css'
// import img from '../Backend/Food_pics/Maharashtrian_food/vada_pav.jpg'

const obj = {
    minHeight: '80vh',
}
const festival = {
    color: 'tomato',
    display: 'flex',
    // flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    background: 'lightblue',
    // border:'2px solid black',

}
const food = {
    color: 'blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#ff7979'
}

const places = {
    color: 'green',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f9ca24'
}

const Content = () => {
    const { state } = useParams();

    if (state != undefined) {
        console.log(state)


        switch (state) {
            case 'Maharashtra':
                return <Display value={data[0]} />
                break;
            case 'UP':
                return <Display value={data[1]} />
                break;
            case 'Bihar':
                return <Display value={data[2]} />
                break;
            case 'Rajasthan':
                return <Display value={data[3]} />
                break;
            case 'Gujarat':
                return <Display value={data[4]} />
                break;
            default: <h1>Invalid Input</h1>
        }


    }
    else {
        return (
            <>
                <div className="content-main-div">
                <div >
                    <ImageSlider />
                </div>
                <div>
                    <h5 className="text-center">Welcome to the Foodpedia</h5>
                    <p>Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.Velit cillum laborum do tempor. Cupidatat sint quis nisi ut. Anim ad ad tempor Lorem id ea. Ut eiusmod dolore sit ut voluptate exercitation elit est enim laborum. Ut quis velit et aliqua esse ullamco incididunt mollit sit.</p>
                </div>
                </div>
            </>
        )
    }

}

export default Content;

