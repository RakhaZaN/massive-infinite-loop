/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

function Layout(props) {
    return (
        <div>
            <Navbar/>
            <main>
                <Container>
                    {props.children}
               </Container>
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;