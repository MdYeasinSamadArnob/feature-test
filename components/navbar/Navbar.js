import React,{useState} from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
// import { Menu, Transition } from '@headlessui/react'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'
import { Avatar} from 'antd';
import useAuth from "../../src/hooks/auth";


const { SubMenu } = Menu;



function Navbar(props) {

  const {user,loginWithGoogle,error,setUser,logout}=useAuth()
    // const [open,setOpen]=useState(false)
    const router = useRouter()

    const menu = (
        <Menu>
    <Menu.ItemGroup title="Group title">
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
    </Menu.ItemGroup>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
      );


      const menu2 = (
        <Menu>
          <Menu.Item key="0">
            <p className="text-sm font-medium text-gray-700 mb-0">{user?.displayName?user.displayName:typeof window != 'undefined'&&localStorage?.getItem(user?.email)}</p>
            <p className="text-sm font-normal text-gray-500">{user?.email}</p>
            <Menu.Divider />

          </Menu.Item>
          <Menu.Item key="1">
            <p className="text-sm font-normal text-gray-700">View profile</p>
          </Menu.Item>
          
          <Menu.Item key="2">
            <p className="text-sm font-normal text-gray-700" >Settings</p>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">
            <p className="text-sm font-normal text-gray-700" onClick={logout}>Log out</p>
            </Menu.Item>
        </Menu>
      );

      const handleNavToHome=()=>{
        // next router to home page
        router.push('/')
      }

      const handleNavToLogin=()=>{
        // next router to login page
        router.push('/login')
      }

      const handleNavToSignup=()=>{
        // next router to signup page
        router.push('/signup')
      }



  return (
    <nav className={`bg-white fixed top-0 w-full h-[70px] ${styles.overall} z-50 `}>
        {/* centralizing components */}
        <div className="bg-white h-full w-full px-5 lg:px-0 lg:w-3/5 mx-auto flex justify-between items-center">
         {/* Left Part */}
         <div className="flex justify-center items-center space-x-4">
             <div className="cursor-pointer">
          <Image onClick={handleNavToHome} src="/Logos/blue-tutorship-logo-outline.svg" alt="color-tutorship-logo" height={100} width={140} />
          </div>
          <ul className="flex space-x-4 justify-center items-center h-full mt-2">
              <li>
              <Dropdown overlay={menu}>
    <a className="ant-dropdown-link text-black text-sm font-bold hidden md:inline-block" onClick={e => e.preventDefault()}>
       Product <DownOutlined />
    </a>
  </Dropdown>
  </li>
              <li className="text-sm font-bold hidden md:inline-block cursor-pointer">Community</li>

          </ul>
          
         </div>
            {/* Right Part */}
            {props.loggedIn?
            <div className="flex justify-center items-center space-x-6">
              
              <Dropdown  overlay={menu2} >
    <a className="ant-dropdown-link " onClick={e => e.preventDefault()}>
    <Avatar size="large" src={user?.photoURL?user?.photoURL:"https://avatars.dicebear.com/api/initials/your-custom-seed.svg"} /> <span className="text-black ml-2 font-medium text-sm hover:text-blue-500">{user?.displayName?user.displayName:typeof window != 'undefined'&&localStorage?.getItem(user?.email)}<DownOutlined /></span>
    </a>
  </Dropdown>
              
              </div>
              :<div className="flex justify-center items-center space-x-6">
              <button onClick={handleNavToLogin} className="text-gray-500 hidden md:inline-block">Login</button>
                <button onClick={handleNavToSignup} className={`bg-[#0C233A] text-white ${styles.signup} hidden md:inline-block`}>Sign Up</button>
                <button className={`bg-[#0C233A] text-white ${styles.signup} md:hidden `}>-</button>
                {/* <Menu >
      <Menu.Button>More</Menu.Button>
      <Menu.Items as="ul" className=" absolute mt-24 mr-10">
        <Menu.Item as="li">
          <span>Pay Now</span>
        </Menu.Item>
        <Menu.Item as="li">
          <span>Pay Now</span>
        </Menu.Item>
      </Menu.Items>
    </Menu> */}
                
            </div>   }

        </div>
    </nav>
  )
}

export default Navbar