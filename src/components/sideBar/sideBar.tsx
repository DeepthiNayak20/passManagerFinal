import './sideBar.css'

const SideBar = () => {
  return (
    <div>
      <div className="">
        <div className="logoBurger">
          <img src={require('../../assets/icons/burger_Menu.png')} alt="icon" />
        </div>
        <div className="homeIcn">
          <img src={require('../../assets/icons/home_icn.png')} alt="icon" />
        </div>
        <div className="round"></div>
      </div>
    </div>
  )
}

export default SideBar
