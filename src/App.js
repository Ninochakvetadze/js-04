import "./css/App.css";
import { Header, Footer } from "./pages";

function ButtonComponent(props) {
    const { name, customClassName } = props;
    return <button className={customClassName}>{name}</button>;
}

function App() {
    // function ButtonComponent(props) {
    //     const { name, customClassName } = props;
    //     return <button className={customClassName}>{name}</button>;
    // }
    return (
        <>
            <Header />
            <ButtonComponent name="John" customClassName="red" />
            <ButtonComponent name="Giorgi" customClassName="blue" />
            <Footer />
        </>
    );
}

export default App;
