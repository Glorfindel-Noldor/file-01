import Main from './Main'
import Home from './components/Home';
import Error from './Error';


const Router = [
    {
        path    : '/',
        element : <Main />,
        error   : <Error />,
        child   : [
            {
                path    : '/',
                element : <Home />,
                exact   : true,
            }
        ]
    }
]
export default Router;
