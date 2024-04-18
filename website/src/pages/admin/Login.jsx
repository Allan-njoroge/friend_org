import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'

const Login = () => {
  useEffect(() => {
    document.title = "Admin Login"
  })

  return (
    <div className="relative h-[100vh] bg-secondary flex justify-center">
      <div className="w-5/6 lg:w-1/3 mx-auto my-auto pb-10 border border-muted-foreground">
       <h1 className="text-center py-5 mb-10 text-2xl font-semibold bg-primary">ADMIN LOGIN</h1>

       <form action="" className="w-3/4 mx-auto flex flex-col gap-5">
        <p className="text-center text-red-600">Email or Password Is Invalid !</p>
        <Input type="email" placeholder="Email Address" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit" className="w-1/2 lg:w-1/4 mx-auto rounded-none border border-black">Log In</Button>
       </form>
      </div>
    </div>
  )
}

export default Login