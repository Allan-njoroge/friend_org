import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Home", link: "/admin" },
    { name: "Events", link: "/admin/events" },
    { name: "Blogs", link: "/admin/blogs" },
    { name: "Website", link: "/" },
  ];

  return (
    <Sheet>
      <SheetTrigger className="text-2xl md:text-3xl absolute top-3 left-3 p-1 md:p-2 border border-black">
        <MdMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">ADMIN DASHBOARD</SheetTitle>
          <SheetDescription className="pt-10 text-left">
            <ul className="flex flex-col gap-2 text-lg lg:text-xl">
              {links.map((item, index) => (
                <Link
                  to={item.link}
                  key={index}
                  className="hover:text-black px- py-1"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
