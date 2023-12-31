import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Blog from'./views/Blog.js';
import ListadoPeliculas from './views/ListadoPeliculas';

function App(){
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ListadoPeliculas/>}/>
				<Route path="/blog" element={<Blog/>}/>
			</Routes>
			{/* Switch fue reemplazado por Routes */}
		</Router>
	);
}

export default App;


