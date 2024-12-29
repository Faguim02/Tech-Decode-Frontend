import { Link } from "react-router-dom";

export default function LeftNavigation() {
  return (
    <nav className="p-4 bg-white rounded-md shadow-md">
        <ul>
            <li>
                <Link to="/admin/dashboard" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V12H3C3 16.9706 7.02944 21 12 21Z" fill="black" fill-opacity="0.15"/>
                        <path d="M3 12C3 16.9706 7.02944 21 12 21C14.4853 21 16.7353 19.9926 18.364 18.364M3 12C3 7.02944 7.02944 3 12 3M3 12H12M12 3C16.9706 3 21 7.02944 21 12C21 14.4853 19.9926 16.7353 18.364 18.364M12 3V12M18.364 18.364L12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Dashboard</span>
                </Link>
                <Link to="/admin/news" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 21H5V3H13V7C13 8 14 9 15 9H19V21Z" fill="black" fill-opacity="0.15"/>
                        <path d="M8 13H14M8 17H16M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Noticias</span>
                </Link>
                <Link to="/admin/category" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99985 6H20.9998V18H7.99985L2.70696 12.7071C2.31643 12.3166 2.31643 11.6834 2.70696 11.2929L7.99985 6ZM9.99988 14C11.1044 14 11.9999 13.1046 11.9999 12C11.9999 10.8954 11.1044 10 9.99988 10C8.89531 10 7.99988 10.8954 7.99988 12C7.99988 13.1046 8.89531 14 9.99988 14Z" fill="black" fill-opacity="0.15"/>
                        <path d="M20.9998 18V6H7.99985L2.70696 11.2929C2.31643 11.6834 2.31643 12.3166 2.70696 12.7071L7.99985 18H20.9998Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.9998 12C11.9998 13.1046 11.1044 14 9.99985 14C8.89528 14 7.99985 13.1046 7.99985 12C7.99985 10.8954 8.89528 10 9.99985 10C11.1044 10 11.9998 10.8954 11.9998 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Categorias</span>
                </Link>
                <Link to="/admin/comment" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 21V16H4V4H20V16H12L7 21Z" fill="black" fill-opacity="0.15"/>
                        <path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Comentarios</span>
                </Link>
                <Link to="/admin/users" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">    
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 15H5C2.79086 15 1 16.7909 1 19V21H17V19C17 16.7909 15.2091 15 13 15Z" fill="black" fill-opacity="0.15"/>
                        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" fill="black" fill-opacity="0.15"/>
                        <path d="M19 15C21.2091 15 23 16.7909 23 19V21H21M16 10.874C17.7252 10.4299 19 8.86383 19 6.99999C19 5.13615 17.7252 3.57005 16 3.12601M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM5 15H13C15.2091 15 17 16.7909 17 19V21H1V19C1 16.7909 2.79086 15 5 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>Usarios</span>
                </Link>

            </li>
        </ul>
    </nav>
  );
}