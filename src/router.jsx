import About from "./Pages/About";
import LinkLayouts from "./Layouts/LinkLayouts";
import Home from "./Pages/Home";
import Facts from "./Pages/Facts";

const router = [

    {element: <LinkLayouts/>,
    path: '/',
    children: [
        {
            element: <Home/>,
            index: true
        },
        {
            element: <About />,
            path: 'about',
            children: [
                {
                element: <Facts />,
                path: 'facts/:id'
                }
            ]
        },
       
    ]},
]

export default router;