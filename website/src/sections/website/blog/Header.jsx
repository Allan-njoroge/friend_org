import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { PiSortAscending } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

const Header = () => {

    const [sortOrder, setSortOrder] = useState("Newest");

    const changeSortOrder = (order) => {
        setSortOrder(order);
    };

  return (
    <div className="max-w-[1440px] flex justify-center mx-auto">
        <div className="w-full mx-5 lg:mx-10 my-10 border-b border-gray-500">
            <div className="lg:flex justify-between py-3 mx-10">
                <h1 className="text-3xl">Blogs</h1>

                <div className="w-full flex justify-between">
                    {/* Search Section */}
                    <div className="w-full lg:w-1/2 lg:mx-10 flex my-auto">
                        <Input className="border-gray-400" placeholder="Search blog..." />
                        <Button className="-ml-[7%]">
                            <FaSearch />
                        </Button>
                    </div>
                    {/* Sort Dropdowm Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex my-auto gap-2 px-4 py-2 bg-gray-200 focus:outline-none">   {sortOrder} <PiSortAscending className="my-auto text-xl" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => changeSortOrder("Newest")}>Newest</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => changeSortOrder("Oldest")}>Oldest</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => changeSortOrder("Alphabetical")}>Alphabetical</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header