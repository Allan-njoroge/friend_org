import Sidebar from '@/components/major/Sidebar'
import Stats from '@/sections/admin/dashboard/Stats'
import { useEffect } from 'react'

const Admin = () => {
  useEffect(() => {
    document.title = "Admin Dashboard"
  })
  return (
    <div className="bg-secondary">
      <Sidebar />
      <div className="p-10 lg:pl-28 pt-20 lg:pt-10">
        <h1 className="font-semibold mb-5 text-xl">OVERVIEW</h1>
        <Stats />
      </div>
    </div>
  )
}

export default Admin