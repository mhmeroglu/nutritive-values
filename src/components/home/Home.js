import image from './foods.png'
const Home = () => {
    return (
        <div className="home">
            <h2>MANAGE YOUR DIET</h2>
            <h3>Get the calories, fat, carbs, protein and more for over 37,000 food and drinks. Then add them to your Daily Totals to see how your calories add up!</h3>
            <img src={image} alt="foods" />
        </div>
    );
}

export default Home;