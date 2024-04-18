import Sidebar from "@/components/major/Sidebar";
import { Button } from "@/components/ui/button";
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
import EventTable from "@/sections/admin/adminEvent/EventTable";
//firebase add event function
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const AdminEvents = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const addEvent = async (e) => {
    try{
      const res = await setDoc(doc(db, "rafikistry", "title"), {
        title: "Pamoja Tupendane",
        date: "April 6 2024",
        start: "10:00 am",
        ends: "4:00 pm",
        venue: "Rafikistry",
        link: "https:justallan.netlify.app",
        description:
          "d,fkdsjfkjsdlfjsdljflksdjfljlsk oshfsdl slfjsl flshidf skadalhflaeh lfs",
        image: "",
      });
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <div className="">
      <Sidebar />
      <div className="p-10 lg:pl-28 pt-20 lg:pt-10">
        <div>
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">
              Events
            </h1>

            <AlertDialog>
              <AlertDialogTrigger className="border border-black flex my-auto px-2 bg-primary">
                
                  <span className="text-3xl md:mr-1">+ </span>{" "}
                  <span className="hidden md:flex my-auto"> New Event</span>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Create New Event</AlertDialogTitle>
                  <AlertDialogDescription>
                    <form
                      action=""
                      onSubmit={addEvent}
                      className="flex flex-col gap-5 mt-10"
                    >
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

                      <div className="flex gap-3 lg:gap-0 justify-between">
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
                      <AlertDialogFooter className="flex">
                        <AlertDialogCancel className="border border-black">Cancel</AlertDialogCancel>
                        <Button type="submit">Create</Button>
                      </AlertDialogFooter>
                    </form>
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        <EventTable />
      </div>
    </div>
  );
};

export default AdminEvents;
