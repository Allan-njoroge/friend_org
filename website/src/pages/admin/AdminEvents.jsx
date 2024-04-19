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
import { userInput } from '@/form'

//firebase add event function
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const AdminEvents = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({})


  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]:value})
  }

  console.log(data)

  // Function to add events to firebase db
  const addEvent = async (e) => {
    try{
      await setDoc(doc(db, "events", data.title), {
      ...data, 

      timeStamp: serverTimestamp(),
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
                      {/* Map inputs to userInput array */}
                      {userInput.map((input) => (
                        <div key={input.id} className="relative">
                          <label
                            htmlFor={input.id}
                            className="absolute -top-2 left-2 px-2 bg-white text-black"
                          >
                            {input.label}
                          </label>
                          {/* Render textarea for description, and styled inputs for start and end */}
                          {input.id === "eventDescription" ? (
                            <Textarea
                              rows="5"
                              required
                              className="border-muted-foreground/50"
                              id={input.id}
                              onChange={handleInput}
                            ></Textarea>
                          ) : (
                            <Input
                              id={input.id}
                              required
                              onChange={handleInput}
                              className="border-muted-foreground/50"
                              type={input.type}
                            />
                          )}
                        </div>
                      ))}

                      {/* File input */}
                      <div className="relative">
                        <Input
                          type="file"
                          id="eventImage"
                          onChange = {(e) => setFile(e.target.file[0])}
                          className="border-muted-foreground/50"
                        />
                      </div>
                      {/* AlertDialogFooter with Cancel and Create buttons */}
                      <AlertDialogFooter className="flex">
                        <AlertDialogCancel className="border border-black">
                          Cancel
                        </AlertDialogCancel>
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
