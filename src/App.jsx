import { Header } from "./components/header/Header";
import { HeaderCTA } from "./components/header/HeaderCTA";
import HomePage from "./components/Layouts/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/footer/Footer";
import { EndSection } from "./components/sections/EndSection";
import AboutUs from "./components/pages/AboutUs";
import { Gallery } from "./components/pages/Gallery";
import { Blog } from "./components/pages/Blog";
import { ContactUs } from "./components/pages/ContactUs";
import { Classes } from "./components/pages/Classes";
import LazyLoading from "./components/sections/lazyLoading";

function App() {
	return (
		<BrowserRouter>
			<HeaderCTA />

			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<LazyLoading childern={<AboutUs />} />} />
				<Route path="/gallery" element={<LazyLoading childern={<Gallery />} />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/classes" element={<Classes />} />
			</Routes>
			<ContactSection />
			<Footer />
			<EndSection />
		</BrowserRouter>
	);
}

export default App;
