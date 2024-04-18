import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Website
import { Home, About, Work, Events, Blog, Contact, SingleBlog, SoloEvent} from '@/pages/website'
// Admin Dashboard 
import { Login, Dashboard, CreateEvent, AdminEvents } from '@/pages/admin'

const RoutePaths = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/events' element={ <Events /> } />
            <Route path='/about-us' element={ <About /> } />
            <Route path='/our-work' element={ <Work /> } />
            <Route path='/blogs' element={ <Blog /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='blogs/single-blog' element={ <SingleBlog /> } />
            <Route path='events/single-event' element={ <SoloEvent /> } />

            <Route path='/login' element={ <Login /> } />
            <Route path='/admin' element={ <Dashboard /> } />
            <Route path='/admin/events' element={ <AdminEvents /> } />
            <Route path='/create-event' element={ <CreateEvent /> } />

        </Routes>
    </Router>
  )
}

export default RoutePaths;