import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const EventTable = () => {
  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <Table>
        <TableCaption>A list of your current events</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Serial</TableHead>
            <TableHead className="w-2/3">Event Title</TableHead>
            <TableHead colSpan="2" className="text-center">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1.</TableCell>
            <TableCell className="font-medium truncate uppercase">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, commodi?
            </TableCell>
            <TableCell className="text-center">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="bg-green-400 flex gap-1 hover:bg-green-300">
                    <FaRegEdit className="my-auto" /> Edit
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Create New Event</AlertDialogTitle>
                    <AlertDialogDescription>
                      <form action="" className="flex flex-col gap-5 mt-10">
                        <div className="relative">
                          <label
                            for="title"
                            className="absolute -top-2 left-2 px-2 bg-white text-black"
                          >
                            Event Title
                          </label>
                          <Input
                            id="title"
                            required
                            className="border-muted-foreground/50"
                          />
                        </div>

                        <div className="relative">
                          <label
                            for="date"
                            className="absolute -top-2 left-2 px-2 bg-white text-black"
                          >
                            Event Date
                          </label>
                          <Input
                            id="date"
                            required
                            className="border-muted-foreground/50"
                          />
                        </div>

                        <div className="lg:flex justify-between">
                          <div className="relative">
                            <label
                              for="starts"
                              className="absolute -top-2 left-2 px-2 bg-white text-black"
                            >
                              Starts
                            </label>
                            <Input
                              id="starts"
                              required
                              className="border-muted-foreground/50"
                            />
                          </div>
                          <div className="relative">
                            <label
                              for="ends"
                              className="absolute -top-2 left-2 px-2 bg-white text-black"
                            >
                              Ends
                            </label>
                            <Input
                              id="ends"
                              required
                              className="border-muted-foreground/50"
                            />
                          </div>
                        </div>

                        <div className="relative">
                          <label
                            for="venue"
                            className="absolute -top-2 left-2 px-2 bg-white text-black"
                          >
                            Event Venue
                          </label>
                          <Input
                            id="venue"
                            required
                            className="border-muted-foreground/50"
                          />
                        </div>
                        <div className="relative">
                          <label
                            for="link"
                            className="absolute -top-2 left-2 px-2 bg-white text-black "
                          >
                            Event Link
                          </label>
                          <Input
                            id="link"
                            className="border-muted-foreground/50"
                          />
                        </div>

                        <div className="relative">
                          <label
                            for="description"
                            className="absolute -top-2 left-2 px-2 bg-white text-black "
                          >
                            Event Description
                          </label>
                          <Textarea
                            rows="5"
                            required
                            className="border-muted-foreground/50"
                            id="description"
                          ></Textarea>
                        </div>

                        <div className="relative">
                          <Input
                            type="file"
                            id="link"
                            className="border-muted-foreground/50"
                          />
                        </div>
                        <AlertDialogFooter>
                          <button>
                          <AlertDialogCancel className="border border-black">
                            Cancel
                          </AlertDialogCancel>
                          </button>
                          <Button type="submit">Update</Button>
                        </AlertDialogFooter>
                      </form>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>

            <TableCell>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="bg-red-400 flex gap-1 hover:bg-red-300">
                    <RiDeleteBin5Line className="my-auto" /> Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are You sure you want to delete this event?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the account and remove your data from the server.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="border-black">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default EventTable;
