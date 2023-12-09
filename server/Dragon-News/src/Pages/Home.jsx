import Left from "../Components/Left";
import Logo from "../Components/Logo";
import Middle from "../Components/Middle";
import NavBar from "../Components/NavBar";
import Right from "../Components/Right";



const Home = () => {
    return (
        <div>
            <Logo></Logo>
            <NavBar></NavBar>
            
            <div className="grid md:grid grid-cols-4 mt-10 gap-4 border mx-auto">
               <Left></Left>
               <Middle></Middle>
               <Right></Right>
            </div>
        </div>
    );
};

export default Home;