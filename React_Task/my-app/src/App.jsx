import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import String from "./String";
import CountLocalStorage from "./CountLocalStorage";
import Counter from "./Counter";
import Countdown from "./Countdown";
import Password from "./Password";
import Clock from "./Clock";
import GuessNum from "./GuessNum";
import Crud from "./Crud";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Todo from "./Todo";
import Calculator from "./Calculator";
import GstCalculator from "./GstCalculator";
import Weather from "./Weather";
import UserAPI from "./UserApi";
import News from "./News";
import Movie from "./Movie"
import Theme from "./Theme";
import "./App.css";
import CurrencyConverter from "./Currency";

function App() {
  return (
    <>
      <div className="nav">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
        <Link to="/string"><button>String</button></Link>
        <Link to="/storage"><button>LocalStorage</button></Link>
        <Link to="/counter"><button>Counter</button></Link>
        <Link to="/countdown"><button>Countdown</button></Link>
        <Link to="/password"><button>Password</button></Link>   
        <Link to="/clock"><button>Clock</button></Link>
        <Link to="/guessnum"><button>GuessNum</button></Link>
        <Link to="/crud"><button>Crud</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/dashboard"><button>Dashboard</button></Link>
        <Link to="/todo"><button>Todo</button></Link>
        <Link to="/calc"><button>Calculator</button></Link>
        <Link to="/gstcalc"><button>GST</button></Link>
        <Link to="/weather"><button>Weather</button></Link>
        <Link to="/user"><button>UserAPI</button></Link>
        <Link to="/news"><button>News</button></Link>
        <Link to="/movie"><button>Movie</button></Link>
        <Link to="/currency"><button>Currency Converter</button></Link>
        <Link to="/theme"><button>Theme</button></Link>

      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/string" element={<String />} />
        <Route path="/storage" element={<CountLocalStorage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/password" element={<Password />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/guessnum" element={<GuessNum />} />
        <Route path="/crud" element={<Crud />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/gstcalc" element={<GstCalculator />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/user" element={<UserAPI />} />
        <Route path="/news" element={<News />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/currency" element={<CurrencyConverter />} />
        <Route path="/theme" element={<Theme   />} />
      </Routes>
    </>
  );
}

export default App;