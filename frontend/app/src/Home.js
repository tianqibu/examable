import GettingStartedList from './components/GettingStartedList'
import Launch from './components/Launch'
import Article from './components/Article'
import ExampleCards from './components/ExampleCards'

const Home = () => {
    return (
        <div>
            <Article />
            <GettingStartedList />
            <Launch />
            <ExampleCards />
        </div>
    )
}

export default Home
