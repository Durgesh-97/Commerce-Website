import { NavLink } from "react-router-dom/cjs/react-router-dom";

const Subheader = () => {
    return (
        <body>
            <div className="subheader-container">
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/Category-1">Category 1</NavLink></li>
                    <li><NavLink exact to="/Category-1">Category 1</NavLink></li>
                    <li><NavLink exact to="Category-2">Category 2</NavLink></li>
                    <li><NavLink exact to="Category-3">Category 3</NavLink></li>
                    <li><NavLink exact to="Category-4">Category 4</NavLink></li>
                </ul>
            </div>
        </body>

    )
}
export default Subheader;