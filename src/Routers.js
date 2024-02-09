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
                path    : '/home',
                element : <Home />,
                exact   : true,
            }
        ]
    }
]
export default Router;
