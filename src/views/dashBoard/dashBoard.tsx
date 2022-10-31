import Header from '../../components/header/header'
import SideBar from '../../components/sideBar/sideBar'
import Sites from '../../components/sites/sites'
import './dashBoard.css'

const DashBoard = () => {
  return (
    <div>
      <div className="dashBoardContainer">
        <div className="sideBarMenu">
          <SideBar />
        </div>

        <div className="dashBoardHeader">
          <Header />
        </div>

        <div className="dashBoardSites">
          <Sites />
        </div>
      </div>
    </div>
  )
}

export default DashBoard
