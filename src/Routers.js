import Main from './Main'
import Form from './components/Form';
import Error from './Error';

import COMPONENT_ONE from './components/COMPONENT_ONE';
import COMPONENT_TWO from './components/COMPONENT_TWO';
import COMPONENT_THREE from './components/COMPONENT_THREE';


const router = [
    {
        path    : '/',
        element : <Main/>,
        errorElement   : <Error/>,
        children   : [
            {
                path    : '/',
                element : <Form/>,
                exact   : true,
            },
            {
                path    : '/one',
                element : <COMPONENT_ONE/>,
            },
            {
                path    : '/two',
                element : <COMPONENT_TWO/>,
            },
            {
                path    : '/three',
                element : <COMPONENT_THREE/>,
            },
        ]
    }
]
export default router;
