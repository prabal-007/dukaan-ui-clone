import Main from "./components/Main"
import RevenueCard from "./components/RevenueCard"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"

function App() {

  return (
    <>
      <div>
        <Sidebar />
        <div className="sm:ml-64">
                <Main />
            </div>
      </div>
    </>
  )
}

export default App
